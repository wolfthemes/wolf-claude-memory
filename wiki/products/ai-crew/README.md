# ai-crew

Modular AI assistant system built on CrewAI. Automates WolfThemes support workflows and other operational tasks.

**Location:** `wolfthemes-dev/ai-crew/`

## Purpose

Automate repetitive operational tasks — primarily customer support ticket replies — using an AI agent crew that can write in Constantin's natural tone. Designed to integrate with Ticksy (support platform), Notion, GitHub, and other tools.

## Stack

- Python, CrewAI, OpenAI, LangChain
- Integrations: Ticksy, Notion, GitHub

## Project layout

| Path | Role |
|---|---|
| `agents/` | Agent definitions |
| `tasks/` | Agent task definitions |
| `crews/` | Crew orchestration |
| `apps/` | App-level entry points |
| `crawlers/` | Data crawlers |
| `prompts/` | Prompt templates |
| `config/` | Configuration |

## Status

Early stage / experimental. Support agent can reply to customer tickets in Constantin's tone. Future integrations planned for trading insights and RSS/content workflows.

## Setup

```bash
python -m venv venv
source venv/Scripts/activate   # Windows
pip install -r requirements.txt
# copy .env.example → .env and fill keys
```

Required env vars: `OPENAI_API_KEY`, `NOTION_API_KEY`, `GITHUB_TOKEN`, `TICKSY_API_KEY`.
