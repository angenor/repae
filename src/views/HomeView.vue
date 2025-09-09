<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Header avec logo et toggle -->
    <header class="bg-white dark:bg-repae-gray-800 border-b dark:border-repae-gray-700 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo REPAE -->
          <div class="flex items-center">
            <!-- Logo mode clair -->
            <img 
              v-if="!isDark && !logoError"
              src="/image/logos_REAPE/LOGO/LOGO%20RePAE3.png" 
              alt="Logo REPAE - Réseau Professionnel des Alumni de l'ESATIC"
              class="object-contain h-auto w-44 min-w-[150px] max-h-12"
              @error="onImageError"
            />
            <!-- Logo mode sombre (version blanche) -->
            <img 
              v-else-if="isDark && !logoError"
              src="/image/logos_REAPE/DECLINAISON/logo_BBL.png" 
              alt="Logo REPAE - Réseau Professionnel des Alumni de l'ESATIC"
              class="object-contain h-auto w-44 min-w-[150px] max-h-12"
              @error="onImageError"
            />
            
            <!-- Fallback texte si logo ne charge pas -->
            <div v-if="logoError" class="text-2xl font-bold text-repae-blue font-brand">
              REPAE
            </div>
          </div>
          
          <!-- Toggle dark mode -->
          <button 
            @click="toggleDarkMode"
            class="bg-repae-blue hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-medium px-4 py-2 rounded-lg transition-colors font-brand"
          >
            <font-awesome-icon 
              :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
              class="mr-2" 
            />
            {{ isDark ? $t('home.lightMode') : $t('home.darkMode') }}
          </button>
        </div>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <!-- Section héro avec gradient REPAE -->
      <div class="text-center mb-16 ">
        <div class="bg-gradient-to-r from-repae-blue-500 to-repae-gray-500 dark:from-repae-blue-400 dark:to-repae-gray-400 text-white p-12 rounded-2xl mb-8 shadow-xl">
          <h1 class="font-brand font-bold text-5xl mb-4">
            {{ $t('home.title') }}
          </h1>
          <p class="font-brand text-xl opacity-90 mb-8">
            {{ $t('home.subtitle') }}
          </p>
          <button class="bg-white hover:bg-gray-100 text-repae-blue font-brand font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
            {{ $t('home.cta') }}
          </button>
        </div>
      </div>

      <!-- Grid de fonctionnalités avec couleurs REPAE -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
        <!-- Card Réseau -->
        <div class="bg-white dark:bg-repae-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-repae-blue dark:border-repae-blue-400 border border-gray-200 dark:border-repae-gray-600">
          <div class="flex items-center mb-4">
            <div class="bg-repae-blue dark:bg-repae-blue-400 text-white p-3 rounded-lg">
              <font-awesome-icon icon="fa-solid fa-users" class="text-xl" />
            </div>
            <h3 class="text-xl font-semibold ml-4 text-repae-gray dark:text-white font-brand">
              {{ $t('home.features.network.title') }}
            </h3>
          </div>
          <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand">
            {{ $t('home.features.network.description') }}
          </p>
          
          <!-- Debug info -->
          <div class="mt-4 text-xs text-repae-gray-400 dark:text-repae-gray-500">
            Mode: {{ isDark ? 'Dark' : 'Light' }}
          </div>
        </div>

        <!-- Card Professionnel -->
        <div class="bg-white dark:bg-repae-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-repae-gray-500 dark:border-repae-gray-400 border border-gray-200 dark:border-repae-gray-600">
          <div class="flex items-center mb-4">
            <div class="bg-repae-gray-500 dark:bg-repae-gray-400 text-white p-3 rounded-lg">
              <font-awesome-icon icon="fa-solid fa-briefcase" class="text-xl" />
            </div>
            <h3 class="text-xl font-semibold ml-4 text-repae-gray dark:text-white font-brand">
              {{ $t('home.features.professional.title') }}
            </h3>
          </div>
          <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand">
            {{ $t('home.features.professional.description') }}
          </p>
        </div>

        <!-- Card Alumni -->
        <div class="bg-white dark:bg-repae-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-repae-blue-300 dark:border-repae-blue-400 border  ">
          <div class="flex items-center mb-4">
            <div class="bg-repae-blue-300 text-repae-blue-900 p-3 rounded-lg">
              <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-xl" />
            </div>
            <h3 class="text-xl font-semibold ml-4 text-repae-gray dark:text-white font-brand">
              {{ $t('home.features.alumni.title') }}
            </h3>
          </div>
          <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand">
            {{ $t('home.features.alumni.description') }}
          </p>
        </div>
      </div>

      <!-- Section CTA -->
      <div class="bg-white dark:bg-repae-gray-800 rounded-2xl shadow-lg p-12 text-center border border-gray-200 dark:border-repae-gray-600">
        <h2 class="text-3xl font-bold mb-4 text-repae-gray dark:text-white font-brand">
          {{ $t('home.cta.title') }}
        </h2>
        <p class="text-lg mb-8 text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('home.cta.description') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-repae-blue hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg font-brand">
            {{ $t('home.cta.primary') }}
          </button>
          <button class="border-2 border-repae-blue dark:border-repae-blue-400 text-repae-blue dark:text-repae-blue-400 hover:bg-repae-blue hover:text-white dark:hover:bg-repae-blue-400 dark:hover:text-white font-medium px-8 py-3 rounded-lg transition-colors font-brand">
            {{ $t('home.cta.secondary') }}
          </button>
        </div>
      </div>

      <!-- Indicateur de mode -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center px-6 py-3 rounded-lg shadow-lg bg-white dark:bg-repae-gray-800 border border-gray-200 dark:border-repae-gray-600">
          <div class="flex items-center mr-4">
            <div class="w-3 h-3 rounded-full mr-2 bg-repae-blue dark:bg-repae-blue-400"></div>
            <span class="text-sm text-repae-gray-600 dark:text-repae-gray-300 font-brand">
              {{ $t('home.mode.current') }}: {{ isDark ? $t('home.mode.dark') : $t('home.mode.light') }}
            </span>
          </div>
          <div class="text-xs text-repae-gray-500 dark:text-repae-gray-400 font-brand">
            {{ $t('home.mode.brand') }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDarkMode } from '@/composables/useSimpleDarkMode'

useI18n()

const { isDark, toggle } = useDarkMode()
const logoError = ref(false)

const toggleDarkMode = toggle

const onImageError = () => {
  logoError.value = true
}
</script>