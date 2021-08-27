<template>
  <div class="main">
    <Header />
    <Overlay :class="{ open: showNav }" />
    <div class="burger" @click.stop="showNav = !showNav">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <main>
      <router-view v-slot="{ Component }" >
        <transition >
            <component :is="Component" />
        </transition>
      </router-view>
    </main>

  </div>
</template>

<script>
import Header from "./components/Header";

import Overlay from "../src/components/Overlay.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "App",
  components: {
    Header,
    Overlay
  },

  data: () => {
    return {
      showNav: false,
      timeout: false
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },


  },


  watch: {
    $route() {
      this.showNav = false;
      this.timeout = false;
    },
    showNav: function() {
      document.body.style.overflow = this.showNav ? "hidden" : "";
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

.open {
  opacity: 1 !important;
  z-index: 10 !important;
  visibility: initial !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.overflow {
  overflow: hidden;
}
#c-bns button:first-child {
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
