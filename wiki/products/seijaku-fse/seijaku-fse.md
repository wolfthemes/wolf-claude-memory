# seijaku-fse

FSE child theme of [[wiki/products/wolf-blank/wolf-blank|wolf-blank]]. Redesigns wolfthemes.com — the WolfThemes storefront. Replaces the old Seijaku + Elementor site with a pure block theme.

**GitHub:** https://github.com/wolfthemes/seijaku-fse  
**Dev environment:** `wolf-store-docker` at `themes/seijaku-fse` (http://localhost:8080)  
**Target:** https://wolfthemes.com

## Design direction

Light, editorial, minimal. Big negative space, bold typography, one strong electric-blue accent used sparingly. Reference energy: Linear.app, Stripe, Rauno.me.

- **Fonts:** Lexend (headings) + Rethink Sans (body)
- **Accent:** `#0c10ff` (electric blue) — primary and accent slots
- **Not:** corporate, decorative, template-looking

Full branding rationale: [[wiki/concepts/wolfthemes-brand|WolfThemes Brand]].

## Token values (finalized)

| Slot | Value |
|---|---|
| `primary` / `accent` | `#0c10ff` |
| `primary-light` | `#0a0bd1` (button hover) |
| `secondary` | `#111111` |
| `base` | `#ffffff` |
| `base-2` | `#f4f4f2` |
| `contrast` | `#141414` |
| `contrast-2` | `#6b6b6b` |
| `border` | `rgba(0,0,0,0.10)` (extra seijaku slot) |

Typography adds a `display` size (hero) above `3xl`. Spacing adds `11`/`12` clamp section steps.

## Templates

| Template | Notes |
|---|---|
| `front-page.html` | Overlay header · hero · themes grid · about · WOLF-BLOCKS placeholders |
| `about.html` | Intro · story · values · CTA via patterns |
| `services.html` | Hero · intro · process · pricing · FAQ · CTA via patterns |
| `contact.html` | Intro · form · options via patterns |
| `music-themes.html` | Overlay header · niche landing page |
| `archive-wolf_theme.html` | Theme archive — `wolf-store/theme-index` grid |
| `single-wolf_theme.html` | Individual theme product page |
| `page.html` / `page-fullwidth.html` | Default page templates |

## Template parts

- `parts/header.html` — wordmark left, nav + CTA right (standard pages)
- `parts/header-overlay.html` — transparent variant (front-page, music-themes)
- `parts/footer.html` — minimal 3 columns

## Patterns (`patterns/` — PHP)

27+ registered section patterns consumed by templates. Categories: hero, about, services, contact, social proof (stats/testimonials/why-wolfthemes/audience), global (CTA, marquee, sale-marquee, latest-themes), brand (logo marks).

Stats, testimonials, and pricing are currently **static PHP patterns** and will be superseded by [[wiki/products/wolf-blocks/wolf-blocks|wolf-blocks]] when that plugin ships.

## Build system

`src/scripts/` + `src/styles/` → `build/` via `@wordpress/scripts` (webpack).  
`npm run build` (prod) · `npm run start` (watch) · `npm run lint` · `composer install && npm run lint:php`

## CI / deploy

GitHub Actions (`.github/workflows/deploy.yml`) on push to `master` or `stage`:
1. Lint JS + CSS (both branches) + PHP (master only via PHPCS/WordPress+VIP standards)
2. Build assets
3. Deploy to SiteGround via SSH rsync

## Active plugins

- `wolf-store` — themes marketplace plugin, provides the `wolf-store/theme-index` block
- `wolf-blocks` (planned) — stats counter, testimonials, pricing table

## Template generation

Use the `/seijaku-fse-template` skill before generating any template or pattern — it loads live token values, existing valid templates as exemplars, and wolf-blocks schemas. See [[wiki/concepts/fse-block-grammar|FSE Block Grammar]] for known gotchas and the `/learn` command to log new fixes.

## Template and pattern authoring rule

> **Strip to the absolute minimum.** No custom inline styles, no extra custom classes, no pre-set custom settings. Design relies entirely on default block styles or `theme.json` variables. Maximum simplicity.

Applies to everything in `templates/`, `parts/`, and `patterns/`. If a visual value can be expressed via a token, it must be — never as an inline `style` attribute. See [[wiki/concepts/fse-stack-architecture|FSE Stack Architecture]] for the broader constraint.

## FSE gotcha

After editing any `templates/` or `parts/` file, go to **Appearance → Editor → Templates → Clear customizations** to force WordPress to reload the file version (FSE caches templates in the DB).

## CSS contract

This theme defines all `--wolf-*` tokens via `theme.json → settings.custom.wolf`, which wolf-blank's `global.css` aliases for plugins to consume. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]].
