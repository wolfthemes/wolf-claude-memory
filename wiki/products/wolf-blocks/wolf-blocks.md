# wolf-blocks

Reusable Gutenberg blocks for WolfThemes projects. All visual tokens consumed from the active theme via CSS custom properties — the plugin never hardcodes values.

**GitHub:** https://github.com/wolfthemes/wolf-blocks  
**Dev environment:** `wolf-store-docker` at `plugins/wolf-blocks`

## Purpose

Provide data-driven / repeatable UI sections (stats, testimonials, pricing) that don't belong in any single theme. [[wiki/products/seijaku-fse/seijaku-fse|seijaku-fse]] uses these for the front page sections that can't be built with core blocks alone.

**Requirements:** WordPress 6.0+, PHP 7.4+, Node 18+. Active theme must define `--wolf-*` CSS custom properties. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]].

## Blocks

| Block | Notes |
|---|---|
| wolf-blocks/marquee | scrolling text band |
| wolf-blocks/stats-counter | animated counter, IntersectionObserver view.js |
| wolf-blocks/testimonial-card | quote + avatar + author |
| wolf-blocks/pricing-table | pricing tiers, services list, offer price |
| wolf-blocks/countdown | dynamic block (PHP render_callback), manual date or wolf-store offer, view.js ticker |
| wolf-blocks/comparison-table | us vs competitor feature table, repeatable rows with reorder |
| wolf-blocks/feature-grid | InnerBlocks grid, 2–4 columns, providesContext for columns |
| wolf-blocks/feature-grid-item | child of feature-grid, @wordpress/icons picker, RichText title+desc |

## Architecture

Same CSS boundary rule as wolf-store: blocks consume `--wolf-*` and `--wp--preset--*` tokens from the theme, never hardcode colors or spacing. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]].

## Toolchain versions (pinned — do not casually upgrade)

- `@wordpress/scripts@^31.8.0` — React 18 support, ESLint v8 (still supports `.eslintrc.js` legacy config)
- Do NOT upgrade to `@wordpress/scripts@32+` — ESLint v10 dropped `.eslintrc.js` support; requires flat config migration to `eslint.config.js`
- wolf-store uses `@wordpress/scripts@24` (React 17 only) — wolf-blocks intentionally diverges here
- `stylelint@^16` required by `@wordpress/stylelint-config@^23`; `.stylelintrc.json` must include `"customSyntax": "postcss-scss"` or `//` SCSS comments cause `CssSyntaxError`
- Removed in stylelint v16 (do not set to `null`): `max-line-length`, `declaration-colon-space-after`

## Dev commands

```bash
npm install
npm run build      # production build
npm run start      # dev watch
npm run lint:js
npm run lint:css
npm run lint:php   # requires composer install
```
