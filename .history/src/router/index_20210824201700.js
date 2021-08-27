import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AboutPage from '../views/AboutPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import CookiePage from '../views/CookiePage.vue'
import VueRouterMetaTags from '@bachdgvn/vue-router-meta-tags';


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
    component: AboutPage,
    meta:{
      title:' Sme stabilný partner pre vaše podnikanie',
      metaTags:[
      {
       name: 'description',
       content: 'Našou snahou je neustále posúvanie a skvalitňovanie našich služieb v oblasti účtovníctva a starostlivosti o klientov. Ideme ruka v ruke s dobou, čím neustále skvalitňujeme naše služby'
      },
      {
        property: 'og:title',
        content:'Sme stabilný partner pre vaše podniaknie'
      },
      {
        property:'og:description',
        content:'Našou snahou je neustále posúvanie a skvalitňovanie našich služieb v oblasti účtovníctva a starostlivosti o klientov. Ideme ruka v ruke s dobou, čím neustále skvalitňujeme naše služby.'
      },
      {
        property:'og:site_name',
        content:'Economy plus'
      }

      ]
    }
  },
  {
    path: '/servicespage',
    name: 'ServicesPage',
    component: ServicesPage,
    meta:{
      title:' Podnikajte a financie nechajte na nás',
      metaTags:[
      {
       name: 'description',
       content: 'Zastrešujeme široké spektrum účtovníckych služieb, vďaka čomu vieme ponúknuť komplexnú starostlivosť vo všetkých oblastiach účtovníctva, čo výrazne šetri klientov čas a rozpočet.'
      },
      {
        property: 'og:title',
        content:'Podnikajte a financie nechajte na nás.'
      },
      {
        property:'og:description',
        content:'Zastrešujeme široké spektrum účtovníckych služieb, vďaka čomu vieme ponúknuť komplexnú starostlivosť vo všetkých oblastiach účtovníctva, čo výrazne šetri klientov čas a rozpočet.'
      },
      {
        property:'og:site_name',
        content:'Economy plus'
      }

      ]
    }

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

router.beforeEach(VueRouterMetaTags.update);


export default router
