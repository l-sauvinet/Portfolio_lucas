import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import Synthese from '../pages/Synthese.vue'
import Veille from '../pages/Veille.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/synthese', component: Synthese },
  { path: '/veille', component: Veille },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  // Remet le scroll en haut à chaque changement de page
  scrollBehavior: () => ({ top: 0 }),
})
