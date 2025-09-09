<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AlumniTestimonials from '@/components/home/AlumniTestimonials.vue'
import FindAlumni from '@/components/home/FindAlumni.vue'
import JobOffers from '@/components/home/JobOffers.vue'
import UpcomingEvents from '@/components/home/UpcomingEvents.vue'
import Partnerships from '@/components/home/Partnerships.vue'
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
