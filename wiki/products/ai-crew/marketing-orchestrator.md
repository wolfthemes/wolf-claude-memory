# Marketing Orchestrator

Système d'agents marketing semi-autonome pour WolfThemes. Fonctionne directement dans Claude Code via les connexions MCP — pas d'infrastructure supplémentaire requise.

**Objectif :** générer du trafic vers wolfthemes.com pour augmenter les ventes de thèmes WordPress.

---

## Architecture

```
/marketing-orchestrator
├── Agent 1 — Analytics   (/marketing-analytics)
│   ├── GA4 MCP → trafic, sources, pages de thèmes
│   └── Buffer MCP → reach, engagement par réseau/post
│
├── Agent 2 — Contenu     (/marketing-content [slug])
│   ├── Données : wiki portfolio + theme_meta.json (si accessible)
│   ├── Output : captions Instagram / Pinterest / X (2 variantes A/B)
│   └── Buffer MCP → crée une idea (approbation humaine requise)
│
└── Agent 3 — Tâches      (/marketing-tasks)
    ├── Input : rapport analytics + content log
    └── Output → TASKS.md (nouvelles tâches actionnables)
```

---

## Commandes disponibles

| Commande | Usage | Fréquence |
|---|---|---|
| `/marketing-orchestrator` | Cycle complet (Analytics + Contenu + Tâches) | Hebdomadaire |
| `/marketing-analytics` | Rapport seul | À la demande |
| `/marketing-content [slug]` | Contenu pour un thème précis | À la demande |
| `/marketing-tasks` | Suggestions de tâches seules | À la demande |

---

## Outputs

| Fichier | Contenu |
|---|---|
| `output/reports/YYYY-MM-DD.md` | Rapport analytics hebdomadaire |
| `output/content-log.md` | Historique des posts créés |
| `TASKS.md` | Tâches marketing actionnables |
| Buffer (ideas) | Captions en attente d'approbation |

---

## Intégrations MCP actives

| Service | Outil | Usage |
|---|---|---|
| Google Analytics 4 | `mcp__Google_Analytics__*` | Trafic wolfthemes.com |
| Buffer | `mcp__Buffer__*` | Scheduling + métriques sociales |
| Google Drive | `mcp__Google_Drive__*` | Assets si nécessaire |

---

## Données produit

Chaque thème est identifié par son slug (ex : `decibel`, `sable`).

| Source | URL | Statut |
|---|---|---|
| Métadonnées | `https://changelog.wolfthemes.cloud/{slug}/theme_meta.json` | 403 depuis Claude Code (accès browser uniquement) |
| Screenshots | `https://preview.wolfthemes.store/{slug}/?wolf-theme-images={slug}` | 403 depuis Claude Code (accès browser uniquement) |
| Wiki portfolio | `wiki/products/themeforest-portfolio/themeforest-portfolio.md` | Toujours accessible |

**Contournement image :** le contenu agent fournit l'URL de référence pour copier-coller dans Buffer lors de l'approbation manuelle.

---

## Approbation humaine

Le système est **semi-autonome** par design : les analyses et captions sont automatiques, mais **Constantin approuve chaque post dans Buffer** avant publication. Cela évite les erreurs de ton ou d'image inadaptée.

Flux d'approbation :
1. `/marketing-orchestrator` crée les ideas Buffer
2. Ouvrir Buffer → Ideas → sélectionner l'image → approuver/modifier → planifier

---

## Décisions d'architecture

**Pourquoi Claude Code plutôt qu'étendre ai-crew ?**
Les connexions MCP (GA4, Buffer) sont déjà actives dans Claude Code. Aucune nouvelle infrastructure — zéro friction pour démarrer. Si le volume augmente ou si des workflows plus complexes émergent, les agents peuvent migrer vers ai-crew/CrewAI.

**Pourquoi semi-autonome et non full-auto ?**
La sélection d'image et le ton final méritent un regard humain. Le risque d'un post mal calibré (mauvaise image, ton inadapté) dépasse le bénéfice du gain de temps sur cette étape.

**Cadence : hebdomadaire**
Assez fréquent pour maintenir une présence régulière, assez espacé pour que chaque thème posté soit pertinent et non répétitif.
