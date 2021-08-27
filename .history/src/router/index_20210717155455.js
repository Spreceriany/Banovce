import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/aboutpage',
    component: AboutPage
  },
  {
    path: '/servicespage',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
