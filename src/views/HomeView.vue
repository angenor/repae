<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Header avec logo et toggle -->
    <header class="bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo REPAE -->
          <div class="flex items-center">
            <!-- Logo mode clair -->
            <img 
              v-if="!isDark && !logoError"
              src="/image/logos_REAPE/LOGO/LOGO%20RePAE3.png" 
              alt="Logo REPAE - Réseau Professionnel des Alumni de l'ESATIC"
              class="object-contain"
              style="height: auto; width: 180px; min-width: 150px; max-height: 50px;"
              @error="onImageError"
            />
            <!-- Logo mode sombre (version blanche) -->
            <img 
              v-else-if="isDark && !logoError"
              src="/image/logos_REAPE/DECLINAISON/logo_BBL.png" 
              alt="Logo REPAE - Réseau Professionnel des Alumni de l'ESATIC"
              class="object-contain"
              style="height: auto; width: 180px; min-width: 150px; max-height: 50px;"
              @error="onImageError"
            />
            
            <!-- Fallback texte si logo ne charge pas -->
            <div 
              v-if="logoError" 
              class="text-2xl font-bold"
              :style="{ 
                color: '#1488bb',
                fontFamily: 'Montserrat, sans-serif'
              }"
            >
              REPAE
            </div>
          </div>
          
          <!-- Toggle dark mode - Style inline pour assurer la visibilité -->
          <button 
            @click="toggleDarkMode"
            class="text-white font-medium px-4 py-2 rounded-lg transition-colors"
            style="background-color: #1488bb;"
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
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Section héro avec gradient REPAE -->
      <div class="text-center mb-16">
        <div 
          class="text-white p-12 rounded-2xl mb-8 shadow-xl"
          :style="{ 
            background: `linear-gradient(135deg, ${isDark ? '#47a7c7' : '#1488bb'} 0%, ${isDark ? '#5a5a5c' : '#717173'} 100%)`
          }"
        >
          <h1 class="font-bold text-5xl mb-4" style="font-family: Montserrat, sans-serif;">
            {{ $t('home.title') }}
          </h1>
          <p class="text-xl opacity-90 mb-8" style="font-family: Montserrat, sans-serif;">
            {{ $t('home.subtitle') }}
          </p>
          <button 
            class="bg-white hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg"
            style="color: #1488bb; font-family: Montserrat, sans-serif;"
          >
            {{ $t('home.cta') }}
          </button>
        </div>
      </div>

      <!-- Grid de fonctionnalités avec couleurs REPAE -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Card Réseau -->
        <div 
          class="p-8 rounded-xl shadow-lg border-l-4 border"
          :style="{ 
            backgroundColor: isDark ? '#1a1f26' : '#ffffff',
            borderLeftColor: '#1488bb',
            borderColor: isDark ? '#2d3748' : '#e5e7eb',
            color: isDark ? '#f7fafc' : '#717173'
          }"
        >
          <div class="flex items-center mb-4">
            <div 
              class="text-white p-3 rounded-lg"
              :style="{ backgroundColor: isDark ? '#47a7c7' : '#1488bb' }"
            >
              <font-awesome-icon icon="fa-solid fa-users" class="text-xl" />
            </div>
            <h3 
              class="text-xl font-semibold ml-4"
              :style="{ 
                color: isDark ? '#f7fafc' : '#717173',
                fontFamily: 'Montserrat, sans-serif'
              }"
            >
              {{ $t('home.features.network.title') }}
            </h3>
          </div>
          <p 
            :style="{ 
              color: isDark ? '#cbd5e0' : '#5a5a5c',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
            {{ $t('home.features.network.description') }}
          </p>
          
          <!-- Debug info -->
          <div class="mt-4 text-xs" :style="{ color: isDark ? '#a0aec0' : '#9ca3af' }">
            Mode: {{ isDark ? 'Dark' : 'Light' }}
          </div>
        </div>

        <!-- Card Professionnel -->
        <div 
          class="p-8 rounded-xl shadow-lg border-l-4"
          :style="{ 
            backgroundColor: isDark ? '#1a1f26' : 'white',
            borderLeftColor: '#717173',
            borderColor: isDark ? '#2d3748' : '#e5e7eb'
          }"
        >
          <div class="flex items-center mb-4">
            <div 
              class="text-white p-3 rounded-lg"
              :style="{ backgroundColor: isDark ? '#5a5a5c' : '#717173' }"
            >
              <font-awesome-icon icon="fa-solid fa-briefcase" class="text-xl" />
            </div>
            <h3 
              class="text-xl font-semibold ml-4"
              :style="{ 
                color: isDark ? '#f7fafc' : '#717173',
                fontFamily: 'Montserrat, sans-serif'
              }"
            >
              {{ $t('home.features.professional.title') }}
            </h3>
          </div>
          <p 
            :style="{ 
              color: isDark ? '#cbd5e0' : '#5a5a5c',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
            {{ $t('home.features.professional.description') }}
          </p>
        </div>

        <!-- Card Alumni -->
        <div 
          class="p-8 rounded-xl shadow-lg border-l-4"
          :style="{ 
            backgroundColor: isDark ? '#1a1f26' : 'white',
            borderLeftColor: '#75bdd5',
            borderColor: isDark ? '#2d3748' : '#e5e7eb'
          }"
        >
          <div class="flex items-center mb-4">
            <div 
              class="p-3 rounded-lg"
              :style="{ 
                backgroundColor: '#75bdd5',
                color: '#0c5271'
              }"
            >
              <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-xl" />
            </div>
            <h3 
              class="text-xl font-semibold ml-4"
              :style="{ 
                color: isDark ? '#f7fafc' : '#717173',
                fontFamily: 'Montserrat, sans-serif'
              }"
            >
              {{ $t('home.features.alumni.title') }}
            </h3>
          </div>
          <p 
            :style="{ 
              color: isDark ? '#cbd5e0' : '#5a5a5c',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
            {{ $t('home.features.alumni.description') }}
          </p>
        </div>
      </div>

      <!-- Section CTA -->
      <div 
        class="rounded-2xl shadow-lg p-12 text-center"
        :style="{ 
          backgroundColor: isDark ? '#1a1f26' : 'white',
          borderColor: isDark ? '#2d3748' : '#e5e7eb'
        }"
      >
        <h2 
          class="text-3xl font-bold mb-4"
          :style="{ 
            color: isDark ? '#f7fafc' : '#717173',
            fontFamily: 'Montserrat, sans-serif'
          }"
        >
          {{ $t('home.cta.title') }}
        </h2>
        <p 
          class="text-lg mb-8"
          :style="{ 
            color: isDark ? '#cbd5e0' : '#5a5a5c',
            fontFamily: 'Montserrat, sans-serif'
          }"
        >
          {{ $t('home.cta.description') }}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            class="text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg"
            :style="{ 
              backgroundColor: isDark ? '#47a7c7' : '#1488bb',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
            {{ $t('home.cta.primary') }}
          </button>
          <button 
            class="border-2 font-medium px-8 py-3 rounded-lg transition-colors"
            :style="{ 
              borderColor: isDark ? '#47a7c7' : '#1488bb',
              color: isDark ? '#47a7c7' : '#1488bb',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
            {{ $t('home.cta.secondary') }}
          </button>
        </div>
      </div>

      <!-- Indicateur de mode -->
      <div class="mt-16 text-center">
        <div 
          class="inline-flex items-center px-6 py-3 rounded-lg shadow-lg"
          :style="{ 
            backgroundColor: isDark ? '#1a1f26' : 'white',
            borderColor: isDark ? '#2d3748' : '#e5e7eb'
          }"
        >
          <div class="flex items-center mr-4">
            <div 
              class="w-3 h-3 rounded-full mr-2"
              :style="{ backgroundColor: isDark ? '#47a7c7' : '#1488bb' }"
            ></div>
            <span 
              class="text-sm"
              :style="{ 
                color: isDark ? '#cbd5e0' : '#5a5a5c',
                fontFamily: 'Montserrat, sans-serif'
              }"
            >
              {{ $t('home.mode.current') }}: {{ isDark ? $t('home.mode.dark') : $t('home.mode.light') }}
            </span>
          </div>
          <div 
            class="text-xs"
            :style="{ 
              color: isDark ? '#a0aec0' : '#717173',
              fontFamily: 'Montserrat, sans-serif'
            }"
          >
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

useI18n() // Pour les traductions dans le template

// Gestion du dark mode avec ref réactive
const isDark = ref(false)
const logoError = ref(false)

// Vérification initiale du mode sombre
if (typeof document !== 'undefined') {
  isDark.value = document.documentElement.classList.contains('dark')
}

const toggleDarkMode = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark')
    isDark.value = document.documentElement.classList.contains('dark')
    
    // Sauvegarde la préférence
    const theme = isDark.value ? 'dark' : 'light'
    localStorage.setItem('repae-theme-simple', theme)
  }
}

const onImageError = () => {
  logoError.value = true
}
</script>