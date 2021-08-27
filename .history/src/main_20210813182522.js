import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
const StoryblokVue = require('storyblok-vue');

import StoryblokVue from 'storyblok-vue'

createApp(App).use(router).mount('#app')
Vue.use(StoryblokVue)