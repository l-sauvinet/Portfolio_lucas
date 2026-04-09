import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import Parcours from '../pages/Parcours.vue'
import Veille from '../pages/Veille.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/parcours', component: Parcours },
  { path: '/veille', component: Veille },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
