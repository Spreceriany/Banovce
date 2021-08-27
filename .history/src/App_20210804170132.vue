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
  <Footer />
</template>

<script>
const t2 = gsap.timeline({ defaults: { duration: 0.01 } });
const body = document.querySelector(body);
t2.paused(true);
t2.reversed(true);

import Header from "./components/Header";

import Footer from "../src/components/Footer.vue";
import Overlay from "../src/components/Overlay.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'

gsap.registerPlugin(ScrollTrigger);
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Overlay
  },

  data: () => {
    return {
      showNav: false
    };
  },

  methods: {
      scrollToTop(){
        windo.scrollTo(0,0)
      }
  },

  mounted(){
        var cc = initCookieConsent();

        // run plugin with config object
        cc.run({
            autorun : true,
            delay : 0,
            current_lang : 'en',
            theme_css : "../src/cookieconsent.css",
            autoclear_cookies : true,
            cookie_expiration : 365,

            gui_options : {
                consent_modal : {
                    layout : 'cloud',
                    position : 'bottom',
                    transition : 'slide'
                },
                settings_modal : {
                    layout : 'box',
                    transition : 'slide'
                }
            },

            onAccept: function(cookies){
                if(cc.allowedCategory('analytics_cookies')){
                    cc.loadScript('https://www.google-analytics.com/analytics.js', function(){
                        ga('create', 'UA-XXXXXXXX-Y', 'auto');  //replace UA-XXXXXXXX-Y with your tracking code
                        ga('send', 'pageview');
                    });
                }
            },

            languages : {
                en : {
                    consent_modal : {
                        title :  "I use cookies",
                        description :  'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval. <a aria-label="Cookie policy" class="cc-link" href="#">Read more</a>',
                        primary_btn: {
                            text: 'Accept',
                            role: 'accept_all'				//'accept_selected' or 'accept_all'
                        },
                        secondary_btn: {
                            text : 'Settings',
                            role : 'settings'				//'settings' or 'accept_necessary'
                        }
                    },
                    settings_modal : {
                        title : 'Cookie preferences',
                        save_settings_btn : "Save settings",
                        accept_all_btn : "Accept all",
                        cookie_table_headers : [
                            {col1: "Name" },
                            {col2: "Domain" },
                            {col3: "Expiration" },
                            {col4: "Description" },
                            {col5: "Type" }
                        ],
                        blocks : [
                            {
                                title : "Cookie usage",
                                description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                            },{
                                title : "Strictly necessary cookies",
                                description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                                toggle : {
                                    value : 'necessary_cookies',
                                    enabled : true,
                                    readonly: true
                                }
                            },{
                                title : "Analytics cookies",
                                description: 'These cookies ollect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                                toggle : {
                                    value : 'analytics_cookies',
                                    enabled : false,
                                    readonly: false
                                },
                                cookie_table: [
                                    {
                                        col1: '_ga',
                                        col2: 'google.com',
                                        col3: '2 years',
                                        col4: 'description ...' ,
                                        col5: 'Permanent cookie'
                                    },
                                    {
                                        col1: '_gat',
                                        col2: 'google.com',
                                        col3: '1 minute',
                                        col4: 'description ...' ,
                                        col5: 'Permanent cookie'
                                    },
                                    {
                                        col1: '_gid',
                                        col2: 'google.com',
                                        col3: '1 day',
                                        col4: 'description ...' ,
                                        col5: 'Permanent cookie'
                                    }
                                ]
                            },{
                                title : "More information",
                                description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="#yourwebsite">contact me</a>.',
                            }
                        ]
                    }
                }
            }
        });
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Prata", serif;
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
