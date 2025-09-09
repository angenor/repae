<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AlumniTestimonials from '@/components/AlumniTestimonials.vue'
import FindAlumni from '@/components/FindAlumni.vue'
import JobOffers from '@/components/JobOffers.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import Partnerships from '@/components/Partnerships.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-repae-gray-900">
    <AppNavbar />
    <HeroSection />
    <AlumniTestimonials />
    <FindAlumni />
    <JobOffers />
    <UpcomingEvents />
    <Partnerships />
    <AppFooter />
  </div>
</template>