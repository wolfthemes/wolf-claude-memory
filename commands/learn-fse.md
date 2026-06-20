# ~/.claude/commands/learn-fse.md

Store a discovered block grammar fix into the KB so it is available in every future session.

## Two ways this gets triggered

**Automatically** — Claude runs this after confirming a template/pattern fix works in
the block editor. No action needed from you.

**Manually** — You run `/learn-fse` and provide one of:
- A screenshot of the WordPress "Resolve Block" dialog (before/after markup)
- A paste of the before/after markup
- A plain description: "wolf-blocks/X was broken because Y, fixed by Z"

## Steps

### 1. Extract the fix
From the input (screenshot, paste, or description), identify:
- **Block name** — e.g. `wolf-blocks/marquee`, `wp:group`
- **Issue** — what was wrong (one line)
- **Fix** — the correct markup or attribute (be specific and concrete)

If input is a screenshot of the "Resolve Block" dialog:
- "Current" column = the broken markup
- "After Conversion" column = what WordPress considers valid
- Extract the difference — that difference IS the fix

### 2. Update fse-block-grammar.md
File: `wiki/concepts/fse-block-grammar.md` in wolf-claude-memory vault

- Add a row to the **Known fixes** table: `| Date | Block | Issue | Fix |`
- If the fix reveals a wrong or missing entry in the attribute schema section, correct it
- If it reveals a grammar rule not yet documented, add it under the appropriate heading

### 3. Commit
```
git add wiki/concepts/fse-block-grammar.md
git commit -m "learn-fse: <block-name> — <one-line fix description>"
git push origin master
```

## What qualifies

✅ Block editor "invalid content" / "unexpected content" errors and their resolution
✅ WordPress "Resolve Block" before/after
✅ A non-obvious attribute requirement found through testing
✅ A token slug that was wrong
✅ A nesting or self-closing rule that caused problems

❌ Already documented in fse-block-grammar.md
❌ Frontend-only styling with no grammar implication
