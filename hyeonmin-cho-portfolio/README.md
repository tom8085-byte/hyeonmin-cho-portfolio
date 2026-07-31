# Hyeonmin Cho Academic Portfolio

An evidence-first academic and engineering portfolio for U.S. M.S. applications and faculty outreach. The narrative connects completed work in THz measurement, embedded sensing, IoT, and programming with a future direction in intelligent autonomous and marine robotic systems.

## Run locally

```bash
npm ci
npm run dev
```

Production verification:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/public`.

## Content editing

Public portfolio content is centralized in:

`src/data/roboticsPortfolioData.ts`

Evidence buttons render only when an evidence item has a real `href`. Keep evidence status internal, and review every file for private identifiers before adding a public URL.

## Routes

- `/`
- `/research/terahertz-spectroscopy`
- `/projects/smart-manhole-monitoring`
- `/projects/inbody-meal-recommendation`
- `/projects/deep-learning-code-development`

The Cloudflare Pages redirect rule in `public/_redirects` preserves direct access to client-side routes.

## Deployment

See `CLOUDFLARE_PAGES.md` for the GitHub and Cloudflare Pages settings. Do not publish until the owner has completed the checks in `OWNER_VERIFICATION.md`.
