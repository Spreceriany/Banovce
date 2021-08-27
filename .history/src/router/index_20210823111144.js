import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import CookiePage from '../views/CookiePage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transitionName: 'slide' },
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: AboutPage,
    meta: { transitionName: 'slide' },

  },
  {
    path: '/servicespage',
    name: 'ServicesPage',
    component: ServicesPage,
    meta: { transitionName: 'slide' },

  },
  {
    path: '/cookiePage',
    name: 'CookiePage',
    component: CookiePage,
    meta: { transitionName: 'slide' },

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
