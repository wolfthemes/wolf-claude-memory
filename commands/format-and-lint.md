# ~/.claude/commands/format-and-lint.md

Run full formatting and linting pipeline on the current project.

## Steps
1. Check available scripts in package.json and composer.json
2. Run all available format scripts:
   - `npm run format:css`
   - `npm run format:js`
   - `npm run format:php` or `composer run format`
3. Run all linters and collect output:
   - `npm run lint:css`
   - `npm run lint:js`
   - `npm run lint:php` or `composer run lint`
4. Apply all auto-fixable errors:
   - `npm run lint:css -- --fix`
   - `npm run lint:js -- --fix`
   - `./vendor/bin/phpcbf`
5. For remaining errors that cannot be auto-fixed, read each file and fix them manually
6. Re-run all linters to confirm
7. Repeat until all linters exit with code 0

## Rules
- Skip any script that does not exist, warn but continue
- Never modify vendor/ or node_modules/
- Always fix everything — do not stop until all linters pass
- Report a final summary: files modified, errors fixed
- **NEVER format or lint `*.guty.tsx` files** — these use the guty DSL (not standard TS/TSX) and formatters break their syntax by adding semicolons. They are excluded via `.eslintignore` and `.prettierignore`, but never manually edit or run formatting tools against them.
