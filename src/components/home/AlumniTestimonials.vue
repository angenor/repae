<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

const startAutoScroll = () => {
  autoScrollInterval = setInterval(() => {
    if (!isPaused.value) {
      nextTestimonial()
    }
  }, 4000) // Change testimonial every 4 seconds
}

const stopAutoScroll = () => {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval)
  }
}

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : testimonials.value.length - 1
}

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
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
})

onUnmounted(() => {
  stopAutoScroll()
})
</script>

<template>
  <section class="pb-16 pt-32 bg-gray-50 dark:bg-repae-gray-900 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-blue-500 dark:text-white font-brand mb-4">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="relative overflow-hidden" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="w-full flex-shrink-0 px-4"
          >
            <div class="bg-white dark:bg-repae-gray-800 rounded-xl shadow-lg p-8 border-l-4 border-l-repae-blue-500 max-w-2xl mx-auto">
              <div class="flex items-start mb-6">
                <img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  class="w-16 h-16 rounded-full mr-4"
                >
                <div class="flex-1">
                  <h3 class="font-bold text-repae-gray-900 dark:text-white font-brand">
                    {{ testimonial.name }}
                  </h3>
                  <p class="text-sm text-repae-gray-600 dark:text-repae-gray-400 font-brand">
                    {{ $t(testimonial.role) }} - {{ testimonial.company }}
                  </p>
                  <div class="flex items-center mt-2">
                    <font-awesome-icon 
                      v-for="star in 5" 
                      :key="star"
                      icon="fa-solid fa-star" 
                      class="text-yellow-500 text-sm mr-1" 
                    />
                  </div>
                </div>
              </div>
              
              <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand italic mb-4">
                "{{ $t(testimonial.content) }}"
              </p>
              
              <button class="text-repae-blue-500 hover:text-repae-blue-600 dark:text-repae-blue-400 dark:hover:text-repae-blue-300 font-brand font-medium">
                {{ $t('testimonials.readMore') }} →
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8 space-x-2">
          <button 
            @click="previousTestimonial"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-repae-gray-700 transition-colors"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-left" class="text-repae-gray-600 dark:text-repae-gray-400" />
          </button>
          
          <button 
            v-for="(_, index) in testimonials.length" 
            :key="index"
            @click="goToTestimonial(index)"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-repae-blue-500 w-8' : 'bg-gray-300 dark:bg-repae-gray-600'"
          ></button>
          
          <button 
            @click="nextTestimonial"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-repae-gray-700 transition-colors"
          >
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-repae-gray-600 dark:text-repae-gray-400" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>