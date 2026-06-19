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
```html
<!-- wp:wolf-blocks/marquee {"text":"WolfThemes · ","direction":"left","animationDuration":30} /-->
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
`xs` · `sm` · `md` · `lg` · `xl` · `2xl` · `3xl` · `display`

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
| 2026-06-19 | `wolf-blocks/marquee` | "Resolve Block" dialog appears — WordPress offers to convert inner HTML with `wolf-blocks-marquee__item` / `wolf-blocks-marquee__item-separator` spans | Marquee is self-closing. Never put inner HTML between its block tags. All content goes in the `text` attribute: `<!-- wp:wolf-blocks/marquee {"text":"Your text · "} /-->` |
| 2026-06-19 | PHP patterns (e.g. `seijaku-fse/testimonials`) | "Block contains unexpected or invalid content" on templates that include PHP patterns outputting raw HTML | PHP patterns must output valid Gutenberg block markup, not raw HTML. Every element must be wrapped in a registered block comment (`<!-- wp:html -->` for raw HTML fallback, or ideally a proper block). Raw HTML outside block comments is unparseable by the editor. |
