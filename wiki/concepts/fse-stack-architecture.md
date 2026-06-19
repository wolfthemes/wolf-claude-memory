# FSE Stack Architecture

The new WolfThemes development stack (2026–) is a pure Gutenberg/FSE monorepo-style setup. No Elementor, no page builders, no wolf-core. Everything is a WordPress block.

## Layers

```
wolf-blank (FSE base theme)
    └── seijaku-fse (child theme — wolfthemes.com)
            ├── wolf-store (plugin — theme marketplace backend + React frontend)
            └── wolf-blocks (plugin — reusable Gutenberg blocks)
```

**wolf-blank** owns all design tokens (colors, type, spacing, wolf contract vars). It renders a blank white canvas — zero WP default styling.

**seijaku-fse** fills the tokens for wolfthemes.com. It never modifies wolf-blank files; it overrides via child `theme.json` and adds its own templates/parts.

**wolf-store** and **wolf-blocks** are plugins that consume tokens from the active theme. They never hardcode visual values. See [[wiki/concepts/theme-plugin-css-contract|Theme–Plugin CSS Contract]].

## Dev environment

All four repos are developed together in `wolf-store-docker`. Full setup details: [[wiki/concepts/dev-environment]].

| Path | Repo |
|---|---|
| `.` | wolf-store-docker (Docker orchestration) |
| `themes/wolf-blank` | wolf-blank |
| `themes/seijaku-fse` | seijaku-fse |
| `plugins/wolf-store` | wolf-store |
| `plugins/wolf-blocks` | wolf-blocks |

Each is an **independent Git repo** with its own remote and branch. `wolf-store` is on `dev`; all others on `master`. Never run `git` from the docker root and assume it targets a nested repo.

**Site:** http://localhost:8080 · **Adminer:** http://localhost:8081

## Design constraints

- FSE / Gutenberg only — no Elementor, no WPBakery, no wolf-core
- PHP 8.x + WordPress 6.5+
- `theme.json` is strict JSON — no comments
- Plugins consume CSS custom properties from the theme, never define raw values

## Legacy stack (separate)

The legacy ThemeForest portfolio (40+ themes) runs on Elementor + [[wiki/products/wolf-core/wolf-core|wolf-core]] + [[wiki/products/wolf-visual-composer/wolf-visual-composer|wolf-visual-composer]]. These are maintained but not the direction for new development. Keep the two stacks completely separate.
