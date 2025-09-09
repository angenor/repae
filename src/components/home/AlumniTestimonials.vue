<script setup>
import { ref } from 'vue'

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
])

const currentIndex = ref(0)

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : testimonials.value.length - 1
}

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const goToTestimonial = (index) => {
  currentIndex.value = index
}
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

      <div class="relative">
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials.slice(0, 2)" 
            :key="testimonial.id"
            class="bg-white dark:bg-repae-gray-800 rounded-xl shadow-lg p-8 border-l-4 border-l-repae-blue-500"
          >
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
              </div>
            </div>
            
            <p class="text-repae-gray-600 dark:text-repae-gray-300 font-brand italic">
              "{{ $t(testimonial.content) }}"
            </p>
            
            <button class="mt-6 text-repae-blue-500 hover:text-repae-blue-600 dark:text-repae-blue-400 dark:hover:text-repae-blue-300 font-brand font-medium">
              {{ $t('testimonials.readMore') }} →
            </button>
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
            v-for="(_, index) in Math.ceil(testimonials.length / 2)" 
            :key="index"
            @click="goToTestimonial(index * 2)"
            class="w-2 h-2 rounded-full transition-colors"
            :class="currentIndex === index * 2 ? 'bg-repae-blue-500' : 'bg-gray-300 dark:bg-repae-gray-600'"
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