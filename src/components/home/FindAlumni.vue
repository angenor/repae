<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  company: '',
  location: '',
  promotion: ''
})

const handleSearch = () => {
  console.log('Search alumni:', formData.value)
}
</script>

<template>
  <section class="py-16 bg-white dark:bg-repae-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-blue-500 dark:text-white font-brand mb-4">
          {{ $t('findAlumni.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('findAlumni.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.7138671875000002%2C47.11499982620772%2C-1.4556884765625002%2C47.249406957888446&amp;layer=mapnik"
            class="w-full h-full"
            frameborder="0"
          ></iframe>
          <div class="absolute bottom-4 left-4 bg-white dark:bg-repae-gray-800 rounded-lg p-4 shadow-lg">
            <p class="text-sm font-brand text-repae-gray-600 dark:text-repae-gray-300">
              <font-awesome-icon icon="fa-solid fa-users" class="mr-2 text-repae-blue-500" />
              {{ $t('findAlumni.mapInfo') }}
            </p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-repae-blue-500 to-repae-blue-600 dark:from-repae-blue-400 dark:to-repae-blue-500 rounded-xl p-8 shadow-xl">
          <div class="flex items-center justify-center mb-6">
            <div class="bg-white rounded-full p-4">
              <font-awesome-icon icon="fa-solid fa-search" class="text-2xl text-repae-blue-500" />
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-white font-brand mb-6 text-center">
            {{ $t('findAlumni.searchTitle') }}
          </h3>
          
          <form @submit.prevent="handleSearch" class="space-y-4">
            <div>
              <label class="block text-white font-brand mb-2">
                <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
                {{ $t('findAlumni.fields.name') }}
              </label>
              <input 
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-repae-gray-700 text-repae-gray-900 dark:text-white font-brand placeholder-repae-gray-400"
                :placeholder="$t('findAlumni.placeholders.name')"
              >
            </div>
            
            <div>
              <label class="block text-white font-brand mb-2">
                <font-awesome-icon icon="fa-solid fa-building" class="mr-2" />
                {{ $t('findAlumni.fields.company') }}
              </label>
              <input 
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-repae-gray-700 text-repae-gray-900 dark:text-white font-brand placeholder-repae-gray-400"
                :placeholder="$t('findAlumni.placeholders.company')"
              >
            </div>
            
            <div>
              <label class="block text-white font-brand mb-2">
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2" />
                {{ $t('findAlumni.fields.location') }}
              </label>
              <input 
                v-model="formData.location"
                type="text"
                class="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-repae-gray-700 text-repae-gray-900 dark:text-white font-brand placeholder-repae-gray-400"
                :placeholder="$t('findAlumni.placeholders.location')"
              >
            </div>
            
            <div>
              <label class="block text-white font-brand mb-2">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="mr-2" />
                {{ $t('findAlumni.fields.promotion') }}
              </label>
              <select 
                v-model="formData.promotion"
                class="w-full px-4 py-3 rounded-lg bg-white/90 dark:bg-repae-gray-700 text-repae-gray-900 dark:text-white font-brand"
              >
                <option value="">{{ $t('findAlumni.placeholders.promotion') }}</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-white hover:bg-gray-100 text-repae-blue-500 font-brand font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              {{ $t('findAlumni.searchButton') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>