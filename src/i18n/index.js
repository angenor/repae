import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

const LOCALE_KEY = 'repae-locale'

function getInitialLocale() {
  // 1. Check saved preference
  const saved = localStorage.getItem(LOCALE_KEY)
  if (saved && ['en', 'fr'].includes(saved)) {
    return saved
  }
  
  // 2. Check browser language
  const browserLang = navigator.language.split('-')[0]
  if (['en', 'fr'].includes(browserLang)) {
    return browserLang
  }
  
  // 3. Default to English
  return 'en'
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  legacy: false, // Use Composition API mode
  messages: {
    en,
    fr
  }
})

// Save locale changes to localStorage
export function setLocale(locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(LOCALE_KEY, locale)
}

export default i18n