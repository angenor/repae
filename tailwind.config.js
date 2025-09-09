/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
