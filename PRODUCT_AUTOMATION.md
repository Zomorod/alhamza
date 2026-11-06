# Daily Dishis product publishing

GitHub Actions checks hourly and, during the 10:00 hour in `Africa/Casablanca`, reads the public Dishis All Jewellery catalog and publishes up to two products that have not been published before. Each product link receives the referral tracking code, and the product page is deployed to Firebase Hosting. Scheduled runs are best-effort and may be delayed.

Products are published without a listed price. The site shows its localized “check the current price in the store” label, and no price entry or follow-up action is required from the site owner. The publisher does not copy prices from Dishis.

The publisher reads the public catalog pages because no product feed or API was provided. Product prices shown by Dishis are intentionally not copied. If Dishis changes required product markup, the workflow reports an error instead of publishing incomplete products.

## Setup

1. Push the workflow and site files to the repository's default branch.
2. In GitHub, allow repository Actions to write contents (`Settings` → `Actions` → `General` → `Workflow permissions` → `Read and write permissions`).
3. Add a repository Actions secret named `DISHIS_TRACKING_CODE` containing the referral code shown in the Dishis **Affiliate Referral** page. It is not your account password.
4. Keep the existing `FIREBASE_SERVICE_ACCOUNT_ZOMOROD_58438` repository secret available so scheduled runs can deploy the updated site.
5. Open `Actions` → `Publish daily Dishis products` to check run results. A manual run also publishes only during the Morocco 10:00 hour.

The site's **Add new product** form still downloads a separate suggestion file. Those suggestions are not included in the daily Dishis publishing feed.
