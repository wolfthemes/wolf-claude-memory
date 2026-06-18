# WolfThemes Dev — Knowledge Base

> **Constantin Saguin** — Senior WordPress engineer. Founder of WolfThemes.  
> 14 years · 40+ themes/plugins · 36,000+ customers · $2M+ ThemeForest sales.  
> Based in Alsace, France. Available remote.

---

## Active Work

| Project | Status | Blocker |
|---|---|---|
| wolfthemes-redesign | Front page live, inner pages done | wolf-blocks stats/testimonials/pricing pending |
| wolf-blocks | Marquee, stats-counter, testimonial-card, pricing-table, countdown, comparison-table, feature-grid | — |
| wolf-store | Active dev — React frontend expanding | CSS debt migration (`_var.scss` → tokens) |
| constantin.saguin.com | Terminal design system live | — |

**Next milestone:** ship wolf-blocks → remove static PHP pattern placeholders from seijaku-fse.

---

## Products

### FSE Stack (active development)
| Product | Role | Key link |
|---|---|---|
| [[wiki/products/wolf-blank/wolf-blank\|wolf-blank]] | FSE base theme — design token slots | [GitHub](https://github.com/wolfthemes/wolf-blank) |
| [[wiki/products/seijaku-fse/seijaku-fse\|seijaku-fse]] | FSE child theme — wolfthemes.com | [GitHub](https://github.com/wolfthemes/seijaku-fse) · [Dev](http://localhost:8080) |
| [[wiki/products/wolf-store/wolf-store\|wolf-store]] | Marketplace plugin (PHP + React) | [GitHub](https://github.com/wolfthemes/wolf-store) · [Staging](https://staging20.wolfthemes.com/store/) |
| [[wiki/products/wolf-blocks/wolf-blocks\|wolf-blocks]] | Gutenberg blocks (stats, testimonials, pricing) | [GitHub](https://github.com/wolfthemes/wolf-blocks) |

### Legacy Stack (ThemeForest — maintained, not extended)
| Product | Role |
|---|---|
| [[wiki/products/themeforest-portfolio/themeforest-portfolio\|themeforest-portfolio]] | 47 premium themes — full index + optimized taxonomy by category |
| [[wiki/products/wolf-core/wolf-core\|wolf-core]] | Shared functions for all legacy themes |
| [[wiki/products/wolf-visual-composer/wolf-visual-composer\|wolf-visual-composer]] | WPBakery extension for legacy themes |

### Infrastructure & Tools
| Product | Role |
|---|---|
| [[wiki/products/wolfthemes-wiki/wolfthemes-wiki\|wolfthemes-wiki]] | VitePress docs at wiki.wolfthemes.com |
| [[wiki/products/ai-crew/ai-crew\|ai-crew]] | Python/CrewAI support automation |
| [[wiki/products/constantin.saguin.com/constantin.saguin.com\|constantin.saguin.com]] | Personal portfolio (terminal design, DM Mono, dark) |

---

## Concepts

| Concept | What it covers |
|---|---|
| [[wiki/concepts/fse-stack-architecture\|FSE Stack Architecture]] | How wolf-blank → seijaku-fse → wolf-store/wolf-blocks fit together. Dev env, Git structure. |
| [[wiki/concepts/theme-plugin-css-contract\|Theme–Plugin CSS Contract]] | Themes define tokens, plugins consume. Full `--wolf-*` + `--wp--preset--*` reference. |
| [[wiki/concepts/wolfthemes-brand\|WolfThemes Brand]] | Positioning, visual direction, what to avoid. Canonical for all WolfThemes surfaces. |

---

## Projects

| Project | Status |
|---|---|
| [[wiki/projects/wolfthemes-redesign/wolfthemes-redesign\|wolfthemes-redesign]] | Active — rebuilding wolfthemes.com on FSE/Gutenberg |

---

## Dev Environment Quick Ref

All FSE repos develop together in `wolf-store-docker`:

```
wolf-store-docker/
├── themes/wolf-blank       ← git repo (master)
├── themes/seijaku-fse      ← git repo (master)
├── plugins/wolf-store      ← git repo (dev)
└── plugins/wolf-blocks     ← git repo (master)
```

Site: http://localhost:8080 · Adminer: http://localhost:8081  
Each nested repo is independent — never run `git` from the docker root.

---

## Key Constraints (don't lose these)

- `theme.json` is **strict JSON** — no comments. Any comment silently breaks the theme.
- `@wordpress/scripts` — wolf-blocks pins `^31.8.0` (React 18). Do NOT upgrade to 32+.
- Wolf-store is on **`dev` branch**; all others on `master`.
- FSE template changes: clear DB cache via **Appearance → Editor → Templates → Clear customizations** after editing any `templates/` or `parts/` file.
- Plugins must **never hardcode** colors, fonts, or spacing — consume `--wolf-*` / `--wp--preset--*` tokens only.
