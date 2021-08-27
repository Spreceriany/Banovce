<template>
  <Header/>
  <Overlay/>
  <main>
    <transition name="fade" mode="out-in">
      <router-view/>
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
    transform: translateX(2em);
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .3s ease-in;
  }

</style>
