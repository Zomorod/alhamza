CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    old_price TEXT NOT NULL DEFAULT '',
    platform TEXT NOT NULL CHECK (platform IN ('aliexpress', 'amazon', 'jumia', 'alibaba', 'temu')),
    category TEXT NOT NULL CHECK (category IN ('tech', 'home', 'fashion')),
    image_url TEXT NOT NULL,
    affiliate_url TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    approved_at TEXT
);

CREATE INDEX IF NOT EXISTS submissions_status_created_at
ON submissions (status, created_at);

CREATE TABLE IF NOT EXISTS submission_rate_limits (
    ip_hash TEXT NOT NULL,
    route TEXT NOT NULL,
    window_start TEXT NOT NULL,
    request_count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (ip_hash, route, window_start)
);

CREATE INDEX IF NOT EXISTS submission_rate_limits_window_start
ON submission_rate_limits (window_start);
