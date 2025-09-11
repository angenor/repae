import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// Le dark mode s'initialise automatiquement dans le composable
import './composables/useSimpleDarkMode'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiP4zykrTNFQd8gxaY-qQcVuWCWIGwjL0",
  authDomain: "repae-f13cc.firebaseapp.com",
  projectId: "repae-f13cc",
  storageBucket: "repae-f13cc.firebasestorage.app",
  messagingSenderId: "547740336954",
  appId: "1:547740336954:web:1e9612f40c1e6919474603"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
