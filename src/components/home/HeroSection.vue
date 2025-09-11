<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '+150', label: 'hero.stats.members' },
  { value: '87%', label: 'hero.stats.insertionRate' },
  { value: '13', label: 'hero.stats.promotions' },
  { value: '+5', label: 'hero.stats.partnerships' }
])
</script>

<template>
  <section class="relative min-h-[600px] bg-gradient-to-br from-repae-gray-800 to-repae-gray-900 dark:from-repae-gray-900 dark:to-black">
    <div 
      class="absolute inset-0 bg-cover bg-center opacity-30"
      :style="{ backgroundImage: 'url(/image/background/background-image-hero-section.jpg)' }"
    ></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class=" w-6/12 sm:ml-auto text-center sm:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-brand mb-6">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 font-brand mb-8 max-w-3xl mx-auto">
          {{ $t('hero.subtitle') }}
        </p>
        
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white p-5 relative -bottom-42">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          :class="[
            'rounded-lg p-6 transform hover:scale-105 transition-all',
            stat.label === 'hero.stats.insertionRate' 
              ? 'bg-repae-gray-500 dark:bg-repae-gray-600' 
              : 'bg-repae-blue-500 dark:bg-repae-blue-600'
          ]"
        >
          <div class="text-3xl md:text-4xl font-bold text-white font-brand mb-2">
            {{ stat.value }}
          </div>
          <div :class="[
            'text-sm font-brand',
            stat.label === 'hero.stats.insertionRate' 
              ? 'text-gray-200' 
              : 'text-blue-100'
          ]">
            {{ $t(stat.label) }}
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>