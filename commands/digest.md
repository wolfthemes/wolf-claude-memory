# ~/.claude/commands/digest.md

Process and update the wolf-claude-memory knowledge base. This is an
active triage command, not a passive report.

## Vault location
`/mnt/c/Users/Constantin/wolfthemes-dev/wolf-claude-memory/`

## Steps

### 1. Read first
- `CLAUDE.md` — schema and rules
- `STATUS.md` — current sprint
- `TASKS.md` — active todos
- `Inbox.md` — unprocessed captures
- `raw/index.md` — indexed raw material

### 2. Triage Inbox.md
For each line in Inbox.md, file it immediately:
- Task or commitment → add to TASKS.md under Active
- Decision, architecture, or durable knowledge → create or update
  the appropriate wiki/ page
- Dated reminder → note it as a scheduled reminder (do not add to TASKS.md)
Then clear processed lines from Inbox.md.

### 3. Scan raw/ for new material
Compare actual files in raw/ against raw/index.md.
For each unindexed file:
- Distill any durable knowledge into the appropriate wiki/ page
- Add the file to raw/index.md with a one-line description

### 4. Prune completed todos
In TASKS.md, remove every item marked done (`- [x]`) from the Active,
Waiting On, and Someday sections. These are finished and only add noise.
Before deleting, check each one carries no durable decision or knowledge
that isn't already captured in a wiki/ page — if it does, file that first,
then remove the line. Keep a count of what was pruned for the digest.

### 5. Update statuses
Scan wiki/projects/**/*.md and STATUS.md for stale or completed items.
Update any status that can be determined from context without guessing.
Flag anything that needs a human decision.

### 6. Produce a digest summary
After all updates are done, output:

### 🎯 This week's target
### 🔧 Active right now
### 🧪 In testing / validation
### ⏳ Queued — next up
### 📋 Open TODOs
### ⚠️ Pending decisions (needs your input)
### ✅ What was processed this run

## Rules
- Follow CLAUDE.md strictly — what belongs in wiki/ vs TASKS.md vs nowhere
- Never delete wiki/ pages or rename top-level categories without approval
- If unsure where something belongs, add it to the digest under ⚠️ rather than guessing
- If STATUS.md sprint target date has passed, flag it prominently
