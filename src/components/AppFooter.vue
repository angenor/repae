<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const socialLinks = ref([
  { icon: 'fa-brands fa-facebook', url: '#', label: 'Facebook' },
  { icon: 'fa-brands fa-twitter', url: '#', label: 'Twitter' },
  { icon: 'fa-brands fa-linkedin', url: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-instagram', url: '#', label: 'Instagram' }
])
</script>

<template>
  <footer class="bg-repae-gray-900 dark:bg-black text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          <h4 class="text-lg font-bold font-brand mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('nav.home') }}
              </RouterLink>
            </li>
            <li>
              <a href="#association" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('nav.association') }}
              </a>
            </li>
            <li>
              <a href="#alumni" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('nav.alumni') }}
              </a>
            </li>
            <li>
              <a href="#enterprises" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('nav.enterprises') }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold font-brand mb-4">{{ $t('footer.resources') }}</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('footer.jobBoard') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('footer.events') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('footer.news') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-repae-gray-300 hover:text-repae-blue-400 font-brand transition-colors">
                {{ $t('footer.documents') }}
              </a>
            </li>
          </ul>
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