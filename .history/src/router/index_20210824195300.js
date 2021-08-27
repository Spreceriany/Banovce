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
    meta:{
      title:'Komplexné účtovnícke služby pre firmy a podnikateľov',
      metaTags:[
      {
       name: 'description',
       content: 'Ponúkame širokú škálu účtovných služieb od správy miezd, účtovníctva až po zakladanie firiem. Vďaka 2O ročným skúsenostiam sme schopný ponúkať kvalitné služby, ktoré vám ušetria čas a peniaze.'
      },
      {
        property: 'og:title',
        content:'Komplexné účtovnícke služby pre firmy a podnikateľov'
      },
      {
        property:'og:description',
        content:'Ponúkame širokú škálu účtovných služieb od správy miezd, účtovníctva až po zakladanie firiem. Vďaka 2O ročným skúsenostiam sme schopný ponúkať kvalitné služby, ktoré vám ušetria čas a peniaze.'
      },
      {
        property:'og:site_name',
        content:'Economy plus'
      }

      ]
    }
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/servicespage',
    name: 'ServicesPage',
    component: ServicesPage,

  },
  {
    path: '/cookiePage',
    name: 'CookiePage',
    component: CookiePage
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
