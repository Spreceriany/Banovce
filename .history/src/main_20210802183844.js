import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue/dist/vue'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

createApp(App).use(router).mount('#app')

