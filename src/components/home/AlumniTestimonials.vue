<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const testimonials = ref([
  {
    id: 1,
    name: 'Jean DUPONT',
    role: 'testimonials.role1',
    company: 'Tech Solutions',
    image: 'https://i.pravatar.cc/150?img=1',
    content: 'testimonials.content1',
    rating: 5
  },
  {
    id: 2,
    name: 'Marie MARTIN',
    role: 'testimonials.role2',
    company: 'Innovation Corp',
    image: 'https://i.pravatar.cc/150?img=2',
    content: 'testimonials.content2',
    rating: 5
  },
  {
    id: 3,
    name: 'Pierre BERNARD',
    role: 'testimonials.role3',
    company: 'DataTech Industries',
    image: 'https://i.pravatar.cc/150?img=3',
    content: 'testimonials.content3',
    rating: 5
  },
  {
    id: 4,
    name: 'Sophie LEROY',
    role: 'testimonials.role4',
    company: 'Green Energy Solutions',
    image: 'https://i.pravatar.cc/150?img=4',
    content: 'testimonials.content4',
    rating: 5
  },
  {
    id: 5,
    name: 'Thomas PETIT',
    role: 'testimonials.role5',
    company: 'Aerospace Dynamics',
    image: 'https://i.pravatar.cc/150?img=5',
    content: 'testimonials.content5',
    rating: 5
  },
  {
    id: 6,
    name: 'Camille ROBERT',
    role: 'testimonials.role6',
    company: 'Smart Systems SA',
    image: 'https://i.pravatar.cc/150?img=6',
    content: 'testimonials.content6',
    rating: 5
  },
  {
    id: 7,
    name: 'Nicolas RICHARD',
    role: 'testimonials.role7',
    company: 'Robotics Lab',
    image: 'https://i.pravatar.cc/150?img=7',
    content: 'testimonials.content7',
    rating: 5
  },
])

const currentIndex = ref(0)
const isPaused = ref(false)
let autoScrollInterval = null

// Nombre de témoignages par vue (responsive)
const testimonialsPerView = computed(() => {
  if (typeof window === 'undefined') return 3
  const width = window.innerWidth
  if (width >= 1024) return 3 // Desktop: 3 témoignages
  if (width >= 768) return 2   // Tablet: 2 témoignages
  return 1                     // Mobile: 1 témoignage
})

// Nombre total de "pages" de témoignages
const totalPages = computed(() => {
  return Math.ceil(testimonials.value.length / testimonialsPerView.value)
})

// Témoignages visibles pour la page actuelle
const visibleTestimonials = computed(() => {
  const start = currentIndex.value * testimonialsPerView.value
  return testimonials.value.slice(start, start + testimonialsPerView.value)
})

// Fonction pour obtenir les témoignages d'une page spécifique
const getTestimonialsForPage = (pageIndex) => {
  const start = pageIndex * testimonialsPerView.value
  return testimonials.value.slice(start, start + testimonialsPerView.value)
}

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (!isPaused.value) {
      nextTestimonial()
    }
  }, 5000) // Change testimonials every 5 seconds
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
}

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : totalPages.value - 1
}

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % totalPages.value
}

const goToTestimonial = (index) => {
  currentIndex.value = index
}

const handleMouseEnter = () => {
  isPaused.value = true
}

const handleMouseLeave = () => {
  isPaused.value = false
}

onMounted(() => {
  startAutoScroll()
  
  // Réinitialiser lors du redimensionnement
  const handleResize = () => {
    currentIndex.value = 0
  }
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section class="pb-16 pt-32 bg-gray-50 dark:bg-repae-gray-900">
    <div class="mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-blue-500 dark:text-white font-brand mb-4">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="relative overflow-hidden" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <!-- Slider avec groupes de témoignages -->
        <div 
          class="flex transition-transform duration-700 ease-in-out" 
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Chaque "slide" contient un groupe de témoignages -->
          <div 
            v-for="pageIndex in totalPages" 
            :key="pageIndex"
            class="w-full flex-shrink-0 px-4"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="testimonial in getTestimonialsForPage(pageIndex - 1)" 
                :key="testimonial.id"
                class="transform transition-all duration-300 hover:scale-105"
              >
                <div class="bg-white dark:bg-repae-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-l-repae-blue-500 h-full flex flex-col">
                  <div class="flex items-start mb-4">
                    <img 
                      :src="testimonial.image" 
                      :alt="testimonial.name"
                      class="w-14 h-14 rounded-full mr-4 flex-shrink-0"
                    >
                    <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-repae-gray-900 dark:text-white font-brand text-sm">
                        {{ testimonial.name }}
                      </h3>
                      <p class="text-xs text-repae-gray-600 dark:text-repae-gray-400 font-brand truncate">
                        {{ $t(testimonial.role) }}
                      </p>
                      <p class="text-xs text-repae-gray-500 dark:text-repae-gray-500 font-brand truncate">
                        {{ testimonial.company }}
                      </p>
                      <div class="flex items-center mt-1">
                        <font-awesome-icon 
                          v-for="star in 5" 
                          :key="star"
                          icon="fa-solid fa-star" 
                          class="text-yellow-500 text-xs mr-0.5" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand italic text-sm flex-1 mb-4 leading-relaxed">
                    "{{ $t(testimonial.content) }}"
                  </p>
                  
                  <button class="text-repae-blue-500 hover:text-repae-blue-600 dark:text-repae-blue-400 dark:hover:text-repae-blue-300 font-brand font-medium text-sm self-start">
                    {{ $t('testimonials.readMore') }} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation uniquement si plus d'une page -->
        <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 space-x-4">
          <button 
            @click="previousTestimonial"
            class="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-repae-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentIndex === 0"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-repae-gray-600 dark:text-repae-gray-400" />
          </button>
          
          <div class="flex space-x-2">
            <button 
              v-for="(_, index) in totalPages" 
              :key="index"
              @click="goToTestimonial(index)"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'bg-repae-blue-500 w-8' : 'bg-gray-300 dark:bg-repae-gray-600 hover:bg-gray-400 dark:hover:bg-repae-gray-500'"
            ></button>
          </div>
          
          <button 
            @click="nextTestimonial"
            class="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-repae-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentIndex === totalPages - 1"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-repae-gray-600 dark:text-repae-gray-400" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>