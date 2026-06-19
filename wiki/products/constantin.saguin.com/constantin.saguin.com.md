# constantin.saguin.com

**Status: Paused — done until further notice (June 2026).**

Personal portfolio site / CV at [constantin.saguin.com](https://constantin.saguin.com).

## Purpose

Single-page static site. Acts as a CV: profile, projects, skills, contact. No CMS, no build step, no package manager. Deploy via `git push master` → GitHub Actions SSHs into SiteGround and copies files.

## Stack

- Pure HTML/CSS/JS — everything in `index.html` + `style.css`
- Font: DM Mono (monospace) — Google Fonts
- No external JS libraries

## Design System: Terminal

Adopted June 2026. Based on the "Terminal System" from the Claude Design concept file (raw/constantin.saguin.com/WolfThemes Homepage Concepts.html).

**Core visual language:**
- Near-black background `#0d0e0f`
- Orange accent `#e07840` (primary CTA, h1 emphasis word, `▸` bullets)
- Green `#4ade80` for status/availability badge
- Muted green `#4a7a5a` for code comments (italic)
- Blue `#7cb8f0` for numbers in code
- Purple `#c084fc` for keywords in code

**Layout patterns:**
- Nav: `constantin/` logo + `~/path` links + `• available · remote` badge (top right)
- Hero: split grid — LEFT = code editor window (macOS traffic lights, `profile.js`, numbered lines, JS syntax highlighting) — RIGHT = `// OUTPUT` label + large `h1` with `em` in orange + bio + CTA
- Section headers: `~/path` (left) + `$ command` (right), separated by border
- Projects: card with header bar showing `wolf/name` + status badge, then split image/body
- Skills: 3-col grid, italic green titles, `▸` for highlight / `·` for secondary
- Contact: mirrors hero h1 style with `em` accent

**Typography:**
- All DM Mono — no second typeface
- `h1` font-weight 500, not 800 (terminal feel, not display)
- Large italic em for key word in headings

## Content

- **Hero code**: `profile.js` — JS object literal with name, role, experience, customers, sales, builtToLast
- **Projects**: Sable (ThemeForest Trending), wolf-store (Open Source / WIP)
- **Skills**: 6 groups — Languages, Frameworks & Libraries, Architecture & APIs, Build & Infrastructure, Dev Environment, Adaptable
- **Contact section**: separate from footer, with h2 styled like hero

## Files

- `index.html` — all HTML
- `style.css` — all CSS (design tokens on `:root`)
- `img/sable.png`, `img/wolf-store.png` — project screenshots
