# Graphify

AST-based knowledge graph tool for codebases. Generates a queryable `graph.json` Claude Code can read instead of scanning all files — saves tokens. Also outputs an interactive HTML viz and Obsidian-compatible markdown notes.

**Package:** `graphifyy` (double-y on PyPI) — command stays `graphify`.

---

## 1. Installation globale

```bash
# Dans WSL2
pip install graphifyy --break-system-packages
# ou mieux avec pipx pour isolation :
pipx install graphifyy

# Vérifier
graphify --version
```

---

## 2. Installer le skill dans un repo

```bash
# Aller dans le repo cible, ex :
cd ~/dev/seijaku-fse

# Installer le skill (scope projet)
graphify install --project

# Ça écrit : .claude/skills/graphify/SKILL.md
# Claude Code le lira automatiquement à chaque session
```

---

## 3. Builder le knowledge graph

```bash
# Dans la racine du repo
graphify .

# Avec export Obsidian en même temps :
graphify . --obsidian

# Output dans graphify-out/ :
# ├── graph.json        → queryable par Claude
# ├── graph.html        → viz interactive dans le browser
# ├── GRAPH_REPORT.md   → nodes clés, surprises, clusters
# └── obsidian/         → notes markdown linkées (si --obsidian)
```

---

## 4. Lier avec ton vault Obsidian

Ton vault est dans `wolf-claude-memory`. Le principe : créer un symlink pour que les notes Graphify apparaissent dans la graph view Obsidian.

```bash
# Créer un dossier dédié dans le vault
mkdir -p ~/wolf-claude-memory/graphify

# Symlink par repo
ln -s ~/dev/seijaku-fse/graphify-out \
  ~/wolf-claude-memory/graphify/seijaku-fse

ln -s ~/dev/wolf-store/graphify-out \
  ~/wolf-claude-memory/graphify/wolf-store

ln -s ~/dev/wolf-blocks/graphify-out \
  ~/wolf-claude-memory/graphify/wolf-blocks
```

Obsidian voit maintenant les `GRAPH_REPORT.md` et les notes générées par `--obsidian` dans sa graph view, alongside tes notes existantes.

---

## 5. Auto-rebuild avec git hook

```bash
cd ~/dev/seijaku-fse
graphify hook install
# Rebuild AST-only (0 tokens) à chaque commit automatiquement
```

Pour les updates manuelles après gros refactor :
```bash
graphify . --update   # re-extrait seulement les fichiers modifiés
graphify . --force    # écrase tout (après suppression de fichiers)
```

---

## 6. Workflow Claude Code ensuite

Dans une session Claude Code :
```
/graphify .           → build/refresh le graph
/graphify . --update  → update incrémental
```

Claude Code lit `graph.json` au lieu de scanner tous tes fichiers — gain de tokens.

---

## Résumé du pattern pour WolfThemes

```
wolf-claude-memory/
└── graphify/
    ├── seijaku-fse/   → symlink vers ~/dev/seijaku-fse/graphify-out
    ├── wolf-store/    → symlink vers ~/dev/wolf-store/graphify-out
    └── wolf-blocks/   → symlink vers ~/dev/wolf-blocks/graphify-out
```

Chaque projet a son graph versionnable, Obsidian voit tout dans une seule vue.

**Note piège :** le package PyPI s'appelle `graphifyy` (double-y) mais la commande reste `graphify`. Si tu vois un autre package, c'est pas l'officiel.
