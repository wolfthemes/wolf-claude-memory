# Inbox

Raw capture only. Dictate or jot a line here for anything you don't have time to file properly — a task, a reminder, a decision, a stray thought. A daily scheduled task sorts each line into `TASKS.md`, a new reminder, or the right `wiki/` page, then clears this file.

One line per item. No formatting needed.

## TODO:

Fix/check in seijaku-fse details toggle jump/lagg on fadeUp

Add this to ~/.claude/settings.json (merge with existing content, don't overwrite):

"statusLine": {
  "type": "command",
  "command": "echo \"📁 $(git remote get-url origin 2>/dev/null | sed 's/.*[/:]//;s/\\.git$//' || basename \"$PWD\")\""
}

This shows the git repo name in the status bar (falls back to folder name if no remote).

---
