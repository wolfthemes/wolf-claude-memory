# wolf-blank

Minimal FSE (Full Site Editing) WordPress boilerplate theme. Zero default styling — a blank canvas with clearly-labeled design token slots. Foundation for all WolfThemes FSE projects.

**GitHub:** https://github.com/wolfthemes/wolf-blank  
**Dev environment:** `wolf-store-docker` at `themes/wolf-blank`

## Purpose

Provide a valid, activatable WordPress block theme that strips all WP default styling and exposes design tokens as named placeholders. Child themes (e.g. [[wiki/products/seijaku-fse/seijaku-fse|seijaku-fse]]) fill the tokens — they never edit this file.

**Requirements:** WordPress 6.5+, PHP 8.0+.

## Architecture

| File | Role |
|---|---|
| `style.css` | WP theme header only — no CSS rules |
| `functions.php` | Theme supports + enqueues `global.css` (front + editor). Under 60 lines. |
| `theme.json` | v3. Single source of truth for all design tokens. **No comments** (strict JSON). |
| `assets/css/global.css` | Reset + utilities + `--wolf-*` contract slots |
| `assets/js/` | Empty (.gitkeep). No jQuery, no third-party JS. |
| `templates/` | front-page, index, single, page, 404 |
| `parts/` | header, footer |

## Design token system

All visual values live in `theme.json`. Nothing is hardcoded.

**Colors** — `settings.color.palette`: 8 named slots: `primary`, `primary-light`, `secondary`, `accent`, `base`, `base-2`, `contrast`, `contrast-2`. Defaults are placeholder black/white.

**Typography** — fluid scale `xs → 3xl` in `settings.typography.fontSizes`. Heading + body font families with system-sans defaults; child themes load real fonts via `fontFace`.

**Spacing** — `settings.spacing.spacingSizes` scale 1–10, base-4 rem.

**Wolf contract vars** — `settings.custom.wolf` in `theme.json` emits `--wp--custom--wolf--*` which `global.css` section 6 aliases to `--wolf-border-color`, `--wolf-radius-md`, `--wolf-btn-radius`, `--wolf-shadow-card`, `--wolf-dur-slow`, `--wolf-ease-out`. These are the tokens plugins (wolf-store, wolf-blocks) expect from any active theme. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]].

## How child themes extend this

1. Define colors, fonts, spacing in child `theme.json` (`palette` replaces, not merges, the parent array — keep the 8 named slots).
2. Set `--wolf-*` contract values in child `theme.json → settings.custom.wolf`.
3. Build templates and parts.
4. Never edit `global.css` section 6 directly — only wolf-blank owns that file.

## Key constraint

`theme.json` uses strict JSON — no `//` or `/* */` comments. WordPress parses it with `json_decode`. Any comment will silently break the theme.
