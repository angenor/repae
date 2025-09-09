import { ref, onMounted, watch } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  // Initialize dark mode on mount
  onMounted(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    
    // Apply initial theme
    applyTheme()
  })

  // Watch for theme changes and apply them
  watch(isDark, applyTheme)

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  function toggle() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggle
  }
}