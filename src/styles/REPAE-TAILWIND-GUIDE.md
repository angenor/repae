# Guide d'utilisation Tailwind CSS - Identité REPAE

Ce guide vous explique comment utiliser les classes Tailwind personnalisées basées sur la charte graphique REPAE.

## Couleurs

### Couleurs principales
```html
<!-- Couleur bleue primaire REPAE -->
<div class="bg-repae-blue text-white">Couleur primaire</div>
<div class="bg-repae-primary text-white">Alias couleur primaire</div>

<!-- Couleur grise secondaire REPAE -->
<div class="bg-repae-gray text-white">Couleur secondaire</div>
<div class="bg-repae-secondary text-white">Alias couleur secondaire</div>
```

### Nuances de couleurs
```html
<!-- Nuances de bleu (50 à 900) -->
<div class="bg-repae-blue-50">Bleu très clair</div>
<div class="bg-repae-blue-500">Bleu standard</div>
<div class="bg-repae-blue-900">Bleu très foncé</div>

<!-- Nuances de gris (50 à 900) -->
<div class="bg-repae-gray-50">Gris très clair</div>
<div class="bg-repae-gray-500">Gris standard</div>
<div class="bg-repae-gray-900">Gris très foncé</div>
```

### Couleurs de texte
```html
<p class="text-repae-blue">Texte bleu REPAE</p>
<p class="text-repae-gray">Texte gris REPAE</p>
<p class="text-repae-blue-600">Texte bleu foncé</p>
```

### Bordures
```html
<div class="border-repae-blue border-2">Bordure bleue</div>
<div class="border-l-4 border-repae-blue">Bordure gauche bleue</div>
```

## Typographie

### Police Montserrat
```html
<!-- Police principale REPAE -->
<h1 class="font-montserrat text-4xl font-bold">Titre principal</h1>
<p class="font-montserrat">Texte avec Montserrat</p>

<!-- Alias -->
<h2 class="font-brand text-2xl">Titre de marque</h2>
```

### Exemples de hiérarchie typographique
```html
<h1 class="font-montserrat text-4xl font-bold text-repae-blue">Titre H1</h1>
<h2 class="font-montserrat text-3xl font-semibold text-repae-gray">Titre H2</h2>
<h3 class="font-montserrat text-2xl font-medium text-repae-blue">Titre H3</h3>
<p class="font-montserrat text-base text-repae-gray-700">Paragraphe</p>
<small class="font-montserrat text-sm text-repae-gray-600">Texte petit</small>
```

## Dégradés

### Dégradé de marque REPAE
```html
<div class="bg-gradient-to-r from-repae-blue to-repae-gray">
  Dégradé bleu vers gris
</div>

<!-- Ou avec les classes utilitaires personnalisées -->
<div class="repae-gradient">Dégradé REPAE</div>
<div class="brand-gradient">Dégradé de marque</div>
```

### Variations de dégradés
```html
<div class="bg-gradient-to-br from-repae-blue-400 to-repae-blue-700">
  Dégradé bleu nuancé
</div>
<div class="bg-gradient-to-t from-repae-gray-200 to-repae-gray-600">
  Dégradé gris vertical
</div>
```

## Ombres

### Ombres de marque
```html
<div class="shadow-repae">Ombre REPAE</div>
<div class="shadow-brand">Ombre de marque</div>
<div class="shadow-repae-lg">Ombre REPAE grande</div>
<div class="shadow-repae-xl">Ombre REPAE extra-large</div>
```

## Espacements

### Zone de protection du logo
```html
<!-- Espacement de 30px autour du logo selon la charte -->
<div class="p-logo-protection">
  <img src="/logo.png" alt="Logo REPAE" />
</div>

<!-- Ou avec la classe utilitaire -->
<div class="repae-logo-protection">
  <img src="/logo.png" alt="Logo REPAE" />
</div>
```

## Boutons

### Boutons de marque
```html
<!-- Bouton primaire -->
<button class="bg-repae-blue hover:bg-repae-blue-600 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors shadow-repae">
  Bouton primaire
</button>

<!-- Bouton secondaire -->
<button class="bg-repae-gray hover:bg-repae-gray-600 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors shadow-repae">
  Bouton secondaire
</button>

<!-- Bouton contour -->
<button class="border-2 border-repae-blue text-repae-blue hover:bg-repae-blue hover:text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors">
  Bouton contour
</button>
```

## Cards et composants

### Card avec l'identité REPAE
```html
<div class="bg-white rounded-lg shadow-repae p-6 border-l-4 border-repae-blue">
  <h3 class="font-montserrat text-lg font-semibold text-repae-gray mb-2">
    Titre de la card
  </h3>
  <p class="font-montserrat text-sm text-repae-gray-600">
    Contenu de la card avec les couleurs REPAE
  </p>
</div>
```

### Header avec dégradé
```html
<header class="bg-gradient-to-r from-repae-blue to-repae-gray text-white p-8">
  <h1 class="font-montserrat text-4xl font-bold">REPAE</h1>
  <p class="font-montserrat text-lg opacity-90">
    Réseau Professionnel des Alumni de l'ESATIC
  </p>
</header>
```

## Mode sombre

### Adaptation pour le mode sombre
```html
<div class="bg-white dark:bg-repae-gray-800 text-repae-gray dark:text-repae-gray-100">
  Contenu adaptatif
</div>

<button class="bg-repae-blue dark:bg-repae-blue-400 text-white font-montserrat">
  Bouton adaptatif
</button>
```

## Classes CSS personnalisées disponibles

En plus des classes Tailwind, vous avez accès à ces classes utilitaires :

- `.repae-logo-protection` : Ajoute la zone de protection de 30px autour du logo
- `.repae-gradient` : Applique le dégradé de marque REPAE
- `.brand-gradient` : Alias pour le dégradé de marque
- `.font-repae` : Applique la police Montserrat
- `.font-brand` : Alias pour la police de marque

## Composants disponibles

### RepaeLogo
```vue
<template>
  <!-- Logo par défaut -->
  <RepaeLogo />
  
  <!-- Logo avec variantes -->
  <RepaeLogo variant="primary" size="large" :with-baseline="true" />
  <RepaeLogo variant="secondary" size="medium" :with-protection="true" />
  <RepaeLogo variant="icon" size="small" />
</template>
```

### RepaeDemo
```vue
<template>
  <!-- Composant de démonstration de l'identité visuelle -->
  <RepaeDemo />
</template>
```

## Variables CSS personnalisées

Vous pouvez utiliser ces variables CSS dans vos styles personnalisés :

```css
.mon-composant {
  color: var(--color-repae-blue);
  background: var(--gradient-repae);
  font-family: var(--font-family-montserrat);
  box-shadow: var(--shadow-repae);
  padding: var(--spacing-logo-protection);
}
```

## Bonnes pratiques

1. **Respectez la charte graphique** : Utilisez uniquement les couleurs définies (#1488bb et #717173)
2. **Utilisez Montserrat** : Pour tous les textes de l'interface
3. **Zone de protection** : Respectez l'espace de 30px autour du logo
4. **Cohérence** : Utilisez les classes `repae-*` pour maintenir l'identité visuelle
5. **Accessibilité** : Vérifiez les contrastes, surtout avec le gris #717173

## Exemples d'intégration

Voir le composant `RepaeDemo.vue` pour des exemples concrets d'utilisation de toutes ces classes dans un contexte réel.