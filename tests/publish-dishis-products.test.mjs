import test from 'node:test';
import assert from 'node:assert/strict';
import {
    addTrackingCode,
    getMoroccoDateTime,
    parseDishisCatalog,
    publishDailyProducts,
    selectDailyProducts
} from '../scripts/publish-dishis-products.mjs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function product(index) {
    return {
        title: `Catalog title ${index}…`,
        price: '$10.00 USD',
        old_price: '$12.00 USD',
        category: 'jewelry',
        image_url: `https://www.dishisjewels.com/image/${index}.jpg`,
        product_url: `https://www.dishisjewels.com/product-${index}`
    };
}

function productCard(index, price = 1000) {
    return `
        <div class="product-layout product-list col-xs-12">
          <div class="probox">
            <figure><a href="https://www.dishisjewels.com/product-${index}">
              <img src="/image/${index}.jpg" alt="Catalog title ${index}"/>
            </a></figure>
            <h3><a href="https://www.dishisjewels.com/product-${index}">Catalog title ${index}&hellip;</a></h3>
            <p class="price">
              <span class="price-new">₹${price.toLocaleString('en-IN')}.00</span>
              <span class="price-old">₹${(price * 1.2).toLocaleString('en-IN')}.00</span>
            </p>
          </div>
        </div>`;
}

function regularPriceProductCard(index, price = 3691.52) {
    return `
        <div class="product-layout product-list col-xs-12">
          <div class="probox">
            <figure><a href="https://www.dishisjewels.com/product-${index}">
              <img src="/image/${index}.jpg" alt="Catalog title ${index}"/>
            </a></figure>
            <h3><a href="https://www.dishisjewels.com/product-${index}">Catalog title ${index}</a></h3>
            <p class="price"><span>₹${price.toLocaleString('en-IN')}</span></p>
          </div>
        </div>`;
}

function unpricedProductCard(index) {
    return `
        <div class="product-layout product-list col-xs-12">
          <div class="probox">
            <figure><a href="https://www.dishisjewels.com/product-${index}">
              <img src="/image/${index}.jpg" alt="Catalog title ${index}"/>
            </a></figure>
            <h3><a href="https://www.dishisjewels.com/product-${index}">Catalog title ${index}</a></h3>
            <p class="price"><span>Price unavailable</span></p>
          </div>
        </div>`;
}

function oldPriceOnlyProductCard(index) {
    return `
        <div class="product-layout product-list col-xs-12">
          <div class="probox">
            <figure><a href="https://www.dishisjewels.com/product-${index}">
              <img src="/image/${index}.jpg" alt="Catalog title ${index}"/>
            </a></figure>
            <h3><a href="https://www.dishisjewels.com/product-${index}">Catalog title ${index}</a></h3>
            <p class="price"><span class="price-old">₹2,500.00</span></p>
          </div>
        </div>`;
}

function response({ body, data, status = 200 }) {
    return {
        ok: status >= 200 && status < 300,
        status,
        text: async () => body,
        json: async () => data
    };
}

test('Morocco local time handles both UTC offsets', () => {
    assert.deepEqual(getMoroccoDateTime(new Date('2026-01-15T09:00:00Z')), {
        date: '2026-01-15',
        hour: 10,
        minute: 0
    });
    assert.deepEqual(getMoroccoDateTime(new Date('2026-06-15T09:00:00Z')), {
        date: '2026-06-15',
        hour: 10,
        minute: 0
    });
    assert.deepEqual(getMoroccoDateTime(new Date('2026-11-04T10:00:00Z')), {
        date: '2026-11-04',
        hour: 10,
        minute: 0
    });
});

test('parses Dishis catalog products and converts rupees to dollars', () => {
    const parsed = parseDishisCatalog(
        `${productCard(1, 1000)}${regularPriceProductCard(2, 2500)}`,
        0.01
    );
    assert.equal(parsed.length, 2);
    assert.equal(parsed[0].title, 'Catalog title 1…');
    assert.equal(parsed[0].price, '$10.00 USD');
    assert.equal(parsed[0].old_price, '$12.00 USD');
    assert.equal(parsed[0].category, 'jewelry');
    assert.equal(parsed[0].image_url, 'https://www.dishisjewels.com/image/1.jpg');
    assert.equal(parsed[1].price, '$25.00 USD');
    assert.equal(parsed[1].old_price, '');
});

test('skips products without an INR price and continues parsing the catalog', () => {
    const warnings = [];
    const originalWarn = console.warn;
    console.warn = message => warnings.push(message);
    try {
        const parsed = parseDishisCatalog(
            `${unpricedProductCard(1)}${oldPriceOnlyProductCard(2)}${regularPriceProductCard(3, 2500)}`,
            0.01
        );
        assert.equal(parsed.length, 1);
        assert.equal(parsed[0].product_url, 'https://www.dishisjewels.com/product-3');
        assert.equal(parsed[0].price, '$25.00 USD');
        assert.deepEqual(warnings, [
            'Skipped 2 Dishis catalog product(s) without a valid INR price.'
        ]);
    } finally {
        console.warn = originalWarn;
    }
});

test('adds only the affiliate tracking parameter to Dishis product URLs', () => {
    assert.equal(
        addTrackingCode('https://www.dishisjewels.com/product-1?color=gold', 'aff123'),
        'https://www.dishisjewels.com/product-1?color=gold&tracking=aff123'
    );
    assert.throws(() => addTrackingCode('https://example.com/product-1', 'aff123'), /must use HTTPS/);
    assert.throws(() => addTrackingCode('https://www.dishisjewels.com/product-1', ''), /missing or invalid/);
});

test('selects no more than two unique tracked products per day', () => {
    const feed = [product(1), product(2), product(1), product(3)];
    const selected = selectDailyProducts(feed, [], '2026-11-04', 'aff123');
    assert.equal(selected.length, 2);
    assert.deepEqual(selected.map(item => item.affiliate_url), [
        'https://www.dishisjewels.com/product-1?tracking=aff123',
        'https://www.dishisjewels.com/product-2?tracking=aff123'
    ]);
    assert.equal(selectDailyProducts(feed, selected, '2026-11-04', 'aff123').length, 0);
    assert.equal(selectDailyProducts(feed, selected, '2026-11-05', 'aff123').length, 1);
});

test('publishes two real catalog entries from mocked responses only during Morocco 10 AM', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'dishis-publisher-'));
    const publishedPath = join(directory, 'published.json');
    const now = new Date('2026-11-04T10:00:00Z');
    let catalogRequests = 0;
    try {
        await writeFile(publishedPath, JSON.stringify({ products: [] }));
        const fetchImpl = async url => {
            const requestedUrl = new URL(url);
            if (requestedUrl.hostname === 'open.er-api.com') {
                return response({
                    data: {
                        result: 'success',
                        time_last_update_unix: Math.floor(now.getTime() / 1000),
                        rates: { USD: 0.01 }
                    }
                });
            }
            if (requestedUrl.hostname === 'www.dishisjewels.com' &&
                requestedUrl.pathname === '/all-jewellery') {
                catalogRequests += 1;
                return response({ body: `${productCard(1)}${productCard(2)}` });
            }
            const productId = requestedUrl.pathname.split('-').at(-1);
            return response({ body: `<h1>Full Product Title ${productId}</h1>` });
        };

        const skipped = await publishDailyProducts({
            now: new Date('2026-11-04T09:00:00Z'),
            trackingCode: 'aff123',
            publishedPath,
            fetchImpl
        });
        assert.equal(skipped.skipped, true);
        assert.equal(catalogRequests, 0);

        const result = await publishDailyProducts({
            now,
            trackingCode: 'aff123',
            publishedPath,
            fetchImpl
        });
        assert.deepEqual(result, { published: 2, skipped: false, reason: 'published' });
        const published = JSON.parse(await readFile(publishedPath, 'utf8')).products;
        assert.equal(published.length, 2);
        assert.equal(published[0].title, 'Full Product Title 1');
        assert.equal(published[0].price, '$10.00 USD');
        assert.equal(published[0].price_approximate, true);
        assert.equal(published[0].published_at, '2026-11-04');
        assert.equal(published[1].affiliate_url, 'https://www.dishisjewels.com/product-2?tracking=aff123');

        let requestsAfterDailyLimit = 0;
        const dailyLimitResult = await publishDailyProducts({
            now,
            trackingCode: 'aff123',
            publishedPath,
            fetchImpl: async () => {
                requestsAfterDailyLimit += 1;
                throw new Error('Already reached the daily limit.');
            }
        });
        assert.deepEqual(dailyLimitResult, { published: 0, skipped: false, reason: 'no-new-products' });
        assert.equal(requestsAfterDailyLimit, 0);
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});

test('rejects invalid exchange rates and malformed catalog data', () => {
    assert.throws(() => parseDishisCatalog('<html></html>', 0.01), /expected product listing/);
    assert.throws(() => parseDishisCatalog(productCard(1), 0), /valid INR-to-USD rate/);
    assert.throws(() => selectDailyProducts([{
        ...product(1),
        product_url: 'https://example.com/product-1'
    }], [], '2026-11-04', 'aff123'), /must use HTTPS/);
});
