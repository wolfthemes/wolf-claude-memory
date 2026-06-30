# Raw Index

Source material dropped in for reference. **Immutable** — Claude reads but never edits files in `raw/`.

When something from raw/ is distilled into durable knowledge, it goes into `wiki/` as a new or updated page.

---

## Contents

| Path | What it is | Why it's here |
|---|---|---|
| `constantin.saguin.com/index.md` | CV / portfolio copy | Source text for [constantin.saguin.com](https://constantin.saguin.com) — profile, projects, skills, contact |
| `constantin.saguin.com/README.md` | Site notes | Design system notes and file list for the portfolio site |
| `constantin.saguin.com/WolfThemes Homepage Concepts.html` | Design concepts file | HTML export of Claude-generated homepage design concepts (Terminal System, others) — source for the terminal aesthetic adopted June 2026 |
| `constantin.saguin.com/Screenshot 2026-06-18 170352.png` | Screenshot | Live site screenshot, June 2026 |
| `seijaku-fse/images/brand/` | SVG logos | WolfThemes logo marks (light + dark variants) |
| `seijaku-fse/images/screenshots/` | Site screenshots | wolfthemes.com pages at various stages of the redesign — before/during/after |
| `seijaku-fse/images/textures/texture.svg` | Texture SVG | Decorative texture asset used in seijaku-fse |
| `seijaku-fse/images/legacy images/` | Legacy photo | Stock photography from the old Seijaku + Elementor site |
| `themeforest-portfolio/theme-positioning.md` | Positioning database | Full market positioning for all 47 ThemeForest themes — value props, target audience, competitive notes, store headlines. Canonical source for all marketing copy. |
| `themeforest-portfolio/theme-taxonomie chat.md` | Taxonomy optimization chat | Full Claude conversation (June 2026) that produced the category/tag/color/style taxonomy overhaul for all 47 themes |
| `wolf-store/single-theme-page-container-lateral-padding-issue.png` | Screenshot | Visual showing the lateral padding bug on single theme pages at viewport widths below 1600px — reference for the TASKS.md fix |
| `wolfthemes/stack.md` | Stack reference | Analytics & marketing stack IDs (GA4, Freemius, Buffer), plus decisions log from 2026-06-24 |
| `themes/<slug>/theme_meta.json` | Per-theme positioning data | Structured marketing metadata for each of the ~50 themes: store headline/subheadline, features, selling points, style, target audience, key benefits, included plugins, design features, use cases, testimonials. Canonical structured source for store pages and social copy (complements the prose in `themeforest-portfolio/theme-positioning.md`). |
| `themes/<slug>/images.json` | Preview image manifest | CDN URLs + labels for each theme's demo screenshots, grouped by section. |
| `themes/<slug>/thumbs/` | Theme thumbnails | Demo thumbnail images per theme. |
| `themes/fetch-theme-data.sh` | Data fetch script | Bash+jq script (run locally) that populates `raw/themes/` with theme_meta + images for the full slug list. |
| `themes/screenshot.js` | Screenshot script | Playwright script (run locally) to capture hero/wide/full preview screenshots from preview.wolfthemes.store for Pinterest/social. |
| `seijaku-fse/images/screenshots/contact-page.png` | Screenshot | Contact page design, seijaku-fse redesign sprint |
| `seijaku-fse/images/screenshots/music-themes-presentation-page.png` | Screenshot | Music themes category page, seijaku-fse redesign sprint |
| `seijaku-fse/images/screenshots/services-page.png` | Screenshot | Services page design, seijaku-fse redesign sprint |
| `seijaku-fse/images/screenshots/themes-archives.png` | Screenshot | Theme archive/filter UI, seijaku-fse redesign sprint |
| `seijaku-fse/images/screenshots/b6aeddcb-b10a-4308-a3ee-fa8b70dfc61c.png` | Screenshot | Misc seijaku-fse UI screenshot, redesign sprint |
| `seijaku-fse/images/screenshots/Home-•-Divided-by-13-Amplifiers.png` | Screenshot | Reference design — Divided by 13 Amplifiers homepage |
| `seijaku-fse/images/screenshots/Premium-WordPress-Studio-Website.png` | Screenshot | Reference design — Premium WordPress Studio site |
| `seijaku-fse/images/screenshots/Wolf-Themes-High-Quality-Premium-Wordpress-Themes-Plugins-prod.png` | Screenshot | wolfthemes.com production homepage screenshot |
| `seijaku-fse/images/screenshots/Wolf-Themes-High-Quality-Premium-Wordpress-Themes-Plugins.png` | Screenshot | wolfthemes.com staging homepage screenshot |
| `demo-pages/<slug>.json` | Demo page inventory | Per-theme JSON arrays of inner demo-page slugs (47 themes). Drives the demo-screenshot pipeline — which pages to capture for Pinterest/social. See [[demo-screenshot-pipeline]]. |
| `theme-screenshots/` | Captured screenshots | Output of the screenshot pipeline (Playwright) — theme demo captures for marketing/social. Gitignored. |
| `theme-screenshots/sable-home-alt.png` | Sable alternate homepage screenshot | Captured alternate homepage view for the Sable theme — marketing/social use. |
