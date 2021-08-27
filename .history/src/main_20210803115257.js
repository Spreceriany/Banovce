import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import CookieConsent from 'vue-cookie-consent-modal';
Vue.component('cookie-consent', CookieConsent);


createApp(App).use(router).mount('#app')

