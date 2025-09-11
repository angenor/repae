<script setup>
import { ref, computed } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'events.upcomingEvents.academicEntry.title',
    date: '2024-06-12',
    image: '/image/background/evenement1.jpg',
    status: 'completed',
    description: 'events.upcomingEvents.academicEntry.description'
  },
  {
    id: 2,
    title: 'events.upcomingEvents.openDay.title',
    date: '2025-09-12',
    image: '/image/background/evenement2.jpg',
    status: 'ongoing',
    description: 'events.upcomingEvents.maracanaTournament.description'
  },
  {
    id: 3,
    title: 'events.upcomingEvents.openDay.title',
    date: '2026-06-12',
    image: '/image/background/evenement3.jpg',
    status: 'upcoming',
    description: 'events.upcomingEvents.maracanaTournament.description'
  },
  {
    id: 4,
    title: 'events.upcomingEvents.openDay.title',
    date: '2026-06-12',
    image: '/image/background/evenement4.jpg',
    status: 'upcoming',
    description: 'events.upcomingEvents.webinar.description'
  },
  {
    id: 5,
    title: 'events.upcomingEvents.openDay.title',
    date: '2026-06-12',
    image: '/image/background/evenement1.jpg',
    status: 'upcoming',
    description: 'events.upcomingEvents.techJustice.description'
  }
])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'long',
    year: 'numeric'
  })
}

const getStatusIcon = (status) => {
  switch(status) {
    case 'completed':
      return 'fa-check'
    case 'ongoing':
      return 'fa-spinner'
    case 'upcoming':
      return 'fa-circle'
    default:
      return 'fa-circle'
  }
}

const getStatusClasses = (status) => {
  switch(status) {
    case 'completed':
      return 'bg-repae-blue-500 text-white'
    case 'ongoing':
      return 'bg-repae-blue-500 text-white'
    case 'upcoming':
      return 'bg-repae-gray-400 text-white'
    default:
      return 'bg-repae-gray-400 text-white'
  }
}
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-repae-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-blue-500 dark:text-white font-brand mb-4">
          {{ $t('events.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand max-w-3xl mx-auto">
          {{ $t('events.upcomingEvents.subtitle') }}
        </p>
      </div>

      <!-- Event Cards -->
      <div class="flex justify-center gap-6 mb-16 overflow-x-auto pb-4">
        <div 
          v-for="event in events" 
          :key="event.id"
          class="flex-shrink-0 relative group cursor-pointer"
          :class="event.status === 'completed' ? 'opacity-60' : ''"
        >
          <!-- Event Card -->
          <div class="w-48 h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div class="relative w-full h-full">
              <img 
                :src="event.image" 
                :alt="$t(event.title)"
                class="w-full h-full object-cover"
                :class="event.status === 'completed' ? 'filter brightness-75' : ''"
              >
              <!-- Event Content Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="font-brand font-bold text-sm mb-2 leading-tight">
                    {{ $t(event.title) }}
                  </h3>
                  <p class="font-brand text-xs opacity-90 mb-2">
                    {{ $t(event.description) }}
                  </p>
                  <p class="font-brand text-xs opacity-75">
                    {{ formatDate(event.date) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Container with same spacing as cards -->
        <div class="flex justify-center gap-6">
          <div 
            v-for="event in events" 
            :key="`timeline-${event.id}`"
            class="flex-shrink-0 w-48 flex flex-col items-center relative"
          >
            <!-- Timeline Line Background (only show on middle events) -->
            <div v-if="event.id !== 1 && event.id !== events.length" 
                 class="absolute top-6 left-0 right-0 h-0.5 bg-repae-gray-300 dark:bg-repae-gray-600"></div>
            
            <!-- Timeline Point -->
            <div 
              class="w-12 h-12 rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300"
              :class="getStatusClasses(event.status)"
            >
              <font-awesome-icon 
                :icon="`fa-solid ${getStatusIcon(event.status)}`"
                :class="event.status === 'ongoing' ? 'animate-spin' : ''"
                class="text-sm"
              />
            </div>
            
            <!-- Event Title -->
            <h4 class="font-brand font-semibold text-sm text-repae-gray-900 dark:text-white mb-1 leading-tight text-center">
              {{ $t(event.title) }}
            </h4>
            
            <!-- Event Date -->
            <p class="font-brand text-xs text-repae-gray-500 dark:text-repae-gray-400 text-center">
              {{ formatDate(event.date) }}
            </p>
          </div>
        </div>
        
        <!-- Continuous Timeline Line -->
        <div class="absolute top-6 h-0.5 bg-repae-gray-300 dark:bg-repae-gray-600" 
             style="left: calc(50% - 33rem); width: 66rem;"></div>
      </div>
    </div>
  </section>
</template>