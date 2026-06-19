# Dev Environment

The FSE stack (wolf-blank, seijaku-fse, wolf-store, wolf-blocks) is developed together in a single Docker environment called `wolf-store-docker`.

See also: [[wiki/concepts/fse-stack-architecture]] for how the repos relate architecturally.

---

## Prerequisites

| Requirement | Version |
|---|---|
| Docker Desktop | Latest |
| WSL2 | Windows only |
| Node | 18+ |
| PHP | 8.x |
| Composer | Latest |

---

## Repo Structure

`wolf-store-docker` is the orchestration repo. The four product repos are checked out as subdirectories — each is an **independent Git repo** with its own remote.

```
wolf-store-docker/          ← Docker orchestration (its own repo)
├── themes/
│   ├── wolf-blank/         ← git repo → github.com/wolfthemes/wolf-blank       (master)
│   └── seijaku-fse/        ← git repo → github.com/wolfthemes/seijaku-fse      (master)
├── plugins/
│   ├── wolf-store/         ← git repo → github.com/wolfthemes/wolf-store        (dev)
│   └── wolf-blocks/        ← git repo → github.com/wolfthemes/wolf-blocks       (master)
└── docker-compose.yml
```

**Critical rule:** Never run `git` from the docker root and assume it targets a nested repo. Each nested repo must be entered explicitly (`cd themes/seijaku-fse && git ...`).

---

## Branch Map

| Repo | Active branch |
|---|---|
| wolf-blank | `master` |
| seijaku-fse | `master` |
| wolf-store | `dev` |
| wolf-blocks | `master` |

---

## URLs

| Service | URL |
|---|---|
| WordPress site | http://localhost:8080 |
| Adminer (DB) | http://localhost:8081 |
| Staging (wolf-store) | https://staging20.wolfthemes.com/store/ |

---

## Start / Stop

```bash
# Start
docker compose up -d

# Stop
docker compose down

# View logs
docker compose logs -f

# Restart a specific service
docker compose restart wordpress
```

---

## Per-Repo Dev Commands

### wolf-store & wolf-blocks (both use @wordpress/scripts)

```bash
npm install
npm run build      # production build
npm run start      # dev watch + BrowserSync
npm run lint:js
npm run lint:css
npm run lint:php   # requires composer install first
```

### seijaku-fse

```bash
npm install
npm run build
npm run start
npm run lint
composer install && npm run lint:php
```

---

## FSE Template Cache Gotcha

After editing any `templates/` or `parts/` file in seijaku-fse or wolf-blank, WordPress caches the old version in the database. Force a reload:

**Appearance → Editor → Templates → (⋮ menu) → Clear customizations**

If you skip this, your file changes won't appear in the browser regardless of build status.

---

## Common Issues

| Problem | Fix |
|---|---|
| Changes not showing in browser | FSE template cache — clear customizations (see above) |
| `theme.json` breaks silently | Contains a `//` or `/* */` comment — strict JSON only |
| Plugin styles not applying | Active theme not defining `--wolf-*` contract vars — check `theme.json → settings.custom.wolf` |
| Wrong git repo targeted | You ran `git` from the docker root — `cd` into the specific repo first |
| wolf-store CSS not updating | BrowserSync proxy may need restart: `npm run start` |
