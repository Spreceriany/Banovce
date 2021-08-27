<template>
  <Header />
  <Overlay :class="{ 'open': showNav }" />
  <div
    class="burger"
    @click.stop="showNav = !showNav"
  >
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <main>
   <transition name="slide-fade">
   <router-view v-slot="{ Component }" class="view">

        <component :is="Component" />

    </router-view>
   </transition>

  </main>
  <Footer v-if="isLoaded"/>

</template>

<script>
const t2 = gsap.timeline({ defaults: { duration: 0.01 } });
t2.paused(true);
t2.reversed(true);

import Header from "./components/Header";

import Footer from "./views/Footer.vue";
import Overlay from "../src/components/Overlay.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default {
  name: "App",
  components: {
    Header,
    Footer,
    Overlay
  },

  data: () => {
    return {
      showNav: false,
      isLoaded:false
    };
  },
  beforeCreate() {
        setTimeout(() => { this.isLoaded = true }, 1000)
  },



  methods: {
      scrollToTop(){
        windo.scrollTo(0,0)
      }
  },

  watch: {
    $route() {
      this.showNav = false;
    },
    showNav: function () {
     document.body.style.overflow = this.showNav ? 'hidden' : ''
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Prata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
@import url("https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.4.7/dist/cookieconsent.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", "Prata", serif;
  font-size: 1rem;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}


.open {
 opacity:1 !important;
 z-index: 10 !important;
 visibility: initial !important;
}

.overflow {
  overflow: hidden;

}
#c-bns button:first-child{
  background: #214287 !important;
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
