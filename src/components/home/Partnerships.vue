<script setup>
import { ref } from 'vue'

const partners = ref([
  {
    id: 1,
    name: 'Polytech Nantes',
    type: 'partnerships.types.education',
    logo: 'POLYTECH',
    description: 'partnerships.partner1.description',
    website: 'https://polytech.univ-nantes.fr'
  },
  {
    id: 2,
    name: 'Partner Company',
    type: 'partnerships.types.enterprise',
    logo: 'PARTNER',
    description: 'partnerships.partner2.description',
    website: '#'
  },
  {
    id: 3,
    name: 'Réseau Polytech',
    type: 'partnerships.types.network',
    logo: 'RÉSEAU',
    description: 'partnerships.partner3.description',
    website: '#'
  }
])

const newsItems = ref([
  {
    id: 1,
    title: 'partnerships.news1.title',
    content: 'partnerships.news1.content',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400'
  },
  {
    id: 2,
    title: 'partnerships.news2.title',
    content: 'partnerships.news2.content',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400'
  }
])
</script>

<template>
  <section class="py-16 bg-white dark:bg-repae-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-gray-900 dark:text-white font-brand mb-4">
          {{ $t('partnerships.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('partnerships.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="partner in partners" 
          :key="partner.id"
          class="group bg-gray-50 dark:bg-repae-gray-700 rounded-xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div class="bg-white dark:bg-repae-gray-800 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
            <span class="text-2xl font-bold text-repae-blue-500 dark:text-repae-blue-400 font-brand">
              {{ partner.logo }}
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-repae-gray-900 dark:text-white font-brand mb-2">
            {{ partner.name }}
          </h3>
          
          <p class="text-sm text-repae-blue-500 dark:text-repae-blue-400 font-brand mb-4">
            {{ $t(partner.type) }}
          </p>
          
          <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand mb-6">
            {{ $t(partner.description) }}
          </p>
          
          <a 
            :href="partner.website"
            target="_blank"
            class="inline-flex items-center text-repae-blue-500 hover:text-repae-blue-600 dark:text-repae-blue-400 dark:hover:text-repae-blue-300 font-brand font-medium"
          >
            {{ $t('partnerships.visitWebsite') }}
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="ml-2" />
          </a>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-repae-gray-600 pt-12">
        <h3 class="text-2xl font-bold text-repae-gray-900 dark:text-white font-brand mb-8 text-center">
          {{ $t('partnerships.newsTitle') }}
        </h3>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="news in newsItems" 
            :key="news.id"
            class="bg-gradient-to-br from-repae-blue-500 to-repae-gray-500 dark:from-repae-blue-400 dark:to-repae-gray-400 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <div class="p-6 text-white">
              <div class="flex items-center mb-4">
                <font-awesome-icon icon="fa-solid fa-newspaper" class="text-2xl mr-3" />
                <span class="text-sm font-brand">
                  {{ new Date(news.date).toLocaleDateString('fr-FR') }}
                </span>
              </div>
              
              <h4 class="text-xl font-bold font-brand mb-3">
                {{ $t(news.title) }}
              </h4>
              
              <p class="font-brand text-blue-50 mb-4">
                {{ $t(news.content) }}
              </p>
              
              <button class="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors">
                {{ $t('partnerships.readMore') }} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>