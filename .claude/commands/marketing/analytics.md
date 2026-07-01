# /marketing-analytics

Analyse les données de performance WolfThemes et génère un rapport hebdomadaire.

## Étapes

### 1. GA4 — Trafic wolfthemes.com

Utilise `mcp__Google_Analytics__get_account_summaries` pour trouver la property "WolfThemes Store".

Ensuite lance `mcp__Google_Analytics__run_report` avec ces paramètres :
- **dateRanges** : les 30 derniers jours vs les 30 jours précédents
- **dimensions** : `pagePath`, `sessionSource`, `sessionMedium`
- **metrics** : `sessions`, `activeUsers`, `conversions`, `bounceRate`
- **orderBys** : `sessions` DESC
- **limit** : 20 résultats

Objectif : identifier quelles pages de thèmes génèrent le plus de trafic et d'où vient ce trafic.

### 2. Buffer — Performance sociale

Utilise `mcp__Buffer__get_aggregated_post_metrics` avec :
- **organizationId** : `66e40cad8a27b612c7a0ccd3`
- **channels** : tous (Facebook `66e40ccdca3dab3e0a3c25e2`, Instagram `66e40ce7ca3dab3e0a3d7bc0`, Pinterest `6a3c3fca5ab6d2f1066a9e7f`)
- **startDateTime** et **endDateTime** au format ISO 8601 (ex : `2026-05-25T00:00:00Z`)

Note : utiliser `startDateTime`/`endDateTime` (pas `startDate`/`endDate`).

Ensuite `mcp__Buffer__list_posts` pour voir les posts récents et leur engagement individuel.

### 3. Brevo — Performance newsletter

Utilise `mcp__Brevo__email_campaign_management_get_email_campaigns` pour lister les campagnes envoyées sur les 30 derniers jours (statut `sent`).

Pour chaque campagne pertinente, `mcp__Brevo__email_campaign_management_get_email_campaign` donne le détail : délivrés, taux d'ouverture, clics, conversions, désinscriptions.

Objectif : voir quelles campagnes/segments performent, et si les clics de newsletter se retrouvent dans le trafic GA4 (comparer les dates d'envoi aux pics de sessions sur `sessionSource`/`sessionMedium` contenant `email`/`newsletter`/`brevo`).

### 4. Rédige le rapport

Écris le rapport dans `output/reports/YYYY-MM-DD.md` (date du jour) avec cette structure :

```
# Rapport Marketing — YYYY-MM-DD

## Résumé exécutif
[2-3 phrases : ce qui a marché, ce qui n'a pas marché, tendance globale]

## GA4 — Top pages (30 jours)
[Tableau : page | sessions | variation vs période précédente | taux conversion]

## GA4 — Sources de trafic
[Tableau : source/medium | sessions | % du total]

## Buffer — Performance par réseau
[Tableau : réseau | posts | reach total | engagement moyen]

## Buffer — Posts les plus performants
[Liste des 5 meilleurs posts avec métriques]

## Brevo — Performance newsletter
[Tableau : campagne | délivrés | taux ouverture | clics | conversions]

## Thèmes qui génèrent du trafic
[Quels slugs de thèmes apparaissent le plus dans les pages vues]

## Dynamique newsletter ↔ site ↔ social
[Est-ce qu'un envoi Brevo produit un pic de sessions GA4 ou d'engagement Buffer dans les jours suivants ?]

## Insights
[3-5 observations actionnables basées sur les données]

## Recommandations pour la semaine suivante
[2-3 actions concrètes]
```

### 5. Met à jour le wiki

Si le rapport révèle un changement significatif de tendance (nouveau thème qui performe, source de trafic inattendue), mets à jour `wiki/concepts/analytics-marketing-stack.md`.
