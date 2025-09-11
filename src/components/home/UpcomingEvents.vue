<script setup>
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'events.event1.title',
    date: '2024-02-10',
    time: '18:00',
    location: 'Nantes',
    type: 'events.types.conference',
    image: '/image/background/evenement1.jpg',
    description: 'events.event1.description',
    attendees: 45
  },
  {
    id: 2,
    title: 'events.event2.title',
    date: '2024-02-15',
    time: '19:00',
    location: 'Paris',
    type: 'events.types.networking',
    image: '/image/background/evenement2.jpg',
    description: 'events.event2.description',
    attendees: 30
  },
  {
    id: 3,
    title: 'events.event3.title',
    date: '2024-02-20',
    time: '14:00',
    location: 'Lyon',
    type: 'events.types.workshop',
    image: '/image/background/evenement3.jpg',
    description: 'events.event3.description',
    attendees: 25
  },
  {
    id: 4,
    title: 'events.event4.title',
    date: '2024-02-25',
    time: '09:00',
    location: 'Nantes',
    type: 'events.types.formation',
    image: '/image/background/evenement4.jpg',
    description: 'events.event4.description',
    attendees: 50
  },
  {
    id: 5,
    title: 'events.event5.title',
    date: '2024-03-01',
    time: '20:00',
    location: 'Nantes',
    type: 'events.types.gala',
    image: '/image/background/evenement1.jpg',
    description: 'events.event5.description',
    attendees: 120
  }
])

const getEventIcon = (type) => {
  const icons = {
    'events.types.conference': 'fa-microphone',
    'events.types.networking': 'fa-handshake',
    'events.types.workshop': 'fa-tools',
    'events.types.formation': 'fa-graduation-cap',
    'events.types.gala': 'fa-glass-cheers'
  }
  return icons[type] || 'fa-calendar'
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-repae-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-repae-blue-500 dark:text-white font-brand mb-4">
          {{ $t('events.title') }}
        </h2>
        <p class="text-lg text-repae-gray-600 dark:text-repae-gray-300 font-brand">
          {{ $t('events.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div 
          v-for="event in events" 
          :key="event.id"
          class="bg-white dark:bg-repae-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
        >
          <div class="relative h-40 overflow-hidden">
            <img 
              :src="event.image" 
              :alt="$t(event.title)"
              class="w-full h-full object-cover"
            >
            <div class="absolute top-2 right-2 bg-repae-blue-500 text-white px-3 py-1 rounded-full text-xs font-brand font-bold">
              {{ formatDate(event.date) }}
            </div>
          </div>
          
          <div class="p-4">
            <div class="flex items-center mb-2">
              <div class="bg-repae-blue-100 dark:bg-repae-blue-900 p-2 rounded-lg mr-3">
                <font-awesome-icon 
                  :icon="`fa-solid ${getEventIcon(event.type)}`" 
                  class="text-repae-blue-500 dark:text-repae-blue-400"
                />
              </div>
              <span class="text-xs text-repae-gray-500 dark:text-repae-gray-400 font-brand uppercase">
                {{ $t(event.type) }}
              </span>
            </div>
            
            <h3 class="font-bold text-repae-gray-900 dark:text-white font-brand mb-2 line-clamp-2">
              {{ $t(event.title) }}
            </h3>
            
            <div class="space-y-1 text-xs text-repae-gray-600 dark:text-repae-gray-400 font-brand">
              <p class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-clock" class="mr-2 text-repae-gray-400" />
                {{ event.time }}
              </p>
              <p class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2 text-repae-gray-400" />
                {{ event.location }}
              </p>
              <p class="flex items-center">
                <font-awesome-icon icon="fa-solid fa-users" class="mr-2 text-repae-gray-400" />
                {{ event.attendees }} {{ $t('events.participants') }}
              </p>
            </div>
            
            <button class="mt-4 w-full cursor-pointer bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-medium py-2 rounded-lg text-sm transition-colors">
              {{ $t('events.registerButton') }}
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="cursor-pointer bg-repae-blue-500 hover:bg-repae-blue-600 dark:bg-repae-blue-400 dark:hover:bg-repae-blue-300 text-white font-brand font-bold px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105">
          {{ $t('events.viewAllButton') }}
        </button>
      </div>
    </div>
  </section>
</template>