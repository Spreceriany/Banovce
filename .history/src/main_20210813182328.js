import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import {StoryblokVue} from '../node_modules/storyblok-vue/storyblok-vue'

createApp(App).use(router).mount('#app')
Vue.use(StoryblokVue)