# Daily Temu product publishing

The site uses a manually maintained feed; it does not fetch products from Temu. Add products to `temu-products.json` in this shape:

```json
{
  "products": [
    {
      "title": "Example Product Name",
      "price": "150 DH",
      "old_price": "300 DH",
      "category": "Hot Items",
      "image_url": "https://example.com/image.jpg",
      "affiliate_url": "https://temu.com/affiliate_link_here?code=alt356941"
    }
  ]
}
```

Accepted categories are `Hot Items`, `tech`, `home`, `furniture`, `curtains`, `remote_services`, `cars`, `bicycles`, `fashion`, and `jewelry`. Image and Temu affiliate URLs must use HTTPS. New products should be appended to the feed; affiliate links already present in `published-temu-products.json` are not published again.

GitHub Actions checks hourly and publishes up to three new products during the 10:00 hour in `Africa/Casablanca`. The published products are saved to the static JSON files and deployed to Firebase Hosting. GitHub scheduled runs are best-effort and can be delayed; the publisher skips runs that start outside the Morocco 10:00 hour.

To enable it:

1. Push the workflow and feed files to the repository's default branch.
2. In GitHub, allow repository Actions to write contents (`Settings` → `Actions` → `General` → `Workflow permissions` → `Read and write permissions`).
3. Keep the existing `FIREBASE_SERVICE_ACCOUNT_ZOMOROD_58438` repository secret available so the scheduled workflow can deploy the updated site.
4. Open `Actions` → `Publish daily Temu products` to check run results. A manual run also publishes only during the Morocco 10:00 hour.

The site's **Add new product** form downloads an updated JSON feed. Replace `temu-products.json` in the project with that downloaded file and push the change to GitHub; the next scheduled run can then publish its first three products. Without a server, the form cannot write directly to GitHub.
