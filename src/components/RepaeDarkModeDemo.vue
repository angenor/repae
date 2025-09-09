<template>
  <div class="repae-dark-mode-demo">
    <!-- Header avec toggle dark mode -->
    <div class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae mb-8 border dark:border-repae-dark-border">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="font-montserrat text-2xl font-bold text-repae-gray dark:text-repae-dark-text-primary">
            {{ $t('darkMode.demo.title') }}
          </h1>
          <p class="font-montserrat text-repae-gray-600 dark:text-repae-dark-text-secondary mt-2">
            {{ $t('darkMode.demo.subtitle') }}
          </p>
        </div>
        
        <button 
          @click="toggleDarkMode"
          class="bg-repae-blue dark:bg-repae-blue-dark hover:bg-repae-blue-600 dark:hover:bg-repae-blue-dark-hover text-white font-montserrat font-medium px-4 py-2 rounded-lg transition-colors shadow-repae"
        >
          <font-awesome-icon 
            :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
            class="mr-2" 
          />
          {{ isDark ? $t('darkMode.demo.lightMode') : $t('darkMode.demo.darkMode') }}
        </button>
      </div>
    </div>

    <!-- Grid de démonstration -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <!-- Section couleurs -->
      <div class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae border dark:border-repae-dark-border">
        <h2 class="font-montserrat text-xl font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-4">
          {{ $t('darkMode.demo.colors') }}
        </h2>
        
        <!-- Couleurs primaires -->
        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-blue rounded-full shadow-sm"></div>
            <span class="font-montserrat text-sm text-repae-gray-700 dark:text-repae-dark-text-secondary">
              {{ $t('darkMode.demo.primaryBlue') }}
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-blue-dark rounded-full shadow-sm"></div>
            <span class="font-montserrat text-sm text-repae-gray-700 dark:text-repae-dark-text-secondary">
              {{ $t('darkMode.demo.darkBlue') }}
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-gray rounded-full shadow-sm"></div>
            <span class="font-montserrat text-sm text-repae-gray-700 dark:text-repae-dark-text-secondary">
              {{ $t('darkMode.demo.primaryGray') }}
            </span>
          </div>
        </div>
      </div>

      <!-- Section typographie -->
      <div class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae border dark:border-repae-dark-border">
        <h2 class="font-montserrat text-xl font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-4">
          {{ $t('darkMode.demo.typography') }}
        </h2>
        
        <div class="space-y-3">
          <p class="font-montserrat text-lg font-bold text-repae-gray dark:text-repae-dark-text-primary">
            {{ $t('darkMode.demo.primaryText') }}
          </p>
          <p class="font-montserrat text-base text-repae-gray-600 dark:text-repae-dark-text-secondary">
            {{ $t('darkMode.demo.secondaryText') }}
          </p>
          <p class="font-montserrat text-sm text-repae-gray-500 dark:text-repae-dark-text-muted">
            {{ $t('darkMode.demo.mutedText') }}
          </p>
        </div>
      </div>

      <!-- Section boutons -->
      <div class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae border dark:border-repae-dark-border">
        <h2 class="font-montserrat text-xl font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-4">
          {{ $t('darkMode.demo.buttons') }}
        </h2>
        
        <div class="space-y-4">
          <!-- Bouton primaire adaptatif -->
          <button class="bg-repae-blue dark:bg-repae-blue-dark hover:bg-repae-blue-600 dark:hover:bg-repae-blue-dark-hover text-white font-montserrat font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.adaptiveButton') }}
          </button>
          
          <!-- Bouton secondaire -->
          <button class="bg-repae-gray dark:bg-repae-gray-600 hover:bg-repae-gray-600 dark:hover:bg-repae-gray-500 text-white font-montserrat font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.secondaryButton') }}
          </button>
          
          <!-- Bouton contour -->
          <button class="border-2 border-repae-blue dark:border-repae-blue-dark text-repae-blue dark:text-repae-blue-dark hover:bg-repae-blue dark:hover:bg-repae-blue-dark hover:text-white font-montserrat font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.outlineButton') }}
          </button>
        </div>
      </div>

      <!-- Section surfaces -->
      <div class="bg-white dark:bg-repae-dark-surface p-6 rounded-lg shadow-repae border dark:border-repae-dark-border">
        <h2 class="font-montserrat text-xl font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-4">
          {{ $t('darkMode.demo.surfaces') }}
        </h2>
        
        <div class="space-y-4">
          <!-- Surface principale -->
          <div class="bg-gray-50 dark:bg-repae-dark-surface p-4 rounded border dark:border-repae-dark-border">
            <p class="font-montserrat text-sm text-repae-gray-700 dark:text-repae-dark-text-primary">
              {{ $t('darkMode.demo.mainSurface') }}
            </p>
          </div>
          
          <!-- Surface hover -->
          <div class="bg-gray-100 dark:bg-repae-dark-surface-hover p-4 rounded border dark:border-repae-dark-border cursor-pointer hover:bg-gray-200 dark:hover:bg-repae-dark-surface transition-colors">
            <p class="font-montserrat text-sm text-repae-gray-700 dark:text-repae-dark-text-primary">
              {{ $t('darkMode.demo.hoverSurface') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section avec gradient adaptatif -->
    <div class="mt-8 bg-gradient-to-r from-repae-blue to-repae-gray dark:from-repae-blue-dark dark:to-repae-gray-600 text-white p-8 rounded-lg shadow-repae">
      <div class="text-center">
        <h2 class="font-montserrat text-2xl font-bold mb-2">{{ $t('darkMode.demo.gradientSection') }}</h2>
        <p class="font-montserrat opacity-90">{{ $t('darkMode.demo.gradientDesc') }}</p>
      </div>
    </div>

    <!-- Logo adaptatif -->
    <div class="mt-8 bg-white dark:bg-repae-dark-surface p-8 rounded-lg shadow-repae border dark:border-repae-dark-border text-center">
      <h2 class="font-montserrat text-xl font-semibold text-repae-gray dark:text-repae-dark-text-primary mb-6">
        {{ $t('darkMode.demo.logoSection') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p class="font-montserrat text-sm text-repae-gray-600 dark:text-repae-dark-text-secondary mb-4">{{ $t('darkMode.demo.lightLogo') }}</p>
          <RepaeLogo variant="primary" size="medium" />
        </div>
        
        <div>
          <p class="font-montserrat text-sm text-repae-gray-600 dark:text-repae-dark-text-secondary mb-4">{{ $t('darkMode.demo.darkLogo') }}</p>
          <RepaeLogo variant="white" size="medium" />
        </div>
        
        <div>
          <p class="font-montserrat text-sm text-repae-gray-600 dark:text-repae-dark-text-secondary mb-4">{{ $t('darkMode.demo.iconOnly') }}</p>
          <RepaeLogo variant="icon" size="medium" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import RepaeLogo from './RepaeLogo.vue'

const { t } = useI18n()

// Utilise le composable dark mode existant
const isDark = computed(() => {
  return document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
  
  // Sauvegarde la préférence
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  localStorage.setItem('repae-theme-simple', theme)
}
</script>

<style scoped>
.repae-dark-mode-demo {
  @apply font-montserrat p-6 min-h-screen bg-gray-50 dark:bg-repae-dark-bg transition-colors duration-300;
}
</style>