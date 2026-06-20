# ~/.claude/commands/commit-and-push.md

Commit and push the latest changes to the current branch.

## Steps
1. Identify the active repo and branch:
   Run `git remote get-url origin` and `git branch --show-current`
   Display prominently before anything else:
   > 📁 **`<repo-name>` @ `<branch>`**
   This is shown first so the user can abort immediately if it's the wrong repo.

2. Run `git status` to review staged and unstaged changes
3. Run `git add -A` to stage all changes
4. Analyze the diff and write a conventional commit message (feat/fix/chore/refactor)
5. If the branch is `main`, `master`, `stage`, or `prod`: show the proposed commit message and ask for approval before committing. Otherwise: commit directly without asking.
6. Run `git commit -m "<message>"`
7. If the branch is `main`, `master`, `stage`, or `prod`: ask for explicit confirmation before pushing, repeating the repo name:
   > "Confirm push to **`<branch>`** on **`<repo-name>`**?"
8. Otherwise: push silently with `git push origin <branch>`
9. After a successful push, run:
   `gh run watch $(gh run list --limit 1 --json databaseId -q '.[0].databaseId')`
   and report the final status

## Rules
- Never force push
- Never push to main, master, stage, or prod without confirmation
- Always show repo name + branch as the first output
- Only ask for commit message approval on protected branches (main, master, stage, prod); commit directly on all others
