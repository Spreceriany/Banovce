<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="../assets/newLogo.png" alt="logo" />
      </router-link>
      <ul>
        <router-link to="/">Domov</router-link>
        <router-link :to="{ name: 'AboutPage' }">O nás</router-link>
        <router-link :to="{ name: 'ServicesPage' }">Služby</router-link>

      </ul>
      <a
        @click="goto()"
        class="contact-btn"
        :class="{
          blueBtn: $route.path == '/aboutpage' || $route.path == '/servicespage'
        }"
        >Kontakt</a
      >

    </nav>
  </header>
</template>

<script>
const t2 = gsap.timeline({ defaults: { duration: 0.01 } });
t2.paused(true);
t2.reversed(true);

import gsap from "gsap";
export default {
  name: "Header",

  mounted(){
    gsap.from("nav",{autoAlpha:0})
  },
  methods: {
    goto(){
      document.getElementById('footer').scrollIntoView({
        behavior: "smooth"
      })
    }
  }
};
</script>

<style scoped lang="scss">
header {
  z-index: 10;
  width: 100%;
  position: absolute;
  max-width: 1440px;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  padding: 2em 2em 0 2em;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      margin: 0 auto;

      @media (max-width: 996px) {
        display: none;
      }
      a {
        display: inline-block;
        padding: 0 1em 0.3em 1em;
        font-weight: bold;
        position: relative;
        font-size: 1.2rem;
        color: black;

        text-decoration: none;
        background-image: linear-gradient(black, black);
        background-size: 0 2px, auto;
        background-repeat: no-repeat;
        background-position: center bottom;
        transition: background-size 0.2s ease-out;

        &:hover {
          background-size: 70% 2px, auto;
        }
        &:not(:last-child) {
          &::after {
            content: "";
            position: absolute;
            width: 0.1em;
            height: 1em;
            right: 0;
            top: 0.1em;
            background-color: black;
          }
        }
      }
    }
    img {
      width: 10em;
      height: auto;
    }

    .contact-btn {
      text-decoration: none;
      color: black;
      font-weight: bold;
      background-color: white;
      padding: 1em 1.9em;
      border-radius: 0.15em;
      font-size: 1.2rem;
       cursor: pointer;
      transition: background-color 0.3s ease;
      @media (max-width: 996px) {
        display: none;
      }
      &:hover {
        background-color: #c7e1f3;
      }
    }
  }

  .blueBtn {
    background-color: #214287 !important;
    color: white !important;
    transition: background-color 0.3s ease-in, color 0.3s ease-in,
      border 0.3s ease-in;

    &:hover {
      background-color: #c7e1f3 !important;
      color: black !important;
    }
  }

  .burger {
    cursor: pointer;
    z-index: 4;
    padding: 0.7em 0.6em 0.6em 0.4em;
    border: 0px solid red;
    border-radius: 50%;
    position: relative;
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
}
</style>
