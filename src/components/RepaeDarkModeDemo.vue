<template>
  <div class="repae-dark-mode-demo">
    <!-- Header avec toggle dark mode -->
    <div class="bg-white dark:bg-repae-gray-800 p-6 rounded-lg shadow-lg mb-8 border border-gray-200 dark:border-repae-gray-600">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="font-brand text-2xl font-bold text-repae-gray-900 dark:text-white">
            {{ $t('darkMode.demo.title') }}
          </h1>
          <p class="font-brand text-repae-gray-600 dark:text-repae-gray-300 mt-2">
            {{ $t('darkMode.demo.subtitle') }}
          </p>
        </div>
        
        <button 
          @click="toggleDarkMode"
          class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors shadow-lg"
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
      <div class="bg-white dark:bg-repae-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-repae-gray-600">
        <h2 class="font-brand text-xl font-semibold text-repae-gray-900 dark:text-white mb-4">
          {{ $t('darkMode.demo.colors') }}
        </h2>
        
        <!-- Couleurs primaires -->
        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-blue-500 rounded-full shadow-sm"></div>
            <span class="font-brand text-sm text-repae-gray-700 dark:text-repae-gray-300">
              {{ $t('darkMode.demo.primaryBlue') }}
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-blue-400 rounded-full shadow-sm"></div>
            <span class="font-brand text-sm text-repae-gray-700 dark:text-repae-gray-300">
              {{ $t('darkMode.demo.darkBlue') }}
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-repae-gray-500 rounded-full shadow-sm"></div>
            <span class="font-brand text-sm text-repae-gray-700 dark:text-repae-gray-300">
              {{ $t('darkMode.demo.primaryGray') }}
            </span>
          </div>
        </div>
      </div>

      <!-- Section typographie -->
      <div class="bg-white dark:bg-repae-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-repae-gray-600">
        <h2 class="font-brand text-xl font-semibold text-repae-gray-900 dark:text-white mb-4">
          {{ $t('darkMode.demo.typography') }}
        </h2>
        
        <div class="space-y-3">
          <p class="font-brand text-lg font-bold text-repae-gray-900 dark:text-white">
            {{ $t('darkMode.demo.primaryText') }}
          </p>
          <p class="font-brand text-base text-repae-gray-600 dark:text-repae-gray-300">
            {{ $t('darkMode.demo.secondaryText') }}
          </p>
          <p class="font-brand text-sm text-repae-gray-500 dark:text-repae-gray-400">
            {{ $t('darkMode.demo.mutedText') }}
          </p>
        </div>
      </div>

      <!-- Section boutons -->
      <div class="bg-white dark:bg-repae-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-repae-gray-600">
        <h2 class="font-brand text-xl font-semibold text-repae-gray-900 dark:text-white mb-4">
          {{ $t('darkMode.demo.buttons') }}
        </h2>
        
        <div class="space-y-4">
          <!-- Bouton primaire adaptatif -->
          <button class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.adaptiveButton') }}
          </button>
          
          <!-- Bouton secondaire -->
          <button class="bg-repae-gray-500 hover:bg-repae-gray-600 dark:bg-repae-gray-600 dark:hover:bg-repae-gray-500 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.secondaryButton') }}
          </button>
          
          <!-- Bouton contour -->
          <button class="border-2 border-repae-blue-500 text-repae-blue-500 hover:bg-repae-blue-500 hover:text-white dark:border-repae-blue-400 dark:text-repae-blue-400 dark:hover:bg-repae-blue-400 dark:hover:text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors w-full">
            {{ $t('darkMode.demo.outlineButton') }}
          </button>
        </div>
      </div>

      <!-- Section surfaces -->
      <div class="bg-white dark:bg-repae-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-repae-gray-600">
        <h2 class="font-brand text-xl font-semibold text-repae-gray-900 dark:text-white mb-4">
          {{ $t('darkMode.demo.surfaces') }}
        </h2>
        
        <div class="space-y-4">
          <!-- Surface principale -->
          <div class="bg-gray-50 dark:bg-repae-gray-700 p-4 rounded border border-gray-200 dark:border-repae-gray-600">
            <p class="font-brand text-sm text-repae-gray-700 dark:text-white">
              {{ $t('darkMode.demo.mainSurface') }}
            </p>
          </div>
          
          <!-- Surface hover -->
          <div class="bg-gray-100 dark:bg-repae-gray-600 p-4 rounded border border-gray-200 dark:border-repae-gray-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-repae-gray-500 transition-colors">
            <p class="font-brand text-sm text-repae-gray-700 dark:text-white">
              {{ $t('darkMode.demo.hoverSurface') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section avec gradient adaptatif -->
    <div class="mt-8 bg-gradient-to-r from-repae-blue-500 to-repae-gray-500 dark:from-repae-blue-400 dark:to-repae-gray-400 text-white p-8 rounded-lg shadow-lg">
      <div class="text-center">
        <h2 class="font-brand text-2xl font-bold mb-2">{{ $t('darkMode.demo.gradientSection') }}</h2>
        <p class="font-brand opacity-90">{{ $t('darkMode.demo.gradientDesc') }}</p>
      </div>
    </div>

    <!-- Logo adaptatif -->
    <div class="mt-8 bg-white dark:bg-repae-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-repae-gray-600 text-center">
      <h2 class="font-brand text-xl font-semibold text-repae-gray-900 dark:text-white mb-6">
        {{ $t('darkMode.demo.logoSection') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p class="font-brand text-sm text-repae-gray-600 dark:text-repae-gray-300 mb-4">{{ $t('darkMode.demo.lightLogo') }}</p>
          <RepaeLogo variant="primary" size="medium" />
        </div>
        
        <div>
          <p class="font-brand text-sm text-repae-gray-600 dark:text-repae-gray-300 mb-4">{{ $t('darkMode.demo.darkLogo') }}</p>
          <RepaeLogo variant="white" size="medium" />
        </div>
        
        <div>
          <p class="font-brand text-sm text-repae-gray-600 dark:text-repae-gray-300 mb-4">{{ $t('darkMode.demo.iconOnly') }}</p>
          <RepaeLogo variant="icon" size="medium" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import RepaeLogo from './RepaeLogo.vue'
import { useDarkMode } from '@/composables/useSimpleDarkMode'

const { t } = useI18n()

const { isDark, toggle } = useDarkMode()
const toggleDarkMode = toggle
</script>

<style scoped>
.repae-dark-mode-demo {
  @apply font-brand p-6 min-h-screen bg-gray-50 dark:bg-repae-gray-900 transition-colors duration-300;
}
</style>