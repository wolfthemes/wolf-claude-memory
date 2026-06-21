# FSE Block Grammar

Reference for generating valid Gutenberg block markup in seijaku-fse templates and patterns. Updated as new fixes are discovered — use `/learnt` to add entries.

**Living sources (always read before generating):**
- `wolf-store-docker/themes/seijaku-fse/templates/` — proven valid templates
- `wolf-store-docker/themes/seijaku-fse/patterns/` — proven valid patterns
- `wolf-store-docker/themes/wolf-blank/theme.json` — valid token slugs
- `wolf-store-docker/plugins/wolf-blocks/src/blocks/*/block.json` — block attribute schemas

---

## Block comment grammar rules

```html
<!-- wp:block-name {"attr":"value"} -->
<div class="wp-block-block-name">content</div>
<!-- /wp:block-name -->

<!-- wp:self-closing-block {"attr":"value"} /-->
```

- JSON attributes must be valid JSON — no trailing commas, no unquoted keys
- Self-closing blocks use `-->` not `–>` (no space before `/>`)
- Block name in comment must exactly match registered `name` in `block.json`
- Attribute keys must match registered attribute names exactly (case-sensitive)
- Attribute values must match registered type (`string`, `number`, `boolean`, `array`)

---

## Required attributes — common core blocks

| Block | Required / commonly broken | Valid values |
|---|---|---|
| `wp:group` | `layout` object | `{"type":"constrained"}` / `{"type":"flex","flexWrap":"nowrap"}` / `{"type":"default"}` |
| `wp:columns` | none required | optionally `{"isStackedOnMobile":true}` |
| `wp:column` | none required | optionally `{"width":"50%"}` |
| `wp:template-part` | `slug`, `tagName`, `area` | area: `"header"` / `"footer"` / `"uncategorized"` |
| `wp:pattern` | `slug` | must match registered pattern slug exactly |
| `wp:image` | none required for decorative | `id` (number) only if image is set from media library |
| `wp:heading` | none required | optionally `{"level":2}` |
| `wp:cover` | none required | optionally `{"dimRatio":50,"overlayColor":"contrast"}` |

---

## wolf-blocks — attribute schemas

### wolf-blocks/marquee
```
text: string      direction: "left"|"right"    animationDuration: number    link: string
```
The `text` attribute is rendered via `dangerouslySetInnerHTML` — it must contain the full inner HTML of each item, including any separator spans. Use JSON-escaped quotes for HTML attributes inside the value.
```html
<!-- wp:wolf-blocks/marquee {"text":" WolfThemes <span class=\"wolf-blocks-marquee__item-separator\">✦</span> Premium WordPress Themes <span class=\"wolf-blocks-marquee__item-separator\">✦</span> ","direction":"left","animationDuration":30} -->
<div class="wp-block-wolf-blocks-marquee wolf-blocks-marquee is-dark" style="--wolf-marquee-duration:30s">
    <div class="wolf-blocks-marquee__track wolf-blocks-marquee__track--left">
        <span class="wolf-blocks-marquee__item"> WolfThemes <span class="wolf-blocks-marquee__item-separator">✦</span> Premium WordPress Themes <span class="wolf-blocks-marquee__item-separator">✦</span> </span>
        <!-- × 6 identical spans total -->
    </div>
</div>
<!-- /wp:wolf-blocks/marquee -->
```

### wolf-blocks/stats-counter
```
title: string    startNumber: number    endNumber: number    prefix: string
suffix: string   animationDuration: number    thousandsSeparator: boolean
separatorStyle: "default"|...
```
```html
<!-- wp:wolf-blocks/stats-counter {"title":"Customers","endNumber":36000,"suffix":"+"} /-->
```

### wolf-blocks/testimonial-card
```
content: string    avatarUrl: string    avatarId: number    name: string
authorTitle: string    link: string    imagePosition: "left"|"right"
textAlign: "left"|"center"|"right"    rating: number (0-5)
```

### wolf-blocks/pricing-table
```
title: string    price: number    currency: string    currencyPosition: "before"|"after"
offerPrice: number    pricePeriod: string    buttonText: string    buttonUrl: string
featured: boolean    featuredText: string    services: array    htmlTag: string
```

### wolf-blocks/countdown
```
source: "manual"|"wolf-store"    targetDate: string (ISO 8601)    label: string
expiredText: string    showDays: boolean    showSeconds: boolean
```

### wolf-blocks/feature-grid
```
columns: number (2-4)
```
Must contain `wolf-blocks/feature-grid-item` as direct children.

### wolf-blocks/feature-grid-item
```
icon: string (@wordpress/icons name)    title: string    description: string
```
Must be direct child of `wolf-blocks/feature-grid`.

### wolf-blocks/comparison-table
```
title: string    usLabel: string    competitorLabel: string    rows: array
rows item: {"feature": string, "us": boolean, "competitor": boolean}
```

### wolf-blocks/mailchimp-form
```
listId: string (required for functionality)    showName: boolean    buttonLabel: string
namePlaceholder: string    emailPlaceholder: string    successMessage: string
errorMessage: string    emptyEmailMessage: string    invalidEmailMessage: string
emptyNameMessage: string
```

---

## Valid token slugs (seijaku-fse / wolf-blank)

### Colors (`textColor`, `backgroundColor`, `overlayColor`)
`primary` · `primary-light` · `secondary` · `accent` · `base` · `base-2` · `contrast` · `contrast-2`

### Font sizes (`fontSize`)
`xxs` · `xs` · `sm` · `base` · `md` · `lg` · `xl` · `2-xl` · `3-xl` · `display` · `hero`

⚠️ The large slugs are **hyphenated** — `2-xl` / `3-xl`, NOT `2xl` / `3xl`. WordPress
serializes the utility class verbatim as `has-{slug}-font-size`, so the slug must match
across all four places: `theme.json` slug, the block `fontSize` attribute, the
`has-…-font-size` class in static markup, and the SCSS `fs('2-xl')` token
(`var(--wp--preset--font-size--2-xl)`). Heading scale (Major Third ×1.25): h1=`3-xl`,
h2=`2-xl`, h3=`xl`, h4=`lg`, h5=`md`, h6=`base`; `display`=inner-page hero, `hero`=cover.

### Spacing (`style.spacing.padding/margin` use scale slugs)
`1` through `12` (e.g. `{"top":"var:preset|spacing|8"}`)

### Font families (`fontFamily`)
`heading` · `body`

---

## Seijaku-fse template structure

```html
<!-- wp:template-part {"slug":"header","tagName":"header","area":"header"} /-->

<!-- wp:group {"tagName":"main","layout":{"type":"default"}} -->
<main class="wp-block-group">

    <!-- wp:pattern {"slug":"seijaku-fse/pattern-name"} /-->

</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer","area":"footer"} /-->
```

For overlay header (front-page, music-themes):
```html
<!-- wp:template-part {"slug":"header-overlay","tagName":"header","area":"header"} /-->
```

---

## Known fixes

*Entries added via `/learn` as issues are discovered and resolved.*

| Date | Block | Issue | Fix |
|---|---|---|---|
| 2026-06-19 | `wolf-blocks/marquee` | "Resolve Block" — pattern `text` attribute was plain text (e.g. `"WolfThemes · "`) but static HTML had `<span class="wolf-blocks-marquee__item-separator">✦</span>` elements inside each item. `save()` uses `dangerouslySetInnerHTML={{ __html: text }}`, so the attribute value must exactly match the inner HTML of each item span. | Put the full HTML — including separator spans — directly in the `text` attribute value, with JSON-escaped quotes: `{"text":" WolfThemes <span class=\"wolf-blocks-marquee__item-separator\">✦</span> Premium WordPress Themes <span class=\"wolf-blocks-marquee__item-separator\">✦</span> "}`. The static HTML must then match this rendered output. |
| 2026-06-19 | `wolf-blocks/testimonial-card` | "Resolve Block" — star spans in pattern static HTML used `★` (HTML entity) but `save()` JSX outputs the literal Unicode character `★`. WP block validator does exact string comparison, so entity ≠ literal char. | Always use the literal Unicode character `★` (U+2605) in static HTML, never the HTML entity `★`. The same principle applies to any character rendered from JSX — JSX renders literals, not entities. |
| 2026-06-19 | `wp:group` with `style.spacing.padding` | "Block contains unexpected or invalid content" — group block comment had `"style":{"spacing":{"padding":{...}}}` but the static `<section>` / `<div>` tag was missing the corresponding inline `style` attribute. WP validates static HTML against `save()` output, which inlines the spacing as a `style` attribute. | Always include the inline style on the wrapper element: `<section ... style="padding-top:var(--wp--preset--spacing--11);padding-bottom:var(--wp--preset--spacing--11)">`. The token path `var:preset|spacing|11` serializes to `var(--wp--preset--spacing--11)`. |
| 2026-06-21 | PHP pattern file (any block) | BOM (`\xEF\xBB\xBF`) prepended before `<?php` caused PHP to emit raw bytes before any HTML output. In FSE this broke block parsing entirely — the Site Editor showed a "Resolve Block" / blank-page error and the frontend had a visible gap at the top of the page. | Pattern `.php` files must be saved as **UTF-8 without BOM**. The BOM is invisible in most editors. Symptom: `git diff` shows `﻿<?php` (BOM before `<?php`). Fix: remove the BOM — in most editors "Save as UTF-8 without BOM"; in code, `Edit` the file replacing `﻿<?php` with `<?php`. |
| 2026-06-19 | `wp:cover` with `dimRatio` | "Resolve Block" — `dimRatio:55` in block attributes but static HTML had `has-background-dim-50` on the background span. `dimRatioToClass(ratio)` rounds to nearest 10: `55 → 60`, `45 → 50`. `dimRatio:50` returns `null` (no numbered class, only `has-background-dim`). | Match the span class to what `dimRatioToClass` produces: use multiples of 10 for `dimRatio`, and set the class accordingly (`has-background-dim-60` for `dimRatio:60`). Avoid non-round values like 55. |
| 2026-06-21 | `wp:heading` / `wp:post-title` (`fontSize`) | Font-size preset slugs in `theme.json` were `2xl`/`3xl`, but patterns carried class `has-2-xl-font-size` and SCSS used `fs('2-xl')`. WP derives the class and CSS var straight from the slug (`has-{slug}-font-size`, `--wp--preset--font-size--{slug}`), so a `2xl` slug emits `--2xl` while the markup/SCSS referenced `--2-xl` — the var was undefined and the heading silently fell back to an unstyled size. The mismatch was invisible (no "Resolve Block" error) because the `fontSize` attr `2xl` still validated against the preset; only the rendered size was wrong. | Use **hyphenated** slugs `2-xl`/`3-xl` and keep them identical in all four places: `theme.json` slug, block `fontSize` attr, `has-…-font-size` class, and SCSS `fs()` token. Renamed `2xl→2-xl`, `3xl→3-xl` in theme.json, `services-intro.php`, `page.html`, `_about.scss`; rebuilt `main.css`. Numeric-leading slugs are fine — WP keeps them verbatim. |
