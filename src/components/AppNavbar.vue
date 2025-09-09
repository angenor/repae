<script setup>
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useSimpleDarkMode'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { isDark, toggle } = useDarkMode()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="bg-white dark:bg-repae-gray-800 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center">
            <img 
              src="/image/logos_REAPE/ICONE/ICONE_REPAE_BGR.png" 
              alt="REPAE"
              class="h-10 w-10 mr-2"
            />
            <span class="text-2xl font-bold text-repae-blue-500 font-brand">REPAE</span>
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink 
            to="/" 
            class="text-repae-gray-700 dark:text-repae-gray-300 hover:text-repae-blue-500 dark:hover:text-repae-blue-400 font-brand transition-colors"
          >
            {{ $t('nav.home') }}
          </RouterLink>
          <a 
            href="#association" 
            class="text-repae-gray-700 dark:text-repae-gray-300 hover:text-repae-blue-500 dark:hover:text-repae-blue-400 font-brand transition-colors"
          >
            {{ $t('nav.association') }}
          </a>
          <a 
            href="#alumni" 
            class="text-repae-gray-700 dark:text-repae-gray-300 hover:text-repae-blue-500 dark:hover:text-repae-blue-400 font-brand transition-colors"
          >
            {{ $t('nav.alumni') }}
          </a>
          <a 
            href="#enterprises" 
            class="text-repae-gray-700 dark:text-repae-gray-300 hover:text-repae-blue-500 dark:hover:text-repae-blue-400 font-brand transition-colors"
          >
            {{ $t('nav.enterprises') }}
          </a>
          <a 
            href="#contact" 
            class="text-repae-gray-700 dark:text-repae-gray-300 hover:text-repae-blue-500 dark:hover:text-repae-blue-400 font-brand transition-colors"
          >
            {{ $t('nav.contact') }}
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <button 
            class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {{ $t('nav.memberSpace') }}
          </button>
          <LanguageSwitcher />
          <button 
            @click="toggle"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-repae-gray-700 transition-colors"
            :title="isDark ? $t('lightMode') : $t('darkMode')"
          >
            <font-awesome-icon 
              :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
              class="text-repae-gray-700 dark:text-repae-gray-300"
            />
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button 
            @click="toggleMobileMenu"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-repae-gray-700 transition-colors"
          >
            <font-awesome-icon 
              :icon="isMobileMenuOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'" 
              class="text-repae-gray-700 dark:text-repae-gray-300 text-xl"
            />
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white dark:bg-repae-gray-800 border-t border-gray-200 dark:border-repae-gray-700"
    >
      <div class="px-4 pt-2 pb-3 space-y-1">
        <RouterLink 
          to="/" 
          class="block px-3 py-2 rounded-md text-repae-gray-700 dark:text-repae-gray-300 hover:bg-gray-100 dark:hover:bg-repae-gray-700 font-brand"
        >
          {{ $t('nav.home') }}
        </RouterLink>
        <a 
          href="#association" 
          class="block px-3 py-2 rounded-md text-repae-gray-700 dark:text-repae-gray-300 hover:bg-gray-100 dark:hover:bg-repae-gray-700 font-brand"
        >
          {{ $t('nav.association') }}
        </a>
        <a 
          href="#alumni" 
          class="block px-3 py-2 rounded-md text-repae-gray-700 dark:text-repae-gray-300 hover:bg-gray-100 dark:hover:bg-repae-gray-700 font-brand"
        >
          {{ $t('nav.alumni') }}
        </a>
        <a 
          href="#enterprises" 
          class="block px-3 py-2 rounded-md text-repae-gray-700 dark:text-repae-gray-300 hover:bg-gray-100 dark:hover:bg-repae-gray-700 font-brand"
        >
          {{ $t('nav.enterprises') }}
        </a>
        <a 
          href="#contact" 
          class="block px-3 py-2 rounded-md text-repae-gray-700 dark:text-repae-gray-300 hover:bg-gray-100 dark:hover:bg-repae-gray-700 font-brand"
        >
          {{ $t('nav.contact') }}
        </a>
        <div class="pt-4 border-t border-gray-200 dark:border-repae-gray-700">
          <button 
            class="w-full bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {{ $t('nav.memberSpace') }}
          </button>
          <div class="flex items-center justify-between mt-4">
            <LanguageSwitcher />
            <button 
              @click="toggle"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-repae-gray-700 transition-colors"
              :title="isDark ? $t('lightMode') : $t('darkMode')"
            >
              <font-awesome-icon 
                :icon="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
                class="text-repae-gray-700 dark:text-repae-gray-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>