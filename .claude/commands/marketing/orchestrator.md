# /marketing-orchestrator

Lance le cycle marketing hebdomadaire complet : Analytics → Contenu → Tâches.

## Séquence

### Étape 1 — Analytics
Exécute `/marketing-analytics` en intégralité.
Attend que le rapport soit écrit dans `output/reports/` avant de continuer.

### Étape 2 — Contenu
Lis le rapport qui vient d'être généré.
Identifie les 2 thèmes les plus pertinents à promouvoir cette semaine :
1. Le thème avec le meilleur trafic récent (amplifier ce qui marche)
2. Un thème sous-promu avec un bon potentiel (diversifier)

Exécute `/marketing-content` pour chacun des deux thèmes.

### Étape 3 — Tâches
Exécute `/marketing-tasks` pour générer les recommandations de la semaine.

### Étape 4 — Résumé

Affiche un résumé de ce qui a été accompli :

```
## Cycle marketing du YYYY-MM-DD

✓ Rapport Analytics : output/reports/YYYY-MM-DD.md
✓ Contenu créé pour : {thème 1}, {thème 2}
✓ Ideas Buffer : {IDs}
✓ Tâches ajoutées : {N} nouvelles tâches dans TASKS.md

### Points clés du rapport
[3 insights du rapport analytics]

### Contenu à valider
[Résumé des captions créées + liens Buffer pour approbation]

### Prochaines actions prioritaires
[Top 3 tâches de TASKS.md]
```

## Approbation humaine requise

Les ideas Buffer créées ne sont PAS postées automatiquement — elles attendent approbation dans Buffer.
Avant que les posts partent, Constantin doit :
1. Ouvrir Buffer
2. Sélectionner l'image depuis les URLs de référence fournies
3. Approuver ou modifier les captions
4. Planifier la publication

## Cadence recommandée

- **Hebdomadaire** — tous les lundis matin
- Peut être déclenché manuellement : `/marketing-orchestrator`
- Peut être automatisé via CronCreate pour un déclenchement autonome
