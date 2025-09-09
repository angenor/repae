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

        <!-- Formulaire - côté droit avec fond sombre REPAE -->
        <div class="bg-slate-700 dark:bg-slate-800 p-8 flex flex-col justify-center  max-w-md w-full relative">
          <div class="flex items-center justify-center mb-4 absolute -top-16 left-1/2 transform -translate-x-1/2">
            <!-- Logo REPAE simplifié -->
            <img class="w-32 h-32 rounded-full" src="/image/logos_REAPE/DECLINAISON/logo_BBL.png" alt="">
          </div>
          <!-- Logo et titre du formulaire -->
          <div class="text-center mb-8 mt-10">
            <h3 class="text-xl font-bold text-white font-brand">
              {{ $t('findAlumni.searchTitle') }}
            </h3>
            <p class="text-sm text-gray-300 font-brand mt-2">
              {{ $t('findAlumni.searchSubtitle') }}
            </p>
          </div>
          
          <!-- Formulaire avec icônes bleues -->
          <form @submit.prevent="handleSearch" class="space-y-4">
            <!-- Champ Nom -->
            <div class="relative">
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                <font-awesome-icon icon="fa-solid fa-user" class="text-repae-blue-500 text-lg" />
              </div>
              <input 
                v-model="formData.name"
                type="text"
                class="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-repae-gray-900 font-brand placeholder-repae-gray-400 border-0"
                :placeholder="$t('findAlumni.placeholders.name')"
              >
            </div>
            
            <!-- Champ Entreprise -->
            <div class="relative">
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                <font-awesome-icon icon="fa-solid fa-building" class="text-repae-blue-500 text-lg" />
              </div>
              <input 
                v-model="formData.company"
                type="text"
                class="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-repae-gray-900 font-brand placeholder-repae-gray-400 border-0"
                :placeholder="$t('findAlumni.placeholders.company')"
              >
            </div>
            
            <!-- Champ Email -->
            <div class="relative">
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                <font-awesome-icon icon="fa-solid fa-envelope" class="text-repae-blue-500 text-lg" />
              </div>
              <input 
                v-model="formData.email"
                type="email"
                class="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-repae-gray-900 font-brand placeholder-repae-gray-400 border-0"
                :placeholder="$t('findAlumni.placeholders.email')"
              >
            </div>
            
            <!-- Champ Promotion/Formation -->
            <div class="relative">
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-repae-blue-500 text-lg" />
              </div>
              <select 
                v-model="formData.promotion"
                class="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-repae-gray-900 font-brand border-0 appearance-none"
              >
                <option value="">{{ $t('findAlumni.placeholders.promotion') }}</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            
            <!-- Bouton de recherche -->
            <button 
              type="submit"
              class="w-full bg-repae-blue-500 hover:bg-repae-blue-600 text-white font-brand font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg mt-6"
            >
              {{ $t('findAlumni.searchButton') }}
            </button>
          </form>
        </div>
        
      </div>
    </div>
    
  </section>
</template>