const jsonHeaders = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
};

function jsonResponse(body, status, headers = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { ...jsonHeaders, ...headers }
    });
}

function corsHeaders(request, env) {
    const origin = request.headers.get("Origin");
    const allowedOrigins = (env.ALLOWED_ORIGINS || "")
        .split(",")
        .map(value => value.trim())
        .filter(Boolean);

    if (origin && !allowedOrigins.includes(origin)) return null;

    return {
        "Access-Control-Allow-Origin": origin || allowedOrigins[0] || "",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin"
    };
}

function toBase64Url(bytes) {
    let binary = "";
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value) {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized + "=".repeat((4 - normalized.length % 4) % 4));
    return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function signSession(payload, secret) {
    const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const encodedPayload = toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
    const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(encodedPayload));
    return `${encodedPayload}.${toBase64Url(new Uint8Array(signature))}`;
}

async function verifySession(token, secret) {
    if (!token || !secret) return false;
    const [encodedPayload, encodedSignature, extra] = token.split(".");
    if (!encodedPayload || !encodedSignature || extra) return false;

    const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["verify"]
    );
    const valid = await crypto.subtle.verify(
        "HMAC",
        key,
        fromBase64Url(encodedSignature),
        new TextEncoder().encode(encodedPayload)
    );
    if (!valid) return false;

    const payload = JSON.parse(new TextDecoder().decode(fromBase64Url(encodedPayload)));
    return Number.isFinite(payload.exp) && payload.exp > Date.now();
}

function validHttpsUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" && !url.username && !url.password;
    } catch {
        return false;
    }
}

function validateSubmission(body) {
    const platforms = new Set(["aliexpress", "amazon", "jumia", "alibaba", "temu"]);
    const categories = new Set(["tech", "home", "fashion"]);
    const fields = ["title", "price", "platform", "category", "image", "affLink"];

    if (!body || typeof body !== "object" || Array.isArray(body)) return "بيانات المنتج غير صالحة.";
    if (fields.some(field => typeof body[field] !== "string" || !body[field].trim())) {
        return "المرجو ملء جميع المعلومات المطلوبة.";
    }
    if (body.title.trim().length > 180 || body.price.trim().length > 40) {
        return "العنوان أو الثمن أطول من المسموح.";
    }
    if (typeof body.oldPrice !== "string" || body.oldPrice.trim().length > 40) {
        return "الثمن القديم غير صالح.";
    }
    if (!platforms.has(body.platform) || !categories.has(body.category)) {
        return "المنصة أو الصنف غير صالح.";
    }
    if (!validHttpsUrl(body.image.trim()) || !validHttpsUrl(body.affLink.trim())) {
        return "روابط الصورة والمنتج خاصها تكون آمنة (HTTPS).";
    }

    return null;
}

async function requireAdmin(request, env) {
    const authorization = request.headers.get("Authorization") || "";
    const match = authorization.match(/^Bearer (.+)$/);
    return match ? verifySession(match[1], env.SESSION_SECRET) : false;
}

async function checkRateLimit(request, env, route, maxRequests, windowMs) {
    const ip = request.headers.get("CF-Connecting-IP");
    if (!ip || !env.SESSION_SECRET) return false;

    const hash = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(`${env.SESSION_SECRET}:${ip}`)
    );
    const ipHash = toBase64Url(new Uint8Array(hash));
    const windowStart = new Date(Math.floor(Date.now() / windowMs) * windowMs).toISOString();
    const count = await env.DB.prepare(
        `INSERT INTO submission_rate_limits (ip_hash, route, window_start, request_count)
         VALUES (?, ?, ?, 1)
         ON CONFLICT (ip_hash, route, window_start)
         DO UPDATE SET request_count = request_count + 1
         RETURNING request_count`
    ).bind(ipHash, route, windowStart).first();
    await env.DB.prepare(
        `DELETE FROM submission_rate_limits WHERE window_start < ?`
    ).bind(new Date(Date.now() - 24 * windowMs).toISOString()).run();

    return Number(count.request_count) > maxRequests;
}

async function handleRequest(request, env) {
    const headers = corsHeaders(request, env);
    if (!headers) return jsonResponse({ error: "Origin not allowed." }, 403);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (request.method === "GET" && path === "/api/health") {
        return jsonResponse({ ok: true }, 200, headers);
    }

    if (request.method === "GET" && path === "/api/products") {
        const { results } = await env.DB.prepare(
            `SELECT id, title, price, old_price, platform, category, image_url, affiliate_url
             FROM submissions WHERE status = 'approved' ORDER BY approved_at DESC`
        ).all();
        const products = results.map(row => ({
            id: `community-${row.id}`,
            title: row.title,
            price: row.price,
            oldPrice: row.old_price,
            platform: row.platform,
            category: row.category,
            image: row.image_url,
            affLink: row.affiliate_url
        }));
        return jsonResponse({ products }, 200, headers);
    }

    if (request.method === "POST" && path === "/api/submissions") {
        if (!env.SESSION_SECRET) {
            return jsonResponse({ error: "خدمة الاقتراحات غير جاهزة." }, 503, headers);
        }
        if (await checkRateLimit(request, env, "submission", 5, 60000)) {
            return jsonResponse({ error: "وصلتي للحد المؤقت ديال الاقتراحات. عاود من بعد." }, 429, headers);
        }
        if (!request.headers.get("Content-Type")?.toLowerCase().includes("application/json")) {
            return jsonResponse({ error: "Content-Type must be application/json." }, 415, headers);
        }
        const rawBody = await request.text();
        if (new TextEncoder().encode(rawBody).byteLength > 12000) {
            return jsonResponse({ error: "الطلب أكبر من المسموح." }, 413, headers);
        }

        let body;
        try {
            body = JSON.parse(rawBody);
        } catch {
            return jsonResponse({ error: "تعذر قراءة بيانات المنتج." }, 400, headers);
        }
        const validationError = validateSubmission(body);
        if (validationError) return jsonResponse({ error: validationError }, 400, headers);

        await env.DB.prepare(
            `INSERT INTO submissions
                (title, price, old_price, platform, category, image_url, affiliate_url, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`
        ).bind(
            body.title.trim(),
            body.price.trim(),
            body.oldPrice.trim(),
            body.platform,
            body.category,
            body.image.trim(),
            body.affLink.trim()
        ).run();

        return jsonResponse({ message: "توصلنا باقتراحك، وغادي يبقى قيد المراجعة حتى تتم الموافقة عليه." }, 201, headers);
    }

    if (request.method === "POST" && path === "/api/admin/login") {
        if (!env.ADMIN_PASSWORD || !env.SESSION_SECRET) {
            return jsonResponse({ error: "إعداد دخول الإدارة غير مكتمل." }, 503, headers);
        }
        if (await checkRateLimit(request, env, "admin-login", 10, 15 * 60 * 1000)) {
            return jsonResponse({ error: "محاولات دخول كثيرة. عاود من بعد 15 دقيقة." }, 429, headers);
        }
        let body;
        try {
            body = await request.json();
        } catch {
            return jsonResponse({ error: "بيانات الدخول غير صالحة." }, 400, headers);
        }
        if (!body || typeof body.password !== "string" || body.password !== env.ADMIN_PASSWORD) {
            return jsonResponse({ error: "كلمة السر غير صحيحة." }, 401, headers);
        }

        const token = await signSession({ exp: Date.now() + 8 * 60 * 60 * 1000 }, env.SESSION_SECRET);
        return jsonResponse({ token }, 200, headers);
    }

    if (path.startsWith("/api/admin/")) {
        if (!await requireAdmin(request, env)) {
            return jsonResponse({ error: "خاصك تسجل الدخول من جديد." }, 401, headers);
        }

        if (request.method === "GET" && path === "/api/admin/submissions") {
            const { results } = await env.DB.prepare(
                `SELECT id, title, price, old_price, platform, category, image_url, affiliate_url, created_at
                 FROM submissions WHERE status = 'pending' ORDER BY created_at ASC`
            ).all();
            const submissions = results.map(row => ({
                id: row.id,
                title: row.title,
                price: row.price,
                oldPrice: row.old_price,
                platform: row.platform,
                category: row.category,
                image: row.image_url,
                affLink: row.affiliate_url,
                createdAt: row.created_at
            }));
            return jsonResponse({ submissions }, 200, headers);
        }

        const statusMatch = path.match(/^\/api\/admin\/submissions\/(\d+)\/(approve|reject)$/);
        if (request.method === "PATCH" && statusMatch) {
            const [, id, action] = statusMatch;
            const status = action === "approve" ? "approved" : "rejected";
            const result = await env.DB.prepare(
                `UPDATE submissions SET status = ?, approved_at = CASE WHEN ? = 'approved' THEN CURRENT_TIMESTAMP ELSE NULL END
                 WHERE id = ? AND status = 'pending'`
            ).bind(status, status, id).run();
            if (!result.meta.changes) {
                return jsonResponse({ error: "الاقتراح غير موجود أو تمت مراجعته من قبل." }, 409, headers);
            }
            return jsonResponse({ status }, 200, headers);
        }

        return jsonResponse({ error: "المسار غير موجود." }, 404, headers);
    }

    return jsonResponse({ error: "المسار غير موجود." }, 404, headers);
}

export default {
    async fetch(request, env) {
        try {
            return await handleRequest(request, env);
        } catch (error) {
            console.error("Worker request failed:", error);
            const headers = corsHeaders(request, env) || {};
            return jsonResponse({ error: "وقع خطأ داخلي. عاود المحاولة من بعد." }, 500, headers);
        }
    }
};
