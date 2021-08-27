<template>
  <header>
    <nav>
      <a href="#">
        <img src="../assets/logo.svg" alt="logo" />
      </a>
      <ul>
        <router-link to="/">Domov</router-link>
        <router-link :to="{ name: 'AboutPage' }">O nás</router-link>
        <router-link :to="{ name: 'ServicesPage' }">Služby</router-link>
      </ul>
      <a
        href="#"
        class="contact-btn"
        :class="{
          blueBtn: $route.path == '/aboutpage' || $route.path == '/servicespage'
        }"
        >Kontakt</a
      >
      <div class="burger" v-on:click="toggle">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
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
