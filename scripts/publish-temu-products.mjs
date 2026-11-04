import { readFile, rename, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const categories = new Map([
    ['hot items', 'hot_items'],
    ['hot_items', 'hot_items'],
    ['tech', 'tech'],
    ['home', 'home'],
    ['fashion', 'fashion'],
    ['jewelry', 'jewelry'],
    ['furniture', 'furniture'],
    ['curtains', 'curtains'],
    ['remote services', 'remote_services'],
    ['remote_services', 'remote_services'],
    ['cars', 'cars'],
    ['bicycles', 'bicycles']
]);
const maxImageBytes = 2 * 1024 * 1024;

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

function validateProduct(product, index) {
    const prefix = `Product ${index + 1}`;
    if (!product || typeof product !== 'object' || Array.isArray(product)) {
        throw new Error(`${prefix} must be an object.`);
    }

    for (const field of ['title', 'price', 'old_price', 'category', 'image_url', 'affiliate_url']) {
        if (typeof product[field] !== 'string') {
            throw new Error(`${prefix} is missing the string field "${field}".`);
        }
    }

    const normalized = {
        title: product.title.trim(),
        price: product.price.trim(),
        old_price: product.old_price.trim(),
        category: categories.get(product.category.trim().toLowerCase()),
        image_url: product.image_url.trim(),
        affiliate_url: product.affiliate_url.trim()
    };
    if (!normalized.title || normalized.title.length > 180 ||
        !normalized.price || normalized.price.length > 40 ||
        normalized.old_price.length > 40) {
        throw new Error(`${prefix} has an invalid title or price.`);
    }
    if (!normalized.category) {
        throw new Error(`${prefix} has an unsupported category.`);
    }

    if (normalized.image_url.startsWith('data:')) {
        const match = normalized.image_url.match(/^data:image\/(?:jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/);
        if (!match || Buffer.from(match[1], 'base64').length > maxImageBytes) {
            throw new Error(`${prefix} has an invalid or oversized uploaded image.`);
        }
    } else {
        let imageUrl;
        try {
            imageUrl = new URL(normalized.image_url);
        } catch {
            throw new Error(`${prefix} has an invalid image URL.`);
        }
        if (imageUrl.protocol !== 'https:') {
            throw new Error(`${prefix} image URL must use HTTPS.`);
        }
    }

    if (normalized.affiliate_url) {
        let affiliateUrl;
        try {
            affiliateUrl = new URL(normalized.affiliate_url);
        } catch {
            throw new Error(`${prefix} has an invalid affiliate URL.`);
        }
        if (affiliateUrl.protocol !== 'https:') {
            throw new Error(`${prefix} affiliate URL must use HTTPS.`);
        }
        const affiliateHost = affiliateUrl.hostname.toLowerCase();
        if (!(affiliateHost === 'temu.com' || affiliateHost.endsWith('.temu.com') ||
            affiliateHost === 'temu.to' || affiliateHost.endsWith('.temu.to'))) {
            throw new Error(`${prefix} affiliate URL must point to Temu.`);
        }
    }

    return normalized;
}

function getProductIdentity(product) {
    if (product.affiliate_url) return `affiliate:${product.affiliate_url}`;
    return `product:${JSON.stringify([
        product.title?.trim().toLowerCase() || '',
        product.category?.trim().toLowerCase() || '',
        product.image_url?.trim() || ''
    ])}`;
}

export function selectDailyProducts(feedProducts, publishedProducts, date, dailyLimit = 3) {
    if (!Array.isArray(feedProducts) || !Array.isArray(publishedProducts)) {
        throw new Error('Both feed and published data must contain a products array.');
    }
    const alreadyPublished = new Set();
    let publishedToday = 0;
    for (const product of publishedProducts) {
        if (!product || typeof product.affiliate_url !== 'string') {
            throw new Error('Published products file contains an invalid entry.');
        }
        alreadyPublished.add(getProductIdentity(product));
        if (product.published_at === date) publishedToday += 1;
    }

    const remaining = Math.max(0, dailyLimit - publishedToday);
    if (remaining === 0) return [];
    const selected = [];
    for (const [index, product] of feedProducts.entries()) {
        const validProduct = validateProduct(product, index);
        const identity = getProductIdentity(validProduct);
        if (alreadyPublished.has(identity)) continue;
        selected.push({ ...validProduct, published_at: date });
        alreadyPublished.add(identity);
        if (selected.length >= remaining) break;
    }
    return selected;
}

async function readProductFile(filePath) {
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
    feedPath = resolve('temu-products.json'),
    publishedPath = resolve('published-temu-products.json')
} = {}) {
    const moroccoTime = getMoroccoDateTime(now);
    if (moroccoTime.hour !== 10) {
        return { published: 0, skipped: true, reason: 'outside-publishing-hour' };
    }

    const [feed, published] = await Promise.all([
        readProductFile(feedPath),
        readProductFile(publishedPath)
    ]);
    const selected = selectDailyProducts(feed.products, published.products, moroccoTime.date);
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
        console.log(`Temu daily publisher: ${result.reason}; published ${result.published} product(s).`);
    }).catch(error => {
        console.error('Temu daily publisher failed:', error);
        process.exitCode = 1;
    });
}
