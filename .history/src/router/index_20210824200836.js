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

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
