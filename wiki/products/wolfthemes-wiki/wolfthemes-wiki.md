# wolfthemes-wiki

Self-hosted VitePress documentation site for WolfThemes products, deployed to [wiki.wolfthemes.com](https://wiki.wolfthemes.com).

**GitHub:** https://github.com/wolfthemes/wolfthemes-wiki  
**Live:** https://wiki.wolfthemes.com

## Purpose

Replaced a third-party SaaS support platform with a Git-driven knowledge base. Markdown-first, zero ongoing cost, full ownership of content.

## Stack

- **VitePress** — static site generator
- **GitHub Actions** — builds and deploys on push to `master`
- **GitHub Pages** — hosting (`gh-pages` branch)
- **Custom domain** — wiki.wolfthemes.com via CNAME in `docs/public/`

## Content structure

| Folder | Purpose |
|---|---|
| `general/` | WordPress fundamentals, hosting, server requirements |
| `getting-started/` | Theme install, demo import, plugin activation |
| `how-to/` | Step-by-step guides (fonts, updates, PHP config) |
| `troubleshooting/` | Common errors and fixes |
| `features/` | Theme-specific feature documentation |
| `extras/` | Coming soon, 404, security tips |
| `faq/` | Frequently asked questions |
| `snippets/` | Code snippet pages |

Every new page must be registered in the `sidebar` array in `docs/.vitepress/config.mts`.

## Dev commands

```bash
npm run docs:dev       # dev server at http://localhost:5173
npm run docs:build     # build to docs/.vitepress/dist
npm run docs:preview   # preview the build locally
```
