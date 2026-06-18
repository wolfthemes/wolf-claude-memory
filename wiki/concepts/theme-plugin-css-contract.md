# Theme–Plugin CSS Contract

The FSE stack (wolf-blank, seijaku-fse, wolf-store, wolf-blocks) enforces a strict CSS boundary: themes own all visual tokens, plugins consume them. Plugins never hardcode colors, fonts, or spacing values.

## The rule

> **Themes define. Plugins consume.**

A plugin that hardcodes `color: #fff` is a violation. It must use `var(--wp--preset--color--white)` or a wolf token alias instead.

## Token layers

### 1. WP preset tokens (via `theme.json`)

WordPress emits these from `settings.color.palette`, `settings.typography`, etc.:

| Token | Meaning |
|---|---|
| `--wp--preset--color--base` | Page background |
| `--wp--preset--color--base-2` | Subtle surface (card placeholder, filter bg) |
| `--wp--preset--color--contrast` | Body / strong text |
| `--wp--preset--color--primary` | Accent hover / buy-button background |
| `--wp--preset--color--accent` | Primary accent (demo button tint) |
| `--wp--preset--color--white` | Explicit white |
| `--wp--preset--font-size--sm` | Base font size for cards/meta |
| `--wp--preset--font-family--heading` | Heading font |
| `--wp--preset--font-family--body` | Body copy font |
| `--wp--style--global--wide-size` | Max-width for wide wrapper |
| `--wp--style--global--content-size` | Max-width for narrow wrapper |

### 2. Wolf contract tokens (via `theme.json → settings.custom.wolf`)

WordPress emits `settings.custom.wolf.*` as `--wp--custom--wolf--*`. Wolf Blank's `global.css` section 6 aliases them to the shorter `--wolf-*` names for plugin use:

| Token | Meaning |
|---|---|
| `--wolf-border-color` | Default border (cards, dividers) |
| `--wolf-radius-md` | Standard border-radius |
| `--wolf-btn-radius` | Button-specific radius |
| `--wolf-shadow-card` | Card / price-box box-shadow |
| `--wolf-dur-slow` | Slow transition duration |
| `--wolf-ease-out` | Easing function |

Every active theme (child of wolf-blank or otherwise) **must** define these for store/block plugins to render correctly.

### 3. Wolf Store alias layer

Wolf Store declares local CSS var aliases that resolve to WP presets or wolf tokens (with safe fallbacks). Themes may redefine these to tweak store appearance without touching plugin files:

```css
--strong-color         → --wp--preset--color--contrast
--background-color     → --wp--preset--color--base
--accent-color         → --wp--preset--color--accent
--accent-hover-color   → --wp--preset--color--primary
--theme-border-color   → --wolf-border-color
--theme-border-radius  → --wolf-radius-md
--button-border-radius → --wolf-btn-radius
--theme-bg-color       → --wp--preset--color--base
--theme-subtle-bg      → --wp--preset--color--base-2
```

## What plugins own vs. what themes own

**Plugins own:** layout mechanics (`display`, `flex`, `grid`, `position`, `overflow`, `z-index`), structural dimensions (`aspect-ratio`, `object-fit`, `min-height`, `max-width`), responsive breakpoints, animation timing references.

**Plugins never touch:** raw color values, font-family names, spacing scale values, theme-owned elements (`.content-wrapper`, navigation, site header).

## Per-theme escape hatch

`src/styles/_themes.scss` in wolf-store is the only place where per-theme selector overrides are permitted. Rules **must** be scoped to `.wp-theme-<slug>`. Use it for layout exceptions (e.g. full-bleed single on FSE themes), not for raw color patches.

## Known CSS debt (wolf-store)

These hardcoded values need to migrate to tokens:

| Location | Hardcoded value | Target |
|---|---|---|
| `_var.scss` | `--card-border-color: rgba(0,0,0,0.2)` | `--wolf-border-color` |
| `_var.scss` | `--box-shadow: 5px 5px 25px #02020254` | `--wolf-shadow-card` |
| `_hero.scss` | `color: #fff` | `--wp--preset--color--white` |
| `_price-box.scss` | `background: #fff` | `--theme-bg-color` |
| `_price-box.scss` | `background: #000` on badge | `--strong-color` |
| `_sticky-cta.scss` | `background: #f1f1f1` | `--theme-subtle-bg` |
