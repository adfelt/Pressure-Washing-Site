# Felt Pressure Washing — Website

The marketing site for Felt Pressure Washing, a residential and commercial pressure washing company serving Eugene, Springfield, and the surrounding Oregon area. Built with [Astro](https://astro.build).

Live site: [feltpressurewashing.com](https://feltpressurewashing.com)

## Stack

- **Framework:** Astro 5.x (static site)
- **Styling:** Plain CSS scoped per-page via Astro components
- **SEO:** `@astrojs/sitemap` integration + JSON-LD schema (LocalBusiness, Service, FAQPage, HowTo, WebApplication)
- **Forms:** Estimate form posts to Google Sheets (planned migration to dedicated form service)

## Project Structure

```text
public/                       Static assets (logo, favicons, gallery images, robots.txt)
src/
├── components/
│   └── BeforeAfterSlider.astro
├── layouts/
│   └── Layout.astro          Shared header, footer, nav drawer, global styles, schema injection
└── pages/
    ├── index.astro           Homepage (hero, services, gallery, testimonials, estimate form)
    ├── about.astro
    ├── services/             One page per service (house washing, roof cleaning, etc.)
    └── tools/
        └── chemical-calculator.astro    Interactive SH dilution calculator for soft washing
```

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Adding a New Service Page

1. Create `src/pages/services/<slug>.astro`. Easiest is to copy an existing service page (e.g. `house-washing.astro`) and rename.
2. Update the page's `faqSchema`, `serviceSchema`, hero copy, service details, and FAQ markup.
3. Add the new service to the nav dropdown in `src/layouts/Layout.astro`.
4. Add the new service option to the `<select>` in the estimate form in `src/pages/index.astro`.

## SEO Notes

Schema markup is passed into `Layout.astro` via the `faqSchema` and `serviceSchema` props. The Layout always injects the LocalBusiness schema on every page and conditionally injects FAQ + Service schemas when provided. Additional schemas (HowTo on the calculator page) are emitted directly in the page body as inline `<script type="application/ld+json">` tags.

The sitemap is generated automatically at build time by `@astrojs/sitemap` and lives at `/sitemap-index.xml`.

## Ongoing Work

See [`TO_DOs.md`](./TO_DOs.md) for the prioritized backlog (gallery page, booking system, related content, etc.).

For higher-level context about the business and the direction of the site, see [`context.md`](./context.md).
