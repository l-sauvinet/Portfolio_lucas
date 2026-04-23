import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Point d'entrée : monte l'app Vue sur le div#app de index.html
createApp(App).use(router).mount('#app')
