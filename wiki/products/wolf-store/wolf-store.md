# wolf-store

WordPress plugin that powers the WolfThemes theme marketplace. OOP PHP backend + React frontend via WP REST API. Active development — also serves as a portfolio piece.

**GitHub:** https://github.com/wolfthemes/wolf-store  
**Staging:** https://staging20.wolfthemes.com/store/  
**Dev environment:** `wolf-store-docker` (Docker, http://localhost:8080)

## Purpose

Replace ThemeForest as the primary distribution channel for WolfThemes themes. Provide a custom licensing, delivery, and storefront pipeline with full ownership of the customer relationship.

**Theme product pages as SEO landing pages:** Post-production, each theme's single page (`single-wolf_theme`) at `wolfthemes.com/theme/<slug>` (e.g. `wolfthemes.com/theme/sable`) serves as the canonical SEO landing page for that theme. No separate landing page infrastructure needed.

## Tech stack

| Layer | Technology |
|---|---|
| Backend | PHP 8.1+, OOP, WP REST API |
| Frontend | React 18, JSX |
| Build | Webpack via `@wordpress/scripts` + BrowserSync |
| Styles | SCSS (BEM) |
| Standards | PSR-4 via Composer, WordPress + VIP coding standards |

## Architecture

### PHP backend

Boot path: `wolf-store.php` → `autoload.php` → `Functions/Core/Plugin` (singleton, `wolf_store()`).

`Plugin::init()` wires all subsystems:

| Class | Role |
|---|---|
| `Post_Types\Post_Type` | `wolf_theme` CPT |
| `Taxonomies\Taxonomies` | `theme_cat` and `theme_tag` |
| `Core\Rest_Fields` | Custom fields on `/wp-json/wp/v2/wolf_theme` |
| `Admin\Admin_Handler` | Metabox_Manager, Admin_Columns, Options (admin-only) |
| `Frontend\Frontend_Handler` | Template, Hooks, Enqueues (frontend-only) |

**Config/Handler pattern** — `Functions/Config/` classes return pure arrays, no side effects. Handlers read them and attach WP hooks. New fields/options go in Config, not Handlers.

**Meta layer** (`Functions/Core/Meta.php`) — resolves theme metadata with a priority chain:
1. Post meta override (e.g. `_wolf_theme_slug`)
2. Derived slug (first segment of post slug before `-`)
3. Remote JSON from `changelog.wolfthemes.cloud` + `assets.wolfthemes.cloud`, cached 1h via WP transients

### REST API

Custom fields registered in `Rest_Fields::register_fields()` (read-only). Fields include `theme_features`, `theme_key_benefits`, `theme_selling_points`, `theme_target_audience`, `theme_use_cases`, `theme_included_plugins`, `theme_design_features`, `theme_testimonials`.

`orderby=featured` uses a raw `posts_clauses` LEFT JOIN — avoids WP core bug #29447 where `INNER JOIN` drops posts missing the meta key.

Data passed to React via `wp_localize_script` as `window.wolfStoreData`.

### React frontend

Entry: `src/scripts/plugin.js` → `build/app.js`. Mounts on `#wolf-store-root` injected by PHP templates. React island — WP handles header/footer/nav in PHP.

**Archive:** `Archive.jsx` (grid + filtering + search + pagination), `ThemeCard.jsx` (category badge + page builder label), `Sidebar.jsx`, `SearchBar.jsx`, `Pagination.jsx`, `SkeletonCard.jsx`.

**Single:** `Single.jsx` composes `ThemeHero`, `ThemeGallery` (Fancybox lightbox), `ThemeDescription`, `ThemeStats` (animated count-up), `ThemeFeatures`, `ThemeBenefits`, `ThemeBrandStory`, `ThemeCTAs`, `ThemeComparisonTable`, `ThemePriceBox`, `ThemeChangelog`, `ThemeTechnicals`, `ThemeTestimonials`, `StickyCTA`, `RelatedThemes`, `CountdownTimer`, `SkeletonSingle`.

**Infrastructure:** `ErrorBoundary.jsx`, hooks (`useThemes`, `useTheme`, `useTerms`).

### Offer/coupon system

`src/scripts/config/offers.js` — single source of truth for active promotions. `ACTIVE_OFFER = null` disables. `withCoupon(url)` appends `?coupon=CODE`. `discounted(price)` applies the discount factor.

### CSS token system

All design values (spacing, color, typography) are defined as `--ws-*` CSS custom properties in `src/styles/_tokens.scss`. SCSS utility functions (e.g. `sp()`) are defined there too. Component SCSS must use tokens — no hard-coded values.

```
src/styles/
├── _tokens.scss         # --ws-* custom properties + SCSS functions
├── _var.scss            # Legacy variables (being migrated to tokens)
├── _archive.scss / _card.scss / _single.scss / _themes.scss
├── main.scss / admin.scss
├── components/          # Per-component BEM partials
└── vendor/_fancybox.scss
```

## CSS boundary

Wolf Store never hardcodes colors, fonts, or spacing scale values. All visual tokens come from the active theme. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]] for the full contract.
