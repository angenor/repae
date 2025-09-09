# Guide Mode Sombre REPAE

Ce guide explique comment utiliser le mode sombre avec l'identité visuelle REPAE.

## Couleurs Dark Mode

### Couleurs spécifiques au mode sombre
```css
/* Arrière-plans */
bg-repae-dark-bg              /* #0f1419 - Fond principal */
bg-repae-dark-surface         /* #1a1f26 - Surfaces, cartes */
bg-repae-dark-surface-hover   /* #242a33 - États hover */

/* Bordures */
border-repae-dark-border      /* #2d3748 - Bordures */

/* Textes */
text-repae-dark-text-primary    /* #f7fafc - Texte principal */
text-repae-dark-text-secondary  /* #cbd5e0 - Texte secondaire */
text-repae-dark-text-muted      /* #a0aec0 - Texte discret */

/* Boutons bleus adaptés */
bg-repae-blue-dark            /* #47a7c7 - Bleu plus clair pour le mode sombre */
bg-repae-blue-dark-hover      /* #75bdd5 - État hover */
bg-repae-blue-dark-active     /* #1488bb - État actif */
```

### Utilisation avec Tailwind `dark:`
```html
<!-- Arrière-plan adaptatif -->
<div class="bg-white dark:bg-repae-dark-surface">
  Contenu adaptatif
</div>

<!-- Texte adaptatif -->
<h1 class="text-repae-gray dark:text-repae-dark-text-primary">
  Titre adaptatif
</h1>

<!-- Bouton adaptatif -->
<button class="bg-repae-blue dark:bg-repae-blue-dark hover:bg-repae-blue-600 dark:hover:bg-repae-blue-dark-hover text-white">
  Bouton adaptatif
</button>
```

## Schéma de couleurs recommandé

### Mode Clair (par défaut)
- **Fond principal** : `bg-gray-50`
- **Surfaces** : `bg-white`
- **Texte principal** : `text-repae-gray`
- **Texte secondaire** : `text-repae-gray-600`
- **Boutons primaires** : `bg-repae-blue`

### Mode Sombre
- **Fond principal** : `bg-repae-dark-bg`
- **Surfaces** : `bg-repae-dark-surface`
- **Texte principal** : `text-repae-dark-text-primary`
- **Texte secondaire** : `text-repae-dark-text-secondary`
- **Boutons primaires** : `bg-repae-blue-dark`

## Classes utilitaires personnalisées

### Classes auto-adaptatives
```html
<!-- S'adapte automatiquement selon la préférence système -->
<div class="repae-adaptive-bg">
  Arrière-plan adaptatif
</div>

<div class="repae-adaptive-surface">
  Surface adaptative
</div>

<p class="repae-adaptive-text">
  Texte adaptatif
</p>
```

### Classes spécifiques dark mode
```html
<!-- Utiliser uniquement en mode sombre -->
<div class="repae-dark-bg">
  <h1 class="repae-dark-text">Titre mode sombre</h1>
  <p class="repae-dark-text-secondary">Sous-titre</p>
  
  <button class="repae-btn-dark">
    Bouton spécial dark mode
  </button>
</div>
```

## Exemples pratiques

### Card adaptative complète
```html
<div class="bg-white dark:bg-repae-dark-surface rounded-lg shadow-repae p-6 border dark:border-repae-dark-border">
  <h3 class="font-montserrat text-lg font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-2">
    Titre de la card
  </h3>
  <p class="font-montserrat text-sm text-repae-gray-600 dark:text-repae-dark-text-secondary">
    Description adaptative au mode sombre
  </p>
  
  <button class="mt-4 bg-repae-blue dark:bg-repae-blue-dark hover:bg-repae-blue-600 dark:hover:bg-repae-blue-dark-hover text-white font-montserrat font-medium px-4 py-2 rounded-lg transition-colors">
    Action
  </button>
</div>
```

### Navigation adaptative
```html
<nav class="bg-white dark:bg-repae-dark-surface border-b dark:border-repae-dark-border">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo adaptatif -->
      <RepaeLogo variant="primary" size="medium" class="dark:hidden" />
      <RepaeLogo variant="white" size="medium" class="hidden dark:block" />
      
      <!-- Menu -->
      <div class="flex space-x-4">
        <a href="#" class="text-repae-gray dark:text-repae-dark-text-primary hover:text-repae-blue dark:hover:text-repae-blue-dark font-montserrat">
          Accueil
        </a>
        <a href="#" class="text-repae-gray dark:text-repae-dark-text-primary hover:text-repae-blue dark:hover:text-repae-blue-dark font-montserrat">
          À propos
        </a>
      </div>
    </div>
  </div>
</nav>
```

### Formulaire adaptatif
```html
<form class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae border dark:border-repae-dark-border">
  <div class="mb-4">
    <label class="block font-montserrat text-sm font-medium text-repae-gray dark:text-repae-dark-text-primary mb-2">
      Email
    </label>
    <input 
      type="email" 
      class="w-full px-3 py-2 border border-gray-300 dark:border-repae-dark-border rounded-lg bg-white dark:bg-repae-dark-surface text-repae-gray dark:text-repae-dark-text-primary focus:ring-2 focus:ring-repae-blue dark:focus:ring-repae-blue-dark"
      placeholder="votre@email.com"
    >
  </div>
  
  <button class="w-full bg-repae-blue dark:bg-repae-blue-dark hover:bg-repae-blue-600 dark:hover:bg-repae-blue-dark-hover text-white font-montserrat font-medium py-2 px-4 rounded-lg transition-colors">
    Valider
  </button>
</form>
```

### Gradient adaptatif
```html
<!-- Gradient qui s'adapte au mode sombre -->
<div class="bg-gradient-to-r from-repae-blue to-repae-gray dark:from-repae-blue-dark dark:to-repae-gray-600 text-white p-8 rounded-lg">
  <h2 class="font-montserrat text-2xl font-bold">Titre avec gradient adaptatif</h2>
</div>
```

## Logo et mode sombre

### Variantes de logo recommandées
```html
<!-- Mode clair : logo normal -->
<RepaeLogo variant="primary" size="large" class="dark:hidden" />

<!-- Mode sombre : logo adapté -->
<RepaeLogo variant="white" size="large" class="hidden dark:block" />

<!-- Alternative : icône seule pour espaces restreints -->
<RepaeLogo variant="icon" size="medium" />
```

## Variables CSS disponibles

Toutes ces variables sont utilisables dans vos CSS personnalisés :

```css
.mon-composant-dark {
  background-color: var(--color-repae-dark-bg);
  color: var(--color-repae-dark-text-primary);
  border-color: var(--color-repae-dark-border);
}

.mon-bouton-dark {
  background-color: var(--color-repae-blue-dark);
  transition: background-color 0.3s ease;
}

.mon-bouton-dark:hover {
  background-color: var(--color-repae-blue-dark-hover);
}
```

## Bonnes pratiques

### 1. Toujours tester les deux modes
- Vérifiez la lisibilité en mode clair ET sombre
- Testez tous les états interactifs (hover, active, focus)

### 2. Contraste suffisant
- Mode sombre : utilisez `repae-dark-text-primary` pour les textes importants
- Mode clair : `repae-gray` reste lisible sur fond blanc

### 3. Cohérence visuelle
- Gardez la hiérarchie visuelle dans les deux modes
- Les couleurs REPAE restent reconnaissables

### 4. Transition fluide
- Utilisez `transition-colors` pour des changements fluides
- Le toggle doit être accessible et visible

### 5. Logo approprié
- Mode sombre : utilisez les variantes "white" ou "BBL"
- Mode clair : variantes "primary" ou "BGR"

## Composant de démonstration

Voir `RepaeDarkModeDemo.vue` pour un exemple complet d'implémentation du mode sombre avec toutes les couleurs et composants REPAE.