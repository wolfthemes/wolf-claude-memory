# guty

`@guty/core` (CLI: `guty`) — a minimal TypeScript CLI that compiles a narrow, JSX/TSX-like dialect into WordPress Gutenberg block markup. It exists so FSE templates, parts, and patterns can be authored as typed components instead of hand-written `<!-- wp:* -->` block comments.

Lives inside the `wolf-store-docker` workspace but is a **standalone tool** with its own remote: `git@github.com:wolfthemes/guty.git`. Source of truth: its in-repo `README.md` + `CLAUDE.md` at `wolf-store-docker/tools/guty/`.

Relates to [[seijaku-fse]] / [[wolf-blank]] (FSE output it generates) and [[wolf-blocks]] / [[wolf-store]] (custom blocks it can render via real `save.js`). See [[fse-stack-architecture]].

## What it does

Authors write `.guty.tsx` files; `guty build <input> --out <dist>` compiles them to WordPress markup, preserving directory structure:

- `templates/` → `.html`
- `parts/` → `.html`
- `patterns/` → `.php` (with a generated WordPress pattern header)

## Element set (intentionally narrow)

`Page` (required root), `Section`, `Container`, `Columns`, `Column`, `Heading`, `Paragraph`, `Pattern`, `Header`, `SiteLogo`, `Navigation`, `NavigationLink`, `Button`, plus the generic **`Block`** escape hatch for any registered/custom block (e.g. `wolf-store/theme-index`, `wolf-blocks/*`). Anything outside this set is expected to **throw rather than silently degrade**. Text is only allowed inside `Heading`/`Paragraph`.

`Section`/`Container`/`Header`/`Navigation` share group props: `className`, `align` (`wide`/`full`), `backgroundColor`, `textColor`, `layout`, plus native sugar (`textAlign`, `fontSize`, `fontFamily`, layout sugar, and spacing shorthands `p`/`px`/`py`/`pt`…/`m`/`mx`…). Default layout is `{ type: "constrained" }`.

## Custom-block rendering

`Block name="ns/block"` maps every other prop to a block attribute in written order. If the block's source root is supplied (`--blocks <dir>` or `guty.config.json` `"blocks": [...]`), guty executes the block's **real `save.js`** in a Node `vm` (with shims for `@wordpress/block-editor`/`i18n`) and emits the actual save markup between the block comments. Otherwise it falls back to comment-only output. A single raw-HTML string child overrides real-save rendering; raw HTML and child blocks cannot be mixed.

## Compile pipeline (4 stages, one pass per file)

1. **evaluate** (`evaluate.ts`) — transpile TSX via the TS compiler API (`jsxFactory: createElement`), run in a `vm` sandbox → `ElementNode` tree. The JSX runtime is **inlined as a string** (`RUNTIME_PREAMBLE`) duplicating `src/runtime.ts` — change element/`createElement` semantics in **both** places.
2. **compile** (`compile.ts`) — lower `ElementNode` → `BlockNode`; element→block mapping, validation, and `Block` sugar (`readCommonAttrs`, `applyBlockSugar`).
3. **serialize** (`serialize.ts`) — does **not** hand-write block comments; builds a raw-block shape and calls `serializeRawBlock` resolved out of installed `@wordpress/blocks` internals, then re-indents.
4. **targets** (`targets.ts`) — output path + post-processing by top-level input dir; patterns get a generated PHP header from leading `// @guty pattern` metadata.

## Commands

- `npm run build` — `tsc` `src/` → `build/`; **rebuild before invoking the CLI** after editing `src/`.
- `npm test` — `vitest` suite once.
- `npm run dev` — rebuild + regenerate `examples/` → `dist/`.
- `node build/cli.js build <input-dir> --out <output-dir> [--blocks <dir>]...`

## Gotchas

- `build/` is gitignored generated output (the published package); `dist/` is committed example render output — regenerate via `npm run dev`, don't hand-edit.
- The serializer depends on a deep internal path inside `@wordpress/blocks` (`build/api/parser/serialize-raw-block.cjs`) — a dependency bump can move it.
- Strict TS (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) — index access and optional props need care.
- WordPress escapes `<`, `>`, `&`, `"`, and `--` to unicode escapes inside block-comment attribute JSON; expected, round-trips on parse.
