import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'


createApp(App).use(router).mount('#app')
import StoryblokVue from 'storyblok-vue'

Vue.use(StoryblokVue)