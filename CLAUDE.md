# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build on http://localhost:4173

### Testing
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npx playwright install` - Install browsers for first-time e2e testing
- `npm run test:e2e -- --project=chromium` - Run e2e tests on Chromium only
- `npm run test:e2e -- tests/example.spec.ts` - Run specific test file
- `npm run test:e2e -- --debug` - Run e2e tests in debug mode

## Architecture Overview

This is a Vue 3 application using the Composition API with the following stack:

### Core Technologies
- **Vue 3** with Composition API
- **Vite** for build tooling and development server
- **Vue Router** for client-side routing
- **Pinia** for state management
- **Vue-i18n v9** for internationalization (English/French)
- **Tailwind CSS** with dark mode support
- **Font Awesome** for icons (solid, regular, and brands collections)
- **Vitest** for unit testing
- **Playwright** for end-to-end testing

### Project Structure
- `src/main.js` - Application entry point, sets up Vue app with Pinia, router, and i18n
- `src/App.vue` - Root component with navigation, theme toggle, and language switcher
- `src/router/index.js` - Vue Router configuration with Home and About routes
- `src/stores/` - Pinia stores (counter.js example store)
- `src/views/` - Page-level components (HomeView.vue, AboutView.vue)
- `src/components/` - Reusable UI components including LanguageSwitcher and ThemeToggle
- `src/composables/` - Vue composables for shared logic (dark mode)
- `src/i18n/` - Internationalization configuration and locale files (en.json, fr.json)
- `src/assets/` - Static assets including Tailwind CSS
- `e2e/` - Playwright end-to-end tests
- `src/components/__tests__/` - Unit tests for components

### Key Features
- **Dark Mode**: Implemented via `useDarkMode` composable with standard Tailwind v4 dark mode
- **Theme Persistence**: Dark mode preference saved to localStorage with key `theme`
- **System Theme Detection**: Falls back to system preference when no saved preference exists
- **Route-level Code Splitting**: About page is lazy-loaded
- **Internationalization (i18n)**: Vue-i18n v9 with English/French translations, auto-detection of browser language, and localStorage persistence

### Configuration Files
- `vite.config.js` - Vite configuration with Vue plugin and @ alias for src/
- `vitest.config.js` - Unit test configuration with jsdom environment
- `playwright.config.js` - E2E test configuration for multiple browsers
- `tailwind.config.js` - Tailwind configuration with dark mode class strategy
- `postcss.config.js` - PostCSS configuration for Tailwind

### Testing Setup
- **Unit Tests**: Vitest with jsdom environment, excludes e2e directory
- **E2E Tests**: Playwright with Chromium, Firefox, and WebKit browsers
- **CI/CD Ready**: Different configurations for CI environment vs local development
- **Auto Server**: Playwright automatically starts dev/preview server before tests

### Development Notes
- Uses ES modules throughout
- Vite dev server runs on port 5173, preview on 4173
- Import alias `@` points to `src/` directory
- Custom REPAE colors configured via `@theme` directive in Tailwind v4

## Translation Requirements

**IMPORTANT**: When creating new components or widgets, ALL user-facing text MUST be translated using vue-i18n:

### Translation Guidelines
- Use `$t('key')` in templates for all user-visible text
- Use `t('key')` in script setup with `import { useI18n } from 'vue-i18n'`
- Add translation keys to both `src/i18n/locales/en.json` and `src/i18n/locales/fr.json`
- Organize translation keys hierarchically (e.g., `nav.home`, `buttons.save`, `messages.error`)
- Never hardcode user-facing text in components
- Include translations for tooltips, placeholders, error messages, and all interactive elements

### Translation Key Structure
```javascript
{
  "nav": { "home": "Home", "about": "About" },
  "buttons": { "save": "Save", "cancel": "Cancel" },
  "forms": { "email": "Email", "password": "Password" },
  "messages": { "success": "Success!", "error": "Error occurred" }
}
```

### Example Usage
```vue
<template>
  <button :title="$t('buttons.save')">{{ $t('buttons.save') }}</button>
  <input :placeholder="$t('forms.email')" />
</template>
```

## Icon Usage Guidelines

**IMPORTANT**: Font Awesome is configured and ready to use throughout the application for all icon needs.

### Font Awesome Integration
- Font Awesome is globally configured in `src/main.js` with all icon collections (solid, regular, brands)
- The `<font-awesome-icon>` component is registered globally and available in all templates
- Use Font Awesome icons instead of inline SVGs or other icon solutions for consistency

### Icon Usage Examples
```vue
<template>
  <!-- Solid icons -->
  <font-awesome-icon icon="fa-solid fa-heart" class="text-red-500" />
  <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500" />
  
  <!-- Regular icons -->
  <font-awesome-icon icon="fa-regular fa-thumbs-up" class="text-blue-500" />
  
  <!-- Brand icons -->
  <font-awesome-icon icon="fa-brands fa-vue" class="text-green-500" />
  
  <!-- With Tailwind classes for styling -->
  <font-awesome-icon 
    icon="fa-solid fa-home" 
    class="text-2xl hover:scale-110 transition-transform cursor-pointer"
  />
</template>
```

### Available Icon Collections
- **fa-solid**: Solid style icons (most common)
- **fa-regular**: Regular/outline style icons
- **fa-brands**: Brand logos and social media icons

## REPAE Brand Identity & Tailwind Configuration

**IMPORTANT**: This project uses a custom brand identity based on the REPAE brand guidelines (charte graphique v1.1).

### Brand Colors
- **Primary Blue**: `#1488bb` - Order, respect, uprightness. Serious and responsible network.
- **Secondary Gray**: `#717173` - Calm, tranquility, composed spirit. Professional stability.

### Typography
- **Primary Font**: **Montserrat** (all weights 100-900) - Balanced font bringing proximity and expertise
- **Usage**: All user-facing text should use Montserrat via `font-montserrat` or `font-brand` classes

### Custom Colors Configuration (Tailwind v4)

**IMPORTANT**: Custom colors are now configured using the `@theme` directive in `/src/assets/tailwind.css` following Tailwind v4 documentation:

```css
@theme {
  /* REPAE Blue - Couleur primaire #1488bb */
  --color-repae-blue-50: #f0f9ff;
  --color-repae-blue-100: #e0f2fe;
  --color-repae-blue-200: #bae6fd;
  --color-repae-blue-300: #7dd3fc;
  --color-repae-blue-400: #38bdf8;
  --color-repae-blue-500: #1488bb;
  --color-repae-blue-600: #0284c7;
  --color-repae-blue-700: #0369a1;
  --color-repae-blue-800: #075985;
  --color-repae-blue-900: #0c4a6e;

  /* REPAE Gray - Couleur secondaire #717173 */
  --color-repae-gray-50: #f9fafb;
  --color-repae-gray-100: #f3f4f6;
  --color-repae-gray-200: #e5e7eb;
  --color-repae-gray-300: #d1d5db;
  --color-repae-gray-400: #9ca3af;
  --color-repae-gray-500: #717173;
  --color-repae-gray-600: #4b5563;
  --color-repae-gray-700: #374151;
  --color-repae-gray-800: #1f2937;
  --color-repae-gray-900: #111827;

  /* Couleurs brand aliases */
  --color-repae-primary: #1488bb;
  --color-repae-secondary: #717173;
  --color-brand-blue: #1488bb;
  --color-brand-gray: #717173;
}
```

#### Available Color Classes
```css
/* Brand colors with full shade variations */
bg-repae-blue-{50-900}, text-repae-blue-{50-900}, border-repae-blue-{50-900}
bg-repae-gray-{50-900}, text-repae-gray-{50-900}, border-repae-gray-{50-900}

/* Brand aliases */
bg-repae-primary, text-repae-primary, border-repae-primary
bg-repae-secondary, text-repae-secondary, border-repae-secondary
bg-brand-blue, text-brand-blue, border-brand-blue
bg-brand-gray, text-brand-gray, border-brand-gray
```

#### Typography
```css
font-montserrat  /* Primary brand font */
font-brand       /* Alias for brand font */
```

#### Brand Elements
```css
shadow-repae, shadow-brand           /* Brand shadows */
shadow-repae-lg, shadow-repae-xl     /* Larger brand shadows */
repae-gradient, brand-gradient       /* CSS gradient classes */
p-logo-protection                    /* 30px padding (logo protection zone) */
```

#### Best Practices for REPAE Colors

**ALWAYS use specific color variations (50-900) instead of base names:**
```css
/* ✅ CORRECT - Use specific variations */
bg-repae-blue-500 hover:bg-repae-blue-600
text-repae-gray-900 dark:text-white
border-l-repae-blue-500 dark:border-l-repae-blue-400

/* ❌ INCORRECT - Don't use base names */
bg-repae-blue hover:bg-repae-blue-600
text-repae-gray dark:text-white
border-repae-blue dark:border-repae-blue-400
```

**Common REPAE Color Patterns:**
```css
/* Headers and titles */
text-repae-gray-900 dark:text-white

/* Body text */
text-repae-gray-600 dark:text-repae-gray-300

/* Muted/secondary text */
text-repae-gray-500 dark:text-repae-gray-400

/* Card backgrounds */
bg-white dark:bg-repae-gray-800

/* Page backgrounds */
bg-gray-50 dark:bg-repae-gray-900

/* Primary buttons */
bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300

/* Borders */
border-gray-200 dark:border-repae-gray-600
border-l-repae-blue-500 dark:border-l-repae-blue-400
```

### Logo Component
```vue
<RepaeLogo 
  variant="primary|secondary|white|icon" 
  size="small|medium|large|xlarge"
  :with-baseline="true|false"
  :with-protection="true|false" 
/>
```

**Logo Specifications** (per brand guidelines):
- Minimum web size: 150px width
- Minimum print size: 39.6875mm width
- Protection zone: 30px around logo
- Available in multiple variants (BGR, BBL, GRB, etc.)

### Brand Guidelines Compliance
- **NEVER** modify logo inclination, deform, reverse, change colors, add outlines, or enlarge icon disproportionately
- **ALWAYS** respect the 30px protection zone around logos
- **USE ONLY** the specified colors (#1488bb, #717173) and their generated variations
- **USE ONLY** Montserrat font family throughout the application

### Complete Example (Tailwind v4 + REPAE Colors)
```vue
<script setup>
import { useDarkMode } from '@/composables/useSimpleDarkMode'
import { useI18n } from 'vue-i18n'

const { isDark, toggle } = useDarkMode()
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-repae-gray-900">
    <!-- Header with brand gradient -->
    <header class="bg-gradient-to-r from-repae-blue-500 to-repae-gray-500 dark:from-repae-blue-400 dark:to-repae-gray-400 text-white p-8">
      <div class="flex justify-between items-center">
        <h1 class="font-brand text-4xl font-bold">{{ $t('brand.title') }}</h1>
        
        <!-- Dark mode toggle -->
        <button 
          @click="toggle"
          class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <font-awesome-icon :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="mr-2" />
          {{ isDark ? $t('lightMode') : $t('darkMode') }}
        </button>
      </div>
    </header>
    
    <!-- Main content -->
    <main class="max-w-7xl mx-auto p-8">
      <!-- Brand card with proper dark mode -->
      <div class="bg-white dark:bg-repae-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-l-repae-blue-500 border border-gray-200 dark:border-repae-gray-600">
        <h3 class="font-brand text-lg font-semibold text-repae-gray-900 dark:text-white mb-4">
          {{ $t('card.title') }}
        </h3>
        <p class="font-brand text-repae-gray-600 dark:text-repae-gray-300 mb-4">
          {{ $t('card.description') }}
        </p>
        
        <!-- Primary button -->
        <button class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-6 py-3 rounded-lg shadow-lg">
          {{ $t('buttons.primary') }}
        </button>
      </div>
    </main>
  </div>
</template>
```

### Dark Mode Implementation (Standard Tailwind Approach)

The application now uses standard Tailwind dark mode with proper `@theme` color definitions. Use the `useDarkMode()` composable from `/src/composables/useSimpleDarkMode.js`:

#### Correct Dark Mode Implementation
```vue
<script setup>
import { useDarkMode } from '@/composables/useSimpleDarkMode'

const { isDark, toggle } = useDarkMode()
const toggleDarkMode = toggle
</script>

<template>
  <!-- Use standard Tailwind dark: classes with REPAE colors -->
  <div class="bg-white dark:bg-repae-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-l-repae-blue-500 border border-gray-200 dark:border-repae-gray-600">
    <h3 class="text-xl font-semibold text-repae-gray-900 dark:text-white font-brand">
      {{ $t('title') }}
    </h3>
    
    <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand">
      {{ $t('description') }}
    </p>
    
    <!-- Button with proper dark mode colors -->
    <button 
      @click="toggleDarkMode"
      class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors"
    >
      <font-awesome-icon 
        :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
        class="mr-2" 
      />
      {{ isDark ? $t('home.lightMode') : $t('home.darkMode') }}
    </button>
  </div>
</template>
```

#### Standard Dark Mode Color Usage
```css
/* Backgrounds */
bg-white dark:bg-repae-gray-800
bg-gray-50 dark:bg-repae-gray-900

/* Text colors */
text-repae-gray-900 dark:text-white
text-repae-gray-600 dark:text-repae-gray-300
text-repae-gray-500 dark:text-repae-gray-400

/* Buttons */
bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300

/* Borders */
border-gray-200 dark:border-repae-gray-600
border-repae-blue-500 dark:border-repae-blue-400
```

#### Dark Mode Composable
The `useDarkMode()` composable handles:
- System preference detection
- LocalStorage persistence (`theme` key)
- Proper reactivity with Vue 3
- DOM class management (`dark` class on `<html>`)

**ALWAYS** use the standard Tailwind `dark:` prefixes with REPAE brand colors for consistent dark mode implementation.

## Quick Reference for REPAE Development

### Essential Commands
```bash
npm run dev        # Start development server (port varies)
npm run build      # Production build
```

### Color Usage Checklist
- ✅ Use `bg-repae-blue-500` instead of `bg-repae-blue`
- ✅ Use `text-repae-gray-900 dark:text-white` for titles
- ✅ Use `text-repae-gray-600 dark:text-repae-gray-300` for body text
- ✅ Use `border-l-repae-blue-500` for left borders (avoids CSS conflicts)
- ✅ Use `font-brand` for all text (Montserrat font)

### Dark Mode Setup
```vue
<script setup>
import { useDarkMode } from '@/composables/useSimpleDarkMode'
const { isDark, toggle } = useDarkMode()
</script>
```

### Translation Setup
```vue
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <h1>{{ $t('page.title') }}</h1>
</template>
```

### File Locations
- **Custom colors**: `/src/assets/tailwind.css` (with `@theme` directive)
- **Dark mode composable**: `/src/composables/useSimpleDarkMode.js`
- **Translations**: `/src/i18n/locales/en.json` and `/fr.json`
- **Components**: `/src/components/`
- **Views**: `/src/views/`