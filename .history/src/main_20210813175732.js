import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'

import StoryblokVue from '../node_modules/storyblok-vue/vue1/storyblok-vue
Vue.use(StoryblokVue)
createApp(App).use(router).mount('#app')

