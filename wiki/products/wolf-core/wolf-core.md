# wolf-core

Core functions plugin required by WolfThemes legacy ThemeForest themes (Elementor / classic-editor era). Shared utility layer across the portfolio — installed alongside any WolfThemes premium theme.

**GitHub:** https://github.com/wolfthemes/wolf-core  
**Plugin URI:** https://wlfthm.es/wolf-core  
**Current version:** 2.0.53  
**Requires:** WordPress 6.0+

## Purpose

Provide shared functionality that would otherwise be duplicated across 40+ themes: post type registration helpers, template functions, image utilities, Google Fonts loading, AJAX handlers, widget definitions, and admin tooling. Themes `require` this plugin at runtime rather than bundling their own copies.

## Architecture

`wolf-core.php` boots the `Wolf_Core` singleton. Functionality is organized under `inc/`:

| Path | Role |
|---|---|
| `inc/core-functions.php` | General utility functions |
| `inc/theme-functions.php` | Theme support helpers |
| `inc/image-functions.php` | Image size / crop helpers |
| `inc/google-fonts.php` | Google Fonts loader |
| `inc/scripts.php` / `styles.php` | Asset enqueue logic |
| `inc/frontend/` | Body classes, template functions, hooks |
| `inc/admin/` | Admin panel helpers |
| `inc/ajax-functions.php` | AJAX endpoints |
| `inc/wp-widgets/` | Custom WP widget definitions |
| `inc/lib/` | Third-party classes (MailChimp, etc.) |

## Relationship to the FSE stack

Wolf Core belongs to the **legacy Elementor stack**. The new FSE projects (wolf-blank, seijaku-fse, wolf-store, wolf-blocks) explicitly do **not** depend on it. The `wolf-store-docker` dev environment is set up with `wolf-core` disabled by design.
