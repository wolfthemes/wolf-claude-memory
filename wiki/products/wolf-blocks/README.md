# wolf-blocks

Reusable Gutenberg blocks for WolfThemes projects. All visual tokens consumed from the active theme via CSS custom properties — the plugin never hardcodes values.

**GitHub:** https://github.com/wolfthemes/wolf-blocks  
**Dev environment:** `wolf-store-docker` at `plugins/wolf-blocks`

## Purpose

Provide data-driven / repeatable UI sections (stats, testimonials, pricing) that don't belong in any single theme. [[seijaku-fse]] uses these for the front page sections that can't be built with core blocks alone.

**Requirements:** WordPress 6.0+, PHP 7.4+, Node 18+. Active theme must define `--wolf-*` CSS custom properties. See [[theme-plugin-css-contract]].

## Blocks

| Block | Status |
|---|---|
| Marquee | ✅ implemented |
| Stats Counter | 🔲 scaffold |
| Testimonial Card | 🔲 scaffold |
| Pricing Table | 🔲 scaffold |

## Architecture

Same CSS boundary rule as wolf-store: blocks consume `--wolf-*` and `--wp--preset--*` tokens from the theme, never hardcode colors or spacing. See [[theme-plugin-css-contract]].

## Dev commands

```bash
npm install
npm run build      # production build
npm run start      # dev watch
npm run lint:js
npm run lint:css
npm run lint:php   # requires composer install
```
