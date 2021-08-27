import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'

import StoryblokVue from 'storyblok-vue'

new Vue({
    router,
    render: h => h(App)
  });

