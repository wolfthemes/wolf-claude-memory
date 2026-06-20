# ~/.claude/commands/seijaku-fse-template.md

Context loader for generating valid seijaku-fse templates and patterns.
**Auto-triggered** — Claude loads this automatically whenever asked to create or modify
a template, template part, or pattern in seijaku-fse. You do not need to run it manually.

## Steps

### 1. Load live sources
Read these files — they are the ground truth for valid markup:

**Existing valid templates** (proven working in editor):
- `wolf-store-docker/themes/seijaku-fse/templates/front-page.html`
- `wolf-store-docker/themes/seijaku-fse/templates/page.html`
- `wolf-store-docker/themes/seijaku-fse/templates/single-wolf_theme.html`
- `wolf-store-docker/themes/seijaku-fse/templates/archive-wolf_theme.html`

**Token reference** (valid slugs only):
- `wolf-store-docker/themes/wolf-blank/theme.json` → extract color palette slugs, font size slugs, spacing slugs, font family slugs

**wolf-blocks schemas** (valid attributes per block):
- `wolf-store-docker/plugins/wolf-blocks/src/blocks/*/block.json` — read all

**Known fixes and gotchas:**
- `wiki/concepts/fse-block-grammar.md` in wolf-claude-memory vault

### 2. Apply generation rules

**Strip to minimum** — no custom inline styles, no extra classes, no pre-set custom settings.
Design relies entirely on default block styles or theme.json tokens. This is mandatory.

**Block grammar:**
- All JSON in block comments must be valid JSON (no trailing commas, no unquoted keys)
- Use only attribute names and types that exist in the block's registered schema
- Self-closing blocks: `<!-- wp:block {"attr":"val"} /-->`
- Container blocks: `<!-- wp:block {"attr":"val"} --> ... <!-- /wp:block -->`
- Token slugs must exactly match those registered in theme.json (e.g. color slug `base-2` not `base2`)
- `wp:group` always needs a `layout` attribute: `{"type":"constrained"}` or `{"type":"default"}` or `{"type":"flex",...}`

**wolf-blocks:**
- All wolf-blocks are self-closing — never put inner HTML between their block comment tags
- Content goes in block attributes, not innerHTML
- `feature-grid-item` must be a direct child of `feature-grid`

### 3. Pre-output validation checklist

Before outputting any markup, verify:
- [ ] Every `wp:group` has a `layout` attribute
- [ ] Every block attribute key exists in that block's registered schema
- [ ] Every attribute value matches the registered type (string/number/boolean/array)
- [ ] All color, font-size, spacing slugs match theme.json registered values exactly
- [ ] No inline `style=""` attributes on blocks
- [ ] No custom CSS classes added to blocks
- [ ] All wolf-blocks are self-closing
- [ ] JSON in block comments is valid (no trailing commas)
- [ ] Block names match registered names exactly (e.g. `wolf-blocks/marquee` not `wolf-block/marquee`)

### 4. After generation

Note any new block or attribute combination used that isn't yet in `fse-block-grammar.md`.
If it needed trial/error to get right, flag it for `/learnt` so it gets logged.
