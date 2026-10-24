# Cloudflare product submissions setup

The site stays on GitHub Pages. A Cloudflare Worker handles submissions and moderation, and D1 stores pending/approved products. Until the Worker is deployed and `API_BASE_URL` is configured in `script.js`, visitor submissions are intentionally disabled and existing built-in products remain available.

## 1. Create and initialize D1

Install Wrangler if needed, then authenticate:

```powershell
npx wrangler login
npx wrangler d1 create alhamza-products
```

Copy the returned database ID into `wrangler.toml`, replacing `REPLACE_WITH_D1_DATABASE_ID`. Replace `YOUR-GITHUB-USERNAME.github.io` in `ALLOWED_ORIGINS` with the exact site origin (scheme and host only; no path).

Create the D1 table:

```powershell
npx wrangler d1 execute alhamza-products --remote --file=.\schema.sql
```

## 2. Set private admin secrets and deploy

Use a new, strong admin password; do not reuse the password previously placed in the browser code. Set both values as Cloudflare Worker secrets:

```powershell
npx wrangler secret put ADMIN_PASSWORD
npx wrangler secret put SESSION_SECRET
npx wrangler deploy
```

Enter each value only at Wrangler's prompt. `SESSION_SECRET` should be a long random value (at least 32 random bytes). Never add either secret to this repository or to `script.js`.

The deployment prints the Worker URL, for example `https://alhamza-products-api.<your-subdomain>.workers.dev`. Put that URL in `API_BASE_URL` near the top of `script.js`, without a trailing slash.

## 3. Deploy the website

Commit/publish the updated static website to GitHub Pages. Visitors can submit products from the header button. New submissions stay pending and are not shown publicly. To review submissions, open the website with `?admin=1` in the URL, sign in with the Worker admin password, and approve or reject each submission. Approved submissions are loaded from D1 for all visitors.

## Email notifications

Email notification to `medmehdi939@gmail.com` is not enabled yet. It needs a mail delivery provider and its private API key stored as a Worker secret; do not put a mail API key in browser JavaScript. Configure that after the Worker and D1 are working.
