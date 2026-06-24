# /marketing-content [slug]

Crée du contenu social pour un thème WolfThemes et le pousse dans Buffer comme idea.

Si aucun slug n'est fourni, consulte le dernier rapport dans `output/reports/` et choisis le thème qui a généré le plus de trafic cette semaine mais qui n'a pas encore été posté sur les réseaux.

## Données produit disponibles

Deux sources d'information sur chaque thème :

**A. Wiki** (`wiki/products/themeforest-portfolio/themeforest-portfolio.md`) :
- Slug, catégorie, tags, couleurs, style
- Positionnement dans la gamme

**B. theme_meta.json** : `https://changelog.wolfthemes.cloud/{slug}/theme_meta.json`
- Essaie de récupérer via WebFetch. Si 403, utilise uniquement les données wiki.

**C. Screenshots** : `https://preview.wolfthemes.store/{slug}/?wolf-theme-images={slug}`
- URL de référence pour l'image principale — inclus-la dans l'output pour copier-coller manuel.
- Pattern d'URL prévisible pour les screenshots individuels si le JSON n'est pas accessible.

## Étapes

### 1. Collecte les infos du thème

Lis `wiki/products/themeforest-portfolio/themeforest-portfolio.md` pour trouver le thème par slug.
Extrais : catégorie, tags, couleurs, style, notes de positionnement.

Tente le WebFetch sur `https://changelog.wolfthemes.cloud/{slug}/theme_meta.json`.

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

Sans accès direct aux images, fournis :
- URL du screenshot principal : `https://wolfthemes.com/wp-content/themes/{slug}/screenshot.png` ou similaire
- URL de la page preview : `https://preview.wolfthemes.store/{slug}/`
- Quel type de visuel choisir (homepage hero, feature detail, mobile view)

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
