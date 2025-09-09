<template>
  <div class="repae-logo-container" :class="containerClasses">
    <img 
      :src="logoSrc" 
      :alt="$t('logo.alt')"
      :class="logoClasses"
      class="repae-logo"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, white, icon
    validator: (value) => ['primary', 'secondary', 'white', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'medium', // small, medium, large, xlarge
    validator: (value) => ['small', 'medium', 'large', 'xlarge'].includes(value)
  },
  withBaseline: {
    type: Boolean,
    default: true
  },
  withProtection: {
    type: Boolean,
    default: false // Ajoute la zone de protection autour du logo
  }
})

// Logique pour sélectionner la bonne image selon les props
const logoSrc = computed(() => {
  const basePath = '/image/logos_REAPE'
  
  if (props.variant === 'icon') {
    // Retourne l'icône selon la variante
    if (props.variant === 'primary') return `${basePath}/ICONE/ICONE_REPAE_BGR.png`
    if (props.variant === 'secondary') return `${basePath}/ICONE/ICONE_REPAE_BBL.png`
    if (props.variant === 'white') return `${basePath}/ICONE/ICONE_REPAE_BLB.png`
    return `${basePath}/ICONE/ICONE_REPAE_BGR.png`
  }
  
  // Logos complets
  if (props.withBaseline) {
    if (props.variant === 'primary') return `${basePath}/LOGO/LOGO RePAE3.png`
    if (props.variant === 'secondary') return `${basePath}/DECLINAISON/logo_BGR.png`
    if (props.variant === 'white') return `${basePath}/DECLINAISON/logo_BBL.png`
    return `${basePath}/LOGO/logo.png`
  } else {
    // Sans baseline
    if (props.variant === 'primary') return `${basePath}/DECLINAISON/logo_BGR1.png`
    if (props.variant === 'secondary') return `${basePath}/DECLINAISON/logo_BBL1.png`
    return `${basePath}/LOGO/logo1.png`
  }
})

const logoClasses = computed(() => {
  const classes = []
  
  // Tailles selon la charte (minimum 150px web, 39.6875mm print)
  switch (props.size) {
    case 'small':
      classes.push('h-12') // 48px
      break
    case 'medium':
      classes.push('h-20') // 80px
      break
    case 'large':
      classes.push('h-32') // 128px
      break
    case 'xlarge':
      classes.push('h-48') // 192px
      break
  }
  
  classes.push('object-contain', 'max-w-full')
  return classes
})

const containerClasses = computed(() => {
  const classes = []
  
  if (props.withProtection) {
    classes.push('repae-logo-protection') // Ajoute la zone de protection de 30px
  }
  
  return classes
})
</script>

<style scoped>
.repae-logo {
  /* Assure que le logo respecte les contraintes de taille minimum */
  min-width: 150px; /* Selon la charte graphique */
}

.repae-logo-container {
  display: inline-block;
}

/* Zone de protection selon la charte */
.repae-logo-protection {
  padding: var(--spacing-logo-protection, 30px);
}

@media print {
  .repae-logo {
    min-width: 39.6875mm; /* Taille minimum pour l'impression selon la charte */
  }
}
</style>