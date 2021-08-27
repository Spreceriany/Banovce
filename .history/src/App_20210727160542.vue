<template>
  <Header/>
  <Overlay :class="{'open': showNav}" />
    <div class="burger" v-on:click="toggle">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
  <main>
    <transition name="fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
  </main>
  <Footer/>
</template>

<script>
import Header from './components/Header'

import Footer from '../src/components/Footer.vue'
import Overlay from '../src/components/Overlay.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Overlay
  },

  data: () => {
    showNav: true
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Lato','Prata', serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x:hidden;
  }

  .fade-enter, .fade-leave-to{
    opacity:0;
    transform: translateX(3em);
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .5s ease-in;
  }

  .open{
    transform: translateX(0%);
  }

  .burger{
    position: absolute;
    right: 0;
    top: 0;
  }

</style>
