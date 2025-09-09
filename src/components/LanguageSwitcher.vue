<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <button 
    @click="toggleLanguage"
    class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-repae-gray-700 transition-colors"
    :title="locale === 'fr' ? 'Switch to English' : 'Passer en français'"
  >
    <font-awesome-icon icon="fa-solid fa-globe" class="mr-2 text-repae-gray-700 dark:text-repae-gray-300" />
    <span class="font-brand font-medium text-repae-gray-700 dark:text-repae-gray-300">
      {{ locale === 'fr' ? 'FR' : 'EN' }}
    </span>
  </button>
</template>