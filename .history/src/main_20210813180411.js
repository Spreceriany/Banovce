import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import StoryblokVue from 'storyblok-vue'

createApp(App).use(router).mount('#app')
const story = require('storyblok-vue')
Vue.use(story)