# Wiki Schema

This is a persistent knowledge base, not a chat archive and not a RAG index. It exists to accumulate durable knowledge across long-term projects, so that reasoning and decisions survive past the conversation that produced them.

Read this file first, every session.

## Architecture

- `raw/` — source material: code, notes, screenshots, anything dropped in for reference. Immutable. Claude reads but never edits these.
- `wiki/` — Claude-maintained knowledge, organized into three kinds of pages:
    - `wiki/products/` — long-lived assets and repositories (e.g. wolf-store, wolf-blocks, wolf-blank, seijaku-fse). These outlive any single project.
    - `wiki/projects/` — temporary initiatives with a goal and an end state (e.g. wolfthemes-redesign). When a project ends, its page stays as a record — it doesn't get deleted.
    - `wiki/concepts/` — knowledge that cuts across multiple products or projects (architecture patterns, design rationale, recurring decisions). When something would otherwise be repeated on several pages, it belongs here instead, linked from everywhere it applies.

## What belongs in the wiki

In order of priority:

1. Decisions
2. Architecture
3. Design rationale
4. Business reasoning
5. Reusable concepts
6. Reference material

What does not belong: implementation logs, chat summaries, temporary experiments, task tracking, or anything that's just narrating what happened rather than what was decided and why. If a session produced a lot of back-and-forth but only one durable conclusion, write the conclusion, not the back-and-forth.

When something is genuinely temporary or task-level, leave it out of the wiki entirely rather than filing it somewhere as noise.

## What Claude may do

- Create new pages
- Update existing pages
- Link pages together
- Suggest improvements to structure or content

## What Claude needs approval for

- Deleting pages
- Renaming `products/`, `projects/`, or `concepts/`
- Any large-scale restructuring

Default to small, in-place edits. If a change would touch many pages or alter the categories above, describe the change and wait for a go-ahead first.

## Working principles

- Simplicity over completeness. A short, accurate page beats a thorough, sprawling one.
- Evolve incrementally. This file and the wiki's structure can grow as real needs emerge — don't pre-build sections for situations that haven't happened yet.
- Favor reusable knowledge over project-specific detail. When writing something on a project page, ask whether it actually belongs on a concept or product page instead.
- Optimize for this still making sense in three years with no memory of today's context. Write pages as if a future reader (human or Claude) has none of the surrounding conversation.