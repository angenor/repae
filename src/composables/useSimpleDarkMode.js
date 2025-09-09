import { ref, computed } from 'vue'

const THEME_KEY = 'repae-theme-simple'

// État global partagé
const isDarkMode = ref(false)

// Initialisation immédiate
function init() {
  console.log('🎯 [SIMPLE] Initializing dark mode...')
  
  // Récupérer la préférence sauvegardée
  const saved = localStorage.getItem(THEME_KEY)
  
  if (saved !== null) {
    isDarkMode.value = saved === 'true'
    console.log('🎯 [SIMPLE] Loaded from localStorage:', isDarkMode.value)
  } else {
    // Utiliser la préférence système
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log('🎯 [SIMPLE] Using system preference:', isDarkMode.value)
  }
  
  // Appliquer immédiatement
  updateDOM()
}

// Mettre à jour le DOM
function updateDOM() {
  console.log('🎯 [SIMPLE] Updating DOM, isDarkMode:', isDarkMode.value)
  
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem(THEME_KEY, 'true')
    console.log('🎯 [SIMPLE] Added dark class')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem(THEME_KEY, 'false')
    console.log('🎯 [SIMPLE] Removed dark class')
  }
  
  console.log('🎯 [SIMPLE] HTML classes:', document.documentElement.className)
}

// Toggle simple
function toggle() {
  console.log('🎯 [SIMPLE] Toggle called, current:', isDarkMode.value)
  isDarkMode.value = !isDarkMode.value
  console.log('🎯 [SIMPLE] New value:', isDarkMode.value)
  updateDOM()
}

// Initialiser au chargement
if (typeof window !== 'undefined') {
  init()
}

// Export du composable
export function useSimpleDarkMode() {
  return {
    isDark: computed(() => isDarkMode.value),
    isDarkMode, // ref direct
    toggle,
    set: (value) => {
      isDarkMode.value = value
      updateDOM()
    }
  }
}