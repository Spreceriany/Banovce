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
const t2 = gsap.timeline({ defaults: { duration: 0.01 } });
t2.paused(true);
t2.reversed(true);

import Header from './components/Header'

import Footer from '../src/components/Footer.vue'
import Overlay from '../src/components/Overlay.vue'
import gsap from "gsap";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Overlay
  },

  methods: {
    toggle: function() {
      t2.reversed() ? t2.play(): t2.reverse();
      t2.to(".line1", {
        rotation: 45,
        y: 8,
        duration: 0.01,
        backgroundColor:"#fff"
      })

        .to(".line2", {
          autoAlpha: 0,
          xPercent: -100,
          backgroundColor:"#fff"
        })

        .to(".line3", {
          rotation: -45,
          x: -3,
          y: -8,
          width: "80%",
          duration: 0.01,
          backgroundColor:"#fff"
        });
    }
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

  .fade-leave-to{
    opacity:0;
    transform: translateX(3em);
  }

   .fade-leave-active{
    transition: all .5s ease-in;
  }

</style>
