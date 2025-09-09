<script setup>
import { ref } from 'vue'

const jobOffers = ref([
  {
    id: 1,
    title: 'jobOffers.job1.title',
    company: 'Tech Logic',
    location: 'Nantes, France',
    type: 'jobOffers.types.cdi',
    level: 'jobOffers.levels.junior',
    logo: 'https://via.placeholder.com/100',
    postedDate: '2024-01-15',
    description: 'jobOffers.job1.description'
  },
  {
    id: 2,
    title: 'jobOffers.job2.title',
    company: 'Tech Logic',
    location: 'Paris, France',
    type: 'jobOffers.types.cdi',
    level: 'jobOffers.levels.senior',
    logo: 'https://via.placeholder.com/100',
    postedDate: '2024-01-14',
    description: 'jobOffers.job2.description'
  },
  {
    id: 3,
    title: 'jobOffers.job3.title',
    company: 'Tech Logic',
    location: 'Lyon, France',
    type: 'jobOffers.types.alternance',
    level: 'jobOffers.levels.junior',
    logo: 'https://via.placeholder.com/100',
    postedDate: '2024-01-13',
    description: 'jobOffers.job3.description'
  }
])
</script>

<template>
  <section class="py-16 bg-repae-blue-500 dark:bg-repae-blue-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white font-brand mb-4">
          {{ $t('jobOffers.title') }}
        </h2>
        <p class="text-lg text-blue-100 font-brand">
          {{ $t('jobOffers.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div 
          v-for="job in jobOffers" 
          :key="job.id"
          class="bg-white dark:bg-repae-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="bg-repae-blue-100 dark:bg-repae-blue-900 p-3 rounded-lg">
                <span class="text-2xl font-bold text-repae-blue-500 dark:text-repae-blue-400 font-brand">
                  TECH LOGIC
                </span>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-repae-gray-900 dark:text-white font-brand mb-2">
              {{ $t(job.title) }}
            </h3>
            
            <div class="space-y-2 mb-4">
              <p class="text-sm text-repae-gray-600 dark:text-repae-gray-300 font-brand flex items-center">
                <font-awesome-icon icon="fa-solid fa-building" class="mr-2 text-repae-blue-500" />
                {{ job.company }}
              </p>
              <p class="text-sm text-repae-gray-600 dark:text-repae-gray-300 font-brand flex items-center">
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2 text-repae-blue-500" />
                {{ job.location }}
              </p>
              <p class="text-sm text-repae-gray-600 dark:text-repae-gray-300 font-brand flex items-center">
                <font-awesome-icon icon="fa-solid fa-briefcase" class="mr-2 text-repae-blue-500" />
                {{ $t(job.type) }} - {{ $t(job.level) }}
              </p>
            </div>
            
            <p class="text-sm text-repae-gray-500 dark:text-repae-gray-400 font-brand mb-4">
              {{ $t(job.description) }}
            </p>
            
            <button class="w-full bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium py-2 rounded-lg transition-colors">
              {{ $t('jobOffers.applyButton') }}
            </button>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button class="bg-white hover:bg-gray-100 text-repae-blue-500 font-brand font-bold px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105">
          {{ $t('jobOffers.viewAllButton') }}
        </button>
      </div>
    </div>
  </section>
</template>