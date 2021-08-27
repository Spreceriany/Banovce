import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'

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
    component: ServicesPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
