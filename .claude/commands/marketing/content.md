# /marketing-content [slug]

Crée du contenu social pour un thème WolfThemes et le pousse dans Buffer comme idea.

Si aucun slug n'est fourni, consulte le dernier rapport dans `output/reports/` et choisis le thème qui a généré le plus de trafic cette semaine mais qui n'a pas encore été posté sur les réseaux.

## Données produit disponibles

Trois sources locales — toutes lisibles directement depuis le repo :

**A. Métadonnées riches** : `raw/themes/{slug}/theme_meta.json`
- `store_headline`, `store_subheadline`, `features`, `selling_points`
- `target_audience`, `key_benefits`, `theme_style`

**B. Thumbnails locaux** : `raw/themes/{slug}/thumbs/` (si présents)
- Fichiers images téléchargés localement — **lis-les avec le Read tool pour les voir visuellement**
- Choisis l'image la plus percutante : hero fort, composition claire, identité visuelle évidente
- Évite : logos, pages contact, pages maintenance, images génériques

**C. Liste complète** : `raw/themes/{slug}/images.json`
- URLs CDN organisées par section si les thumbs ne couvrent pas tout
- Ces URLs CDN fonctionnent depuis le navigateur et sont acceptées directement par l'API Buffer

**C. Positionnement** : `wiki/products/themeforest-portfolio/themeforest-portfolio.md`
- Catégorie, tags, couleurs, style, contexte dans la gamme

## Étapes

### 1. Collecte les infos du thème

Lis `raw/themes/{slug}/theme_meta.json` — c'est la source principale.

Si `raw/themes/{slug}/thumbs/` existe, **lis chaque image avec le Read tool** pour la voir visuellement. Sélectionne la plus percutante pour le post (hero fort, composition claire, pas de logo isolé ni de page contact).

Si pas de thumbs locaux, extrais 2-3 URLs depuis `raw/themes/{slug}/images.json` (priorité : section `General`, labels `home`, `band`, `artist`, `shop-home`).

### 2. Génère les captions

Pour chaque plateforme, génère 2 variantes (A/B) :

**Instagram** (priorité 1)
- Longueur : 150-200 mots
- Ton : inspirant, visuel, aspirationnel
- Structure : accroche visuelle → bénéfice → description → CTA + lien bio
- 5-8 hashtags pertinents (niche + large)
- Emoji modérés, pas excessifs

**Pinterest** (priorité 2)
- Longueur : 100-150 mots
- Ton : descriptif, orienté recherche, SEO-friendly
- Structure : titre accrocheur → description détaillée → mots-clés naturels → lien
- Focus sur le use case concret (ex : "pour les photographes qui vendent en ligne")

**X / Twitter** (priorité 3)
- Longueur : 240 caractères max
- Ton : direct, curiosité, impact
- 1-2 hashtags max
- CTA clair

### 3. Recommandation visuelle

Depuis `raw/themes/{slug}/images.json`, sélectionne 2-3 URLs pour le post :
- Image principale : section `Homepage` ou label `hero` / `home`
- Image secondaire : un détail feature ou une vue mobile si dispo
- Formate-les comme une liste prête à copier-coller dans Buffer

### 4. Pousse dans Buffer

Utilise `mcp__Buffer__create_idea` pour créer une idea dans l'organisation `66e40cad8a27b612c7a0ccd3`.

Contenu de l'idea : la caption Instagram variante A + les URLs de référence visuelle.

### 5. Log le contenu créé

Ajoute une entrée dans `output/content-log.md` :
```
## YYYY-MM-DD — {Nom du thème} ({slug})
- Plateformes : Instagram, Pinterest, X
- Buffer idea ID : [ID retourné]
- Variantes : A/B générées
```

### 6. Vérifie la diversité

Avant de choisir un thème à poster, vérifie `output/content-log.md` pour éviter de répéter le même thème ou la même catégorie deux semaines de suite.
