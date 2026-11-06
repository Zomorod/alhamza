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

## Product suggestions and admin approval

The site's **Add new product** form saves suggestions in the `productSubmissions` Firestore collection. They remain hidden from the public catalog until an administrator approves them.

1. Open `https://zomorod-58438.web.app/admin.html` and sign in with the authorized Google account.
2. Select **قبول ونشر** to publish a suggestion immediately, or **رفض** to keep it out of the site.
3. Firestore security rules are in `firestore.rules`. Publish them in Firebase Console → Firestore Database → Rules (or deploy with `firebase deploy --only firestore:rules --project zomorod-58438`). The rules restrict administration to `medmehdi939@gmail.com`, allow public submissions only as pending entries, and expose only approved products to the public site.

Google Authentication must have the Google provider enabled, and `zomorod-58438.web.app` must be an authorized domain. The Firebase web configuration in `firebase-config.js` is public client configuration; never put service-account credentials or private keys in browser files.
