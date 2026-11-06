import { readFile, rename, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const catalogUrl = new URL('https://www.dishisjewels.com/all-jewellery');
const productsPerPage = 15;
const dailyLimit = 2;
const maxPagesToScan = 5;
const trackingCodePattern = /^[A-Za-z0-9_-]+$/;

export function getMoroccoDateTime(timestamp = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Africa/Casablanca',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(timestamp);
    const value = type => parts.find(part => part.type === type)?.value;
    return {
        date: `${value('year')}-${value('month')}-${value('day')}`,
        hour: Number(value('hour')),
        minute: Number(value('minute'))
    };
}

function decodeHtml(value) {
    const namedEntities = {
        amp: '&',
        apos: "'",
        hellip: '…',
        lt: '<',
        mdash: '—',
        nbsp: ' ',
        ndash: '–',
        quot: '"',
        reg: '®',
        rsquo: '’',
        lsquo: '‘',
        gt: '>'
    };
    return value.replace(/&(?:#(\d+)|#x([0-9a-f]+)|([a-z]+));/gi, (entity, decimal, hex, named) => {
        if (decimal) return String.fromCodePoint(Number(decimal));
        if (hex) return String.fromCodePoint(parseInt(hex, 16));
        return namedEntities[named.toLowerCase()] ?? entity;
    });
}

function textFromHtml(value) {
    return decodeHtml(value.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}

export function addTrackingCode(productUrl, trackingCode) {
    if (typeof trackingCode !== 'string' || !trackingCodePattern.test(trackingCode)) {
        throw new Error('DISHIS_TRACKING_CODE is missing or invalid.');
    }
    const url = new URL(productUrl);
    if (url.protocol !== 'https:' ||
        !['dishisjewels.com', 'www.dishisjewels.com'].includes(url.hostname.toLowerCase())) {
        throw new Error('Dishis product URL must use HTTPS and point to dishisjewels.com.');
    }
    url.searchParams.set('tracking', trackingCode);
    return url.href;
}

export function parseDishisCatalog(html) {
    if (typeof html !== 'string') {
        throw new Error('Dishis catalog HTML is required.');
    }

    const starts = [...html.matchAll(/<div class="product-layout\b[^"]*">/gi)];
    if (starts.length === 0) {
        if (html.includes('Product Listing Section Start')) return [];
        throw new Error('Dishis catalog page did not contain the expected product listing.');
    }

    return starts.map((match, index) => {
        const start = match.index;
        const end = starts[index + 1]?.index ?? html.length;
        const card = html.slice(start, end);
        const productMatch = card.match(/<figure>\s*<a href="([^"]+)"[^>]*>[\s\S]*?<img\b[^>]*\bsrc="([^"]+)"/i);
        const titleMatch = card.match(/<h3>\s*<a\b[^>]*>([\s\S]*?)<\/a>/i);
        if (!productMatch || !titleMatch) {
            throw new Error(`Dishis product ${index + 1} has incomplete catalog data.`);
        }

        const imageUrl = new URL(productMatch[2], catalogUrl);
        if (imageUrl.protocol !== 'https:' ||
            !['dishisjewels.com', 'www.dishisjewels.com'].includes(imageUrl.hostname.toLowerCase())) {
            throw new Error(`Dishis product ${index + 1} has an invalid image URL.`);
        }

        const productUrl = new URL(productMatch[1], catalogUrl);
        if (productUrl.protocol !== 'https:' ||
            !['dishisjewels.com', 'www.dishisjewels.com'].includes(productUrl.hostname.toLowerCase())) {
            throw new Error(`Dishis product ${index + 1} has an invalid product URL.`);
        }

        return {
            title: textFromHtml(titleMatch[1]),
            price: '',
            old_price: '',
            price_verified: false,
            category: 'jewelry',
            image_url: imageUrl.href,
            product_url: productUrl.href
        };
    });
}

export function selectDailyProducts(feedProducts, publishedProducts, date, trackingCode, limit = dailyLimit) {
    if (!Array.isArray(feedProducts) || !Array.isArray(publishedProducts)) {
        throw new Error('Both feed and published data must contain a products array.');
    }
    if (!Number.isInteger(limit) || limit < 0) {
        throw new Error('Daily publishing limit must be a non-negative integer.');
    }

    const alreadyPublished = new Set();
    let publishedToday = 0;
    for (const product of publishedProducts) {
        if (!product || typeof product.affiliate_url !== 'string') {
            throw new Error('Published products file contains an invalid entry.');
        }
        alreadyPublished.add(product.affiliate_url);
        if (product.published_at === date) publishedToday += 1;
    }

    const remaining = Math.max(0, limit - publishedToday);
    if (remaining === 0) return [];
    const selected = [];
    for (const [index, product] of feedProducts.entries()) {
        if (!product || typeof product !== 'object' ||
            typeof product.title !== 'string' || !product.title.trim() ||
            typeof product.price !== 'string' ||
            (!product.price.trim() && product.price_verified !== false) ||
            typeof product.old_price !== 'string' ||
            product.category !== 'jewelry' ||
            typeof product.image_url !== 'string') {
            throw new Error(`Dishis product ${index + 1} has invalid catalog data.`);
        }

        const affiliateUrl = addTrackingCode(product.product_url, trackingCode);
        if (alreadyPublished.has(affiliateUrl)) continue;
        selected.push({
            title: product.title.trim(),
            price: product.price,
            old_price: product.old_price,
            price_verified: product.price_verified !== false,
            category: product.category,
            image_url: product.image_url,
            affiliate_url: affiliateUrl,
            published_at: date
        });
        alreadyPublished.add(affiliateUrl);
        if (selected.length >= remaining) break;
    }
    return selected;
}

async function fetchResponse(url, fetchImpl) {
    const response = await fetchImpl(url, {
        headers: { 'user-agent': 'AlHamzza daily product publisher' },
        signal: AbortSignal.timeout(20000)
    });
    if (!response.ok) {
        throw new Error(`Request to ${url} failed with HTTP ${response.status}.`);
    }
    return response;
}

async function getProductTitle(productUrl, fetchImpl) {
    const response = await fetchResponse(productUrl, fetchImpl);
    const html = await response.text();
    const titleMatch = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    if (!titleMatch) {
        throw new Error(`Dishis product page ${productUrl} did not contain a title.`);
    }
    const title = textFromHtml(titleMatch[1]);
    if (!title) throw new Error(`Dishis product page ${productUrl} has an empty title.`);
    return title;
}

async function readDishisProducts(publishedProducts, date, trackingCode, fetchImpl) {
    const publishedToday = publishedProducts.filter(product => product.published_at === date).length;
    const remaining = Math.max(0, dailyLimit - publishedToday);
    if (remaining === 0) return [];
    const firstPage = Math.floor(publishedProducts.length / productsPerPage) + 1;
    const pageNumbers = [...new Set([
        1,
        ...Array.from({ length: maxPagesToScan }, (_, index) => firstPage + index)
    ])];
    const candidates = [];
    for (const page of pageNumbers) {
        const pageUrl = new URL(catalogUrl);
        if (page > 1) pageUrl.searchParams.set('page', String(page));
        const response = await fetchResponse(pageUrl, fetchImpl);
        const html = await response.text();
        const products = parseDishisCatalog(html);
        if (products.length === 0) break;
        candidates.push(...products);

        const selected = selectDailyProducts(candidates, publishedProducts, date, trackingCode);
        if (selected.length >= remaining) {
            const selectedSourceProducts = selected.map(product => {
                const source = candidates.find(candidate =>
                    addTrackingCode(candidate.product_url, trackingCode) === product.affiliate_url);
                if (!source) throw new Error('Unable to match a selected product to its catalog page.');
                return source;
            });
            const titles = await Promise.all(selectedSourceProducts.map(product =>
                getProductTitle(product.product_url, fetchImpl)));
            return selected.map((product, index) => ({ ...product, title: titles[index] }));
        }
    }

    const selected = selectDailyProducts(candidates, publishedProducts, date, trackingCode);
    if (selected.length === 0) return [];
    const selectedSourceProducts = selected.map(product => {
        const source = candidates.find(candidate =>
            addTrackingCode(candidate.product_url, trackingCode) === product.affiliate_url);
        if (!source) throw new Error('Unable to match a selected product to its catalog page.');
        return source;
    });
    const titles = await Promise.all(selectedSourceProducts.map(product =>
        getProductTitle(product.product_url, fetchImpl)));
    return selected.map((product, index) => ({ ...product, title: titles[index] }));
}

async function readPublishedFile(filePath) {
    let contents;
    try {
        contents = await readFile(filePath, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') return { products: [] };
        throw error;
    }

    let data;
    try {
        data = JSON.parse(contents);
    } catch {
        throw new Error(`${filePath} is not valid JSON.`);
    }
    if (!data || !Array.isArray(data.products)) {
        throw new Error(`${filePath} must contain a products array.`);
    }
    return data;
}

export async function publishDailyProducts({
    now = new Date(),
    trackingCode = process.env.DISHIS_TRACKING_CODE,
    publishedPath = resolve('published-affiliate-products.json'),
    fetchImpl = fetch
} = {}) {
    const moroccoTime = getMoroccoDateTime(now);
    if (moroccoTime.hour !== 10) {
        return { published: 0, skipped: true, reason: 'outside-publishing-hour' };
    }
    if (!trackingCode || !trackingCodePattern.test(trackingCode)) {
        throw new Error('DISHIS_TRACKING_CODE is missing or invalid.');
    }

    const published = await readPublishedFile(publishedPath);
    const selected = await readDishisProducts(
        published.products,
        moroccoTime.date,
        trackingCode,
        fetchImpl
    );
    if (selected.length === 0) {
        return { published: 0, skipped: false, reason: 'no-new-products' };
    }

    const nextPublished = { products: [...published.products, ...selected] };
    const temporaryPath = `${publishedPath}.tmp`;
    await writeFile(temporaryPath, `${JSON.stringify(nextPublished, null, 2)}\n`, 'utf8');
    await rename(temporaryPath, publishedPath);
    return { published: selected.length, skipped: false, reason: 'published' };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
    publishDailyProducts().then(result => {
        console.log(`Dishis daily publisher: ${result.reason}; published ${result.published} product(s).`);
    }).catch(error => {
        console.error('Dishis daily publisher failed:', error);
        process.exitCode = 1;
    });
}
