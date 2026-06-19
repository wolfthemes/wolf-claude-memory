# Toolchain

Pinned versions across the FSE stack repos. These are not casual — each pin exists because an upgrade broke something or is known to break something. Do not upgrade without reading the rationale.

---

## Version Pins

| Repo | Tool | Pinned version | Rationale |
|---|---|---|---|
| wolf-blocks | `@wordpress/scripts` | `^31.8.0` | React 18 support; ESLint v8 (supports legacy `.eslintrc.js` config) |
| wolf-store | `@wordpress/scripts` | `^24` | React 17 only — intentional divergence from wolf-blocks |
| wolf-blocks | `stylelint` | `^16` | Required by `@wordpress/stylelint-config@^23` |
| wolf-blocks | `stylelint-config` | `@wordpress/stylelint-config@^23` | Requires stylelint 16 |
| all FSE repos | WordPress | `6.0+` (wolf-store, wolf-blocks) / `6.5+` (wolf-blank) | FSE block theme APIs stabilized in 6.5 |
| all FSE repos | PHP | `7.4+` (wolf-store, wolf-blocks) / `8.0+` (wolf-blank, seijaku-fse) | |

---

## What Breaks If You Upgrade

### `@wordpress/scripts` → 32+
- ESLint upgraded to v10, which **dropped support for `.eslintrc.js`** (legacy config format)
- wolf-blocks uses `.eslintrc.js` — upgrading silently breaks linting or causes hard errors
- Migration path: rename to `eslint.config.js` flat config format first, then upgrade scripts
- **wolf-store must stay at 24** — it uses React 17 patterns; upgrading would pull in React 18 peer deps that conflict

### `stylelint` → 17+
- `@wordpress/stylelint-config@^23` has a peer dep on stylelint 16
- Also: two rules were **removed in stylelint v16** — do not set them to `null` in config, just omit:
  - `max-line-length`
  - `declaration-colon-space-after`

### `stylelint` config — SCSS comments
`.stylelintrc.json` must include:
```json
"customSyntax": "postcss-scss"
```
Without it, `//` SCSS single-line comments cause `CssSyntaxError`.

---

## WordPress / PHP Requirements

| Repo | Min WordPress | Min PHP |
|---|---|---|
| wolf-blank | 6.5 | 8.0 |
| seijaku-fse | 6.5 | 8.0 |
| wolf-store | 6.0 | 8.1 |
| wolf-blocks | 6.0 | 7.4 |

---

## Node

Node 18+ required for all repos. No upper pin — any current LTS works.

---

## See also

- [[wiki/products/wolf-blocks/wolf-blocks]] — full dev commands
- [[wiki/products/wolf-store/wolf-store]] — CSS token system, build details
- [[wiki/concepts/dev-environment]] — how to run the stack locally
