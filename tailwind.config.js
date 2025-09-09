/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        repae: {
          blue: '#1488bb',
          gray: '#717173',
          primary: '#1488bb',
          secondary: '#717173',
          // Dark mode specific colors
          'dark-bg': '#0f1419',
          'dark-surface': '#1a1f26',
          'dark-surface-hover': '#242a33',
          'dark-border': '#2d3748',
          'dark-text-primary': '#f7fafc',
          'dark-text-secondary': '#cbd5e0',
          'dark-text-muted': '#a0aec0',
          'blue-dark': '#47a7c7',
          'blue-dark-hover': '#75bdd5',
          'blue-dark-active': '#1488bb',
        },
        brand: {
          blue: '#1488bb',
          gray: '#717173',
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'brand': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'repae-gradient': 'linear-gradient(135deg, #1488bb 0%, #717173 100%)',
        'brand-gradient': 'linear-gradient(135deg, #1488bb 0%, #717173 100%)',
      },
      boxShadow: {
        'repae': '0 4px 14px 0 rgba(20, 136, 187, 0.15)',
        'brand': '0 4px 14px 0 rgba(20, 136, 187, 0.15)',
      },
      spacing: {
        'logo-protection': '30px',
      }
    },
  },
  plugins: [],
}
