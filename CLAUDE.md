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
- **Dark Mode**: Implemented via `useSimpleDarkMode` composable with class-based Tailwind dark mode
- **Theme Persistence**: Dark mode preference saved to localStorage with key `repae-theme-simple`
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
- Dark mode implementation includes extensive console logging for debugging

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