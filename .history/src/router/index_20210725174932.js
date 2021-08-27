import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import SluzbyGrid from '../views/SluzbyGrid.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/servicespage',
    name: 'ServicesPage',
    component: SluzbyGrid
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
