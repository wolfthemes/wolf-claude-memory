# Demo Screenshot Pipeline

How visual assets for the promotion push ([[wolfthemes-growth]]) get produced from the demo-page inventory.

## Inputs

- **Page inventory:** `raw/demo-pages/{theme_slug}.json` — one file per demo, a flat array of relative page slugs (e.g. `portfolio-masonry/`, `about/`, `work/echoes-of-movement/`).
- **URL pattern:** `https://preview.wolfthemes.store/{theme_slug}/{page_slug}` — concatenate the filename (minus `.json`) and a slug from the array.
- **Existing assets (reuse first):** some themes already have good-quality images under `raw/themes/{theme_slug}/` — `images.json` (labeled CDN image URLs of real demo content) plus a `thumbs/` folder. Prefer these over capturing new screenshots when they cover the page; only screenshot what's missing.

## What to screenshot — selection logic

Goal is **visually appealing pages only**, not exhaustive coverage. Per demo, select:

- **Homepages** — `home`, `home-alt`, `landing`.
- **Inner pages** — `about`, `contact`, `services`, and similar designed content pages.
- **Custom post type singles** — one representative item per CPT (`work/…`, single event, single video/portfolio item).

Explicitly **skip**:

- **Layout/showcase variants** — `portfolio-masonry`, `portfolio-filtered`, `portfolio-filtered-2`, `portfolio-carousel`, `portfolio-gallery`, `post-grid`/`post-list`, `event-grid`/`event-list`/`event-slider`, `videos-standard`/`videos-lightbox`, etc. These show the same content in multiple grid options — visual noise.
- **Utility / store-funnel pages** — `cart`, `checkout`, `my-account`, `purchase`, `shop`, `error-404`, `maintenance`, `coming-soon`, and dated blog posts.

## Output / storage

- **Location:** `raw/themes/{theme_slug}/screenshots/{page_slug}.png` — co-located with the theme's existing `thumbs/` and `images.json`.
- **Not version-controlled** — large binaries, gitignored (`raw/themes/*/screenshots/` in `.gitignore`). They live locally only and are never indexed in the repo.
