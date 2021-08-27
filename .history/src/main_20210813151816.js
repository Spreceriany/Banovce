import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue/dist/vue'

import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue)

createApp(App).use(router).mount('#app')
