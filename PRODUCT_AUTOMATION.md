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

Accepted categories are `Hot Items`, `tech`, `home`, `furniture`, `curtains`, `remote_services`, `cars`, `bicycles`, `fashion`, and `jewelry`. Image URLs must use HTTPS, or may be an uploaded JPG, PNG, or WEBP image encoded in the suggestion JSON (maximum 2 MB). The Temu affiliate URL is optional; when present, it must use HTTPS and point to Temu. Products without affiliate links are deduplicated by title, category, and image.

GitHub Actions checks hourly and publishes up to two new products during the 10:00 hour in `Africa/Casablanca`. The published products are saved to the static JSON files and deployed to Firebase Hosting. GitHub scheduled runs are best-effort and can be delayed; the publisher skips runs that start outside the Morocco 10:00 hour.

To enable it:

1. Push the workflow and feed files to the repository's default branch.
2. In GitHub, allow repository Actions to write contents (`Settings` → `Actions` → `General` → `Workflow permissions` → `Read and write permissions`).
3. Keep the existing `FIREBASE_SERVICE_ACCOUNT_ZOMOROD_58438` repository secret available so the scheduled workflow can deploy the updated site.
4. Open `Actions` → `Publish daily Temu products` to check run results. A manual run also publishes only during the Morocco 10:00 hour.

The site's **Add new product** form downloads a separate `product-suggestion.json` file. Send it to the site administrator for review; suggestions do not enter the publishing feed or appear on the site automatically. After approval, an administrator can add the product to `temu-products.json`; the next scheduled run can then publish up to two approved products. The form does not upload suggestions to a server.
