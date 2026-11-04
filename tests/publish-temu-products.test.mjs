import test from 'node:test';
import assert from 'node:assert/strict';
import {
    getMoroccoDateTime,
    publishDailyProducts,
    selectDailyProducts
} from '../scripts/publish-temu-products.mjs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

function product(index) {
    return {
        title: `Product ${index}`,
        price: '150 DH',
        old_price: '300 DH',
        category: 'Hot Items',
        image_url: `https://img.example.com/${index}.jpg`,
        affiliate_url: `https://www.temu.com/product-${index}`
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
});

test('publishes at most three unique Temu affiliate links per day', () => {
    const feed = [product(1), product(2), product(1), product(3), product(4)];
    const selected = selectDailyProducts(feed, [], '2026-11-04');
    assert.equal(selected.length, 3);
    assert.deepEqual(selected.map(item => item.affiliate_url), [
        'https://www.temu.com/product-1',
        'https://www.temu.com/product-2',
        'https://www.temu.com/product-3'
    ]);
    assert.equal(selectDailyProducts(feed, selected, '2026-11-04').length, 0);
    assert.equal(selectDailyProducts(feed, selected, '2026-11-05').length, 1);
});

test('rejects invalid URLs and categories', () => {
    assert.throws(() => selectDailyProducts([
        { ...product(1), affiliate_url: 'https://example.com/not-temu' }
    ], [], '2026-11-04'), /must point to Temu/);
    assert.throws(() => selectDailyProducts([
        { ...product(1), category: 'unknown' }
    ], [], '2026-11-04'), /unsupported category/);
    for (const category of ['furniture', 'curtains', 'remote_services', 'cars', 'bicycles']) {
        assert.equal(selectDailyProducts([
            { ...product(1), category }
        ], [], '2026-11-04').length, 1);
    }
});

test('writes the published file only during the Morocco 10 AM hour', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'temu-publisher-'));
    const feedPath = join(directory, 'feed.json');
    const publishedPath = join(directory, 'published.json');
    try {
        await writeFile(feedPath, JSON.stringify({ products: [product(1), product(2), product(3), product(4)] }));
        await writeFile(publishedPath, JSON.stringify({ products: [] }));

        const skipped = await publishDailyProducts({
            now: new Date('2026-11-04T09:00:00Z'),
            feedPath,
            publishedPath
        });
        assert.equal(skipped.skipped, true);
        assert.deepEqual(JSON.parse(await readFile(publishedPath, 'utf8')).products, []);

        const result = await publishDailyProducts({
            now: new Date('2026-11-04T10:00:00Z'),
            feedPath,
            publishedPath
        });
        assert.equal(result.published, 3);
        assert.equal(JSON.parse(await readFile(publishedPath, 'utf8')).products.length, 3);
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});
