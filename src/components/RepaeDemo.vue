<template>
  <div class="repae-demo-container">
    <!-- Header avec gradient REPAE -->
    <header class="bg-gradient-to-r from-repae-blue to-repae-gray text-white p-8 rounded-lg shadow-repae">
      <div class="text-center">
        <h1 class="font-montserrat text-4xl font-bold mb-2">{{ $t('demo.title') }}</h1>
        <p class="font-montserrat text-lg opacity-90">{{ $t('demo.subtitle') }}</p>
      </div>
    </header>

    <!-- Cards de démonstration -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <!-- Card couleur principale -->
      <div class="bg-white rounded-lg shadow-repae p-6 border-l-4 border-repae-blue">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-repae-blue rounded-full mr-3"></div>
          <h3 class="font-montserrat text-lg font-semibold text-repae-gray">{{ $t('demo.primaryColor') }}</h3>
        </div>
        <p class="font-montserrat text-sm text-repae-gray-600">
          {{ $t('demo.primaryColorDesc') }}
        </p>
        <div class="mt-4 font-mono text-xs bg-gray-100 p-2 rounded">
          #1488bb
        </div>
      </div>

      <!-- Card couleur secondaire -->
      <div class="bg-white rounded-lg shadow-repae p-6 border-l-4 border-repae-gray">
        <div class="flex items-center mb-4">
          <div class="w-8 h-8 bg-repae-gray rounded-full mr-3"></div>
          <h3 class="font-montserrat text-lg font-semibold text-repae-gray">{{ $t('demo.secondaryColor') }}</h3>
        </div>
        <p class="font-montserrat text-sm text-repae-gray-600">
          {{ $t('demo.secondaryColorDesc') }}
        </p>
        <div class="mt-4 font-mono text-xs bg-gray-100 p-2 rounded">
          #717173
        </div>
      </div>

      <!-- Card typographie -->
      <div class="bg-white rounded-lg shadow-repae p-6 border-l-4 border-repae-blue-300">
        <div class="flex items-center mb-4">
          <font-awesome-icon 
            icon="fa-solid fa-font" 
            class="text-repae-blue text-2xl mr-3" 
          />
          <h3 class="font-montserrat text-lg font-semibold text-repae-gray">{{ $t('demo.typography') }}</h3>
        </div>
        <p class="font-montserrat text-sm text-repae-gray-600 mb-2">
          {{ $t('demo.typographyDesc') }}
        </p>
        <div class="font-montserrat">
          <div class="text-xs">Montserrat 400</div>
          <div class="text-sm font-medium">Montserrat 500</div>
          <div class="text-base font-semibold">Montserrat 600</div>
          <div class="text-lg font-bold">Montserrat 700</div>
        </div>
      </div>
    </div>

    <!-- Boutons de démonstration -->
    <div class="mt-8 space-y-4">
      <h2 class="font-montserrat text-2xl font-semibold text-repae-gray">{{ $t('demo.buttons') }}</h2>
      <div class="flex flex-wrap gap-4">
        <button class="bg-repae-blue hover:bg-repae-blue-600 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors shadow-repae">
          {{ $t('demo.primaryButton') }}
        </button>
        <button class="bg-repae-gray hover:bg-repae-gray-600 text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors shadow-repae">
          {{ $t('demo.secondaryButton') }}
        </button>
        <button class="border-2 border-repae-blue text-repae-blue hover:bg-repae-blue hover:text-white font-montserrat font-medium px-6 py-3 rounded-lg transition-colors">
          {{ $t('demo.outlineButton') }}
        </button>
      </div>
    </div>

    <!-- Palette de couleurs complète -->
    <div class="mt-8">
      <h2 class="font-montserrat text-2xl font-semibold text-repae-gray mb-6">{{ $t('demo.colorPalette') }}</h2>
      
      <!-- Palette Bleu REPAE -->
      <div class="mb-6">
        <h3 class="font-montserrat text-lg font-medium text-repae-gray mb-3">{{ $t('demo.blueShades') }}</h3>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-2">
          <div v-for="shade in blueShades" :key="shade.name" class="text-center">
            <div 
              :class="`bg-repae-blue-${shade.value} h-16 w-full rounded-lg shadow-sm`"
            ></div>
            <div class="font-montserrat text-xs mt-1">{{ shade.value }}</div>
          </div>
        </div>
      </div>

      <!-- Palette Gris REPAE -->
      <div>
        <h3 class="font-montserrat text-lg font-medium text-repae-gray mb-3">{{ $t('demo.grayShades') }}</h3>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-2">
          <div v-for="shade in grayShades" :key="shade.name" class="text-center">
            <div 
              :class="`bg-repae-gray-${shade.value} h-16 w-full rounded-lg shadow-sm`"
            ></div>
            <div class="font-montserrat text-xs mt-1">{{ shade.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Définition des nuances de couleurs
const blueShades = [
  { name: '50', value: '50' },
  { name: '100', value: '100' },
  { name: '200', value: '200' },
  { name: '300', value: '300' },
  { name: '400', value: '400' },
  { name: '500', value: '500' },
  { name: '600', value: '600' },
  { name: '700', value: '700' },
  { name: '800', value: '800' },
  { name: '900', value: '900' }
]

const grayShades = [
  { name: '50', value: '50' },
  { name: '100', value: '100' },
  { name: '200', value: '200' },
  { name: '300', value: '300' },
  { name: '400', value: '400' },
  { name: '500', value: '500' },
  { name: '600', value: '600' },
  { name: '700', value: '700' },
  { name: '800', value: '800' },
  { name: '900', value: '900' }
]
</script>

<style scoped>
.repae-demo-container {
  @apply font-montserrat p-6 bg-gray-50 min-h-screen;
}
</style>