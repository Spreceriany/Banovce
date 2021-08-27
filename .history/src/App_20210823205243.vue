<template>
  <Header />
  <Overlay :class="{ 'open': showNav }" />
  <div
    class="burger"
    @click.stop="showNav = !showNav"
  >
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <main>
   <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>

</template>

<script>


import Header from "./components/Header";

import Overlay from "../src/components/Overlay.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "App",
  components: {
    Header,
    Overlay
  },

  data: () => {
    return {
      showNav: false,
    };
  },

  methods: {
      scrollToTop(){
        windo.scrollTo(0,0)
      },

      cookie(){
        var cc = initCookieConsent();
          cc.run({
            current_lang: 'en',
            autorun: true,
            delay: 3000,
            autoclear_cookies: true,
            cookie_expiration: 365,

            gui_options: {
                consent_modal: {
                    layout: 'cloud',
                    position: 'bottom center',
                    transition: 'slide'
                },
                settings_modal: {
                    layout: 'box',
                    transition: 'slide'
                }
            },

            onAccept: function (cookies) {
                if (cc.allowedCategory('analytics_cookies')) {
                    cc.loadScript('https://www.google-analytics.com/analytics.js', function () {
                        ga('create', 'G-DG16M6QRCZ', 'auto');  //replace UA-XXXXXXXX-Y with your tracking code
                        ga('send', 'pageview');
                    });
                }
            },

            languages: {
                sk: {
                    consent_modal: {
                        title: "Používame cookies",
                        description: 'Táto webová stránka používa cookies pre zabezpečenie jej bezchybnej prevádzky a vášho maximálneho pohodlia. Ak budete pokračovať bez zmien v nastavení, súhlasíte s nastavením cookies. <a href="javascript:void(0);" aria-label="View cookie settings" data-cc="c-settings">Nastavenia cookies</a>',
                        primary_btn: {
                            text: 'Súhlasím',
                            role: 'accept_all'				//'accept_selected' or 'accept_all'
                        },
                        secondary_btn: {
                            text: 'Nesúshlasím',
                            role: 'accept_necessary'				//'settings' or 'accept_necessary'
                        }
                    },
                    settings_modal: {
                        title: 'Nastavenia cookies',
                        save_settings_btn: "Uložiť nastavenia",
                        accept_all_btn: "Prijať všetky",
                        cookie_table_headers: [
                            { col1: "Meno" },
                            { col2: "Doména" },
                            { col3: "Platnosť" },
                            { col4: "Popis" },
                            { col5: "Typ" }
                        ],
                        blocks: [
                            {
                                title: "Používanie cookies",
                                description: 'Táto webová stránka používa cookies pre zabezpečenie jej bezchybnej prevádzky a vášho maximálneho pohodlia. Ak budete pokračovať bez zmien v nastavení, súhlasíte s nastavením cookies.'
                            }, {
                                title: "Základné cookies",
                                description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                                toggle: {
                                    value: 'necessary_cookies',
                                    enabled: true,
                                    readonly: true
                                }
                            }, {
                                title: "Analytics cookies",
                                description: 'These cookies ollect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                                toggle: {
                                    value: 'analytics_cookies',
                                    enabled: false,
                                    readonly: false
                                },
                                cookie_table: [
                                    {
                                        col1: '_ga',
                                        col2: 'google.com',
                                        col3: '2 years',
                                        col4: 'description ...',
                                        col5: 'Permanent cookie'
                                    },
                                    {
                                        col1: '_gat',
                                        col2: 'google.com',
                                        col3: '1 minute',
                                        col4: 'description ...',
                                        col5: 'Permanent cookie'
                                    },
                                    {
                                        col1: '_gid',
                                        col2: 'google.com',
                                        col3: '1 day',
                                        col4: 'description ...',
                                        col5: 'Permanent cookie'
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        });
      }
  },

  created() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.4.7/dist/cookieconsent.js')
      document.head.appendChild(recaptchaScript)

    },

  watch: {
    $route() {
      this.showNav = false;
    },
    showNav: function () {
     document.body.style.overflow = this.showNav ? 'hidden' : ''
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
@import url("https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.4.7/dist/cookieconsent.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Prata", serif;
  font-size: 1rem;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}


.open {
 opacity:1 !important;
 z-index: 10 !important;
 visibility: initial !important;
}

.overflow {
  overflow: hidden;

}
#c-bns button:first-child{
  background: #214287 !important;
}
.burger {
  position: absolute;
  right: 14px;
  top: 34px;
  cursor: pointer;
  z-index: 10;
  padding: 0.7em 0.6em 0.6em 0.4em;
  border: 0px solid red;
  border-radius: 50%;
  @media (min-width: 996px) {
    display: none;
  }
  div {
    background-color: black;
    margin: 0.3em;
    transition: transform 500ms ease, opacity 500ms ease, width 500ms ease;
    &:nth-child(1) {
      width: 2em;
      height: 0.2em;
    }
    &:nth-child(2) {
      overflow: hidden;
      width: 1.5em;
      height: 0.2em;
    }
    &:nth-child(3) {
      width: 1em;
      height: 0.2em;
    }
  }
}
</style>
