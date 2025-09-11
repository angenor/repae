<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const socialLinks = ref([
  { icon: 'fa-brands fa-facebook', url: '#', label: 'Facebook' },
  { icon: 'fa-brands fa-twitter', url: '#', label: 'Twitter' },
  { icon: 'fa-brands fa-linkedin', url: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-instagram', url: '#', label: 'Instagram' }
])

const newsArticles = ref([
  {
    id: 1,
    image: '/image/background/evenement1.jpg',
    date: '03 Mars 2025',
    title: 'footer.newsSection.article1.title',
    description: 'footer.newsSection.article1.description'
  },
  {
    id: 2,
    image: '/image/background/evenement2.jpg',
    date: '03 Mars 2025',
    title: 'footer.newsSection.article2.title',
    description: 'footer.newsSection.article2.description'
  }
])
</script>

<template>
  <footer class="bg-repae-gray-900 dark:bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img 
              src="/image/logos_REAPE/ICONE/ICONE_REPAE_BBL.png" 
              alt="REPAE"
              class="h-10 w-10 mr-2"
            />
            <h3 class="text-2xl font-bold text-repae-blue-400 font-brand">REPAE</h3>
          </div>
          <p class="text-repae-gray-300 font-brand mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.label"
              :href="social.url"
              :title="social.label"
              class="text-repae-gray-400 hover:text-repae-blue-400 transition-colors"
            >
              <font-awesome-icon :icon="social.icon" class="text-xl" />
            </a>
          </div>
        </div>


        <div>
          <h4 class="text-lg font-bold font-brand mb-4">{{ $t('footer.contact') }}</h4>
          <ul class="space-y-2 text-repae-gray-300 font-brand">
            <li class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-envelope" class="mr-2 text-repae-blue-400" />
              contact@repae.org
            </li>
            <li class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-phone" class="mr-2 text-repae-blue-400" />
              +33 (0)2 40 00 00 00
            </li>
            <li class="flex items-start">
              <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2 mt-1 text-repae-blue-400" />
              <span>
                Polytech Nantes<br>
                Rue Christian Pauc<br>
                44300 Nantes
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section Actualités -->
      <div class="mt-16">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-white font-brand">{{ $t('footer.newsSection.title') }}</h3>
        </div>
        
        <!-- Carrousel d'actualités -->
        <div class="relative">
          <!-- Flèche gauche -->
          <button 
            class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-repae-gray-800 hover:bg-repae-gray-700 text-white p-3 rounded-full transition-colors"
            aria-label="Article précédent"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-xl" />
          </button>
          
          <!-- Flèche droite -->
          <button 
            class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-repae-gray-800 hover:bg-repae-gray-700 text-white p-3 rounded-full transition-colors"
            aria-label="Article suivant"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-xl" />
          </button>
          
          <!-- Conteneur des articles -->
          <div class="mx-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article 
              v-for="article in newsArticles" 
              :key="article.id"
              class="bg-repae-gray-800 dark:bg-repae-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <!-- Image de couverture -->
              <div class="relative h-48 overflow-hidden">
                <img 
                  :src="article.image" 
                  :alt="$t(article.title)"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Contenu de l'article -->
              <div class="p-6">
                <!-- Date de publication -->
                <p class="text-repae-gray-400 text-sm font-brand mb-2">
                  {{ $t('footer.newsSection.publishedOn') }} {{ article.date }}
                </p>
                
                <!-- Titre -->
                <h4 class="text-xl font-bold text-white font-brand mb-4 leading-tight">
                  {{ $t(article.title) }}
                </h4>
                
                <!-- Description -->
                <p class="text-repae-gray-300 font-brand mb-6 leading-relaxed">
                  {{ $t(article.description) }}
                </p>
                
                <!-- Bouton Lire plus -->
                <button class="bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium px-4 py-2 rounded-lg transition-colors">
                  {{ $t('footer.newsSection.readMore') }}
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="border-t border-repae-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-repae-gray-400 font-brand text-sm mb-4 md:mb-0">
            © {{ currentYear }} REPAE. {{ $t('footer.allRightsReserved') }}
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-repae-gray-400 hover:text-repae-blue-400 font-brand text-sm transition-colors">
              {{ $t('footer.privacy') }}
            </a>
            <a href="#" class="text-repae-gray-400 hover:text-repae-blue-400 font-brand text-sm transition-colors">
              {{ $t('footer.terms') }}
            </a>
            <a href="#" class="text-repae-gray-400 hover:text-repae-blue-400 font-brand text-sm transition-colors">
              {{ $t('footer.cookies') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>