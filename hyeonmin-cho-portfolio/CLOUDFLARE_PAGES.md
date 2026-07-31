# GitHub + Cloudflare Pages deployment

This directory is the deployable portfolio project. It does not require a database, backend service, or authentication.

## Local verification

```bash
npm ci
npm run build
npm run preview
```

The production files are generated in `dist/public`.

## GitHub

1. Create a new empty GitHub repository.
2. Upload the contents of this directory to the repository root.
3. Do not upload private evidence, unredacted academic records, phone numbers, student numbers, or the original Replit `attached_assets` directory.

## Cloudflare Pages

Connect the GitHub repository and use:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist/public`
- Root directory: `/`
- Production branch: `main`
- Node.js version: `22`

The included `_redirects` file preserves direct access to the React routes.

After Cloudflare assigns the final domain:

1. Replace the relative entries in `public/sitemap.xml` with complete production URLs.
2. Add `Sitemap: https://YOUR-DOMAIN/sitemap.xml` to `public/robots.txt`.
3. Add the final canonical URL and `og:url` to `index.html`.
4. Rebuild and confirm each case-study route opens directly.
