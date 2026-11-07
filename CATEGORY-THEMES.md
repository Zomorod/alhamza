# Category themes

The existing ALHAMZA storefront now supports these theme routes:

- `/category/jewelry` — deep emerald, gold, and elegant rounded cards.
- `/category/digital` — midnight blue, cyan/violet accents, and sharper cards.
- `/category/general` — clean light storefront with pistachio accents.

## How it works

`category-themes.js` reads the category from the URL, sets `body[data-theme]`, updates the hero and navigation, and uses browser history for client-side navigation. `style.css` maps each `data-theme` value to CSS variables. The existing light/dark control uses the separate `data-mode` attribute so it can coexist with category themes.

The current `firebase.json` already rewrites unknown paths to `index.html`, so Firebase Hosting serves these category URLs through the existing storefront. The `<base href="/">` in `index.html` keeps its styles, scripts, images, and links rooted correctly on category routes.

## Run and publish

1. No app build or package install is needed. To preview category routes with Firebase Hosting's rewrite behavior, install the Firebase CLI if needed, sign in, then run this from the project folder:

   ```sh
   firebase emulators:start --only hosting --project YOUR_FIREBASE_PROJECT_ID
   ```

2. Open the local URL printed by the CLI and visit `/category/jewelry`, `/category/digital`, and `/category/general`. You can also switch between them using the new category links in the store navigation.
3. Publish the updated static site with:

   ```sh
   firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
   ```

## Add a category later

1. Add the route name, URL, icon, and translated hero copy to the `themes` object in `category-themes.js`.
2. Add a navigation link in `index.html` with `data-theme-link="your-key"` and its category route.
3. Add a matching `body[data-theme="your-key"]` palette to the category theme block at the end of `style.css`.
4. Add the product filter case in `getCatalogCategoryProducts()` in `script.js`.
5. Add the category title to the `catalogDigital` / `catalogGeneral` translation area in `script.js` (use a new translation key for additional categories).

Product cards compute a discount badge from comparable current and original prices. They render real ratings when product data includes `rating` (1–5) and `reviewCount`; current catalog items without review data are labelled “No reviews yet” instead of being assigned made-up ratings.
