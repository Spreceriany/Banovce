<template>
  <Header />
  <Overlay :class="{ open: showNav }" />
  <div class="burger" :class="{ overflow: shovNav}" @click.stop="showNav = !showNav" v-on:click="toggle">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <main>
    <router-view> </router-view>
  </main>
  <Footer />
</template>

<script>

const t2 = gsap.timeline({ defaults: { duration: 0.01 } });
const body = document.querySelector(body);
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

  data: () => {
    return {
      showNav: false
    }

  },

   methods: {
    toggle: function() {
      this.showNav ? t2.play() : t2.reverse();
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
    },
    bodyOverflow: function(){
      if(this.showNav == true){
        document.body.style.overflow == hidden
      }
    }
    },
    watch: {
      $route(){
        this.showNav = false;
      }
    }
  }


</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Prata", serif;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.open {
  transform: translateX(0%) !important;
}

.overflow {
  overflow: hidden;
}

.invinsible {
  visibility: hidden;
}

.burger {
  position: absolute;
  right: 14px;
  top: 34px;
  cursor: pointer;
  z-index: 10;
  padding: 0.7em 0.6em 0.6em 0.4em;
  border: 0px solid red;
  border-radius: 50%;
  @media (min-width: 996px) {
    display: none;
  }
  div {
    background-color: black;
    margin: 0.3em;
    transition: transform 500ms ease, opacity 500ms ease, width 500ms ease;
    &:nth-child(1) {
      width: 2em;
      height: 0.2em;
    }
    &:nth-child(2) {
      overflow: hidden;
      width: 1.5em;
      height: 0.2em;
    }
    &:nth-child(3) {
      width: 1em;
      height: 0.2em;
    }
  }
}
</style>
