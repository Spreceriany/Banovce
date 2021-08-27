<template>
  <div class="bg" :class="backgroundImg" ref="bg"></div>
  <div class="hero-container">
    <div class="left-side">
      <h1 ref="title">
        {{ title }} <span class="blue">{{ bold }}</span> {{ title2 }}
      </h1>
      <p ref="subtext">{{ subtext }}</p>
      <div class="btn-group" ref="btns">
        <router-link :to="{ name: 'AboutPage' }" :class="hideBtn">{{
          buttonText
        }}</router-link>
        <router-link :to="{ name: 'ServicesPage' }" :class="hideBtn2"
          >Služby</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
const t2 = gsap.timeline({ defaults: { duration: 0.8 } });

export default {
  name: "Hero",
  props: [
    "title",
    "bold",
    "title2",
    "subtext",
    "buttonText",
    "hideBtn",
    "hideBtn2",
    "backgroundImg"
  ],
  method: { type: Function },

  mounted() {
    const { title, subtext, bg, btns } = this.$refs;
    this.scroll();
    t2.from(bg, {
      opacity: 0,
      ease: "power3.out",
      delay: 0.4,
      scale: 1.1,
      duration: 1.5
    })
      .from(title, { opacity: 0, y: -10, ease: "power2.out" }, "-=.5")
      .from(subtext, { opacity: 0 }, "-=.5")
      .from(btns, { opacity: 0 }, "-=0.5");
  }
};
</script>

<style scoped lang="scss">
.aboutBg {
  background-image: url("../assets/about-bg-2.png");
  color: white;
  background-position: center !important;
  background-size: cover !important;
}
.sluzbyBg {
  background-image: url("../assets/about-bg.png");
  color: white;
  background-position: center !important;
  background-size: cover !important;
}

.homeBg {
  background-image: url("../assets/cool-background 1.svg");
  background-position: center;
}

.bg {
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  height: calc(100vh - 1em);
  position: absolute;
  z-index: -1;

  @media (max-width: 556px) {
    background-size: cover;
    background-position: -15% 25%;
  }

  @media (max-width: 996px) {
    background-position: -20%;
    background-size: cover;
  }

  @media (max-width: 1440px) {
    background-position: 34vw;
    background-size: cover;
  }
}
.hero-container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  height: calc(100vh - 1em);
  align-items: center;

  .left-side {
    flex: 0 1 50%;
    padding-left: 2em;
    @media (max-width: 556px) {
      flex: 0 1 90%;
    }
  }
  h1 {
    font-family: Prata;
    font-size: clamp(1.8rem, 5vw, 3rem);
    padding-bottom: 0.5em;
  }

  p {
    font-size: clamp(1rem, 5vw, 1.3rem);
    padding-bottom: 0.5em;
  }

  .blue {
    color: #214287;
    font-family: Prata;
  }

  .btn-group {
    margin-top: 1rem;
    display: flex;
    gap: 1em;
    z-index: 6;
    position: relative;
    @media (max-width: 556px) {
      gap: 0.5em;
    }

    a {
      transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
      font-weight: bold;
      &:hover {
        &:first-child {
          background-color: #c7e1f3;
          color: black;
        }
        &:nth-child(2) {
          background-color: #c7e1f3;
          color: black;
          border: 1px solid #c7e1f3;
        }
      }
    }
    .hide {
      display: none;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      border-radius: 0.15em;
      font-size: 1.2rem;
      padding: 0.7em 1em;
      &:first-of-type {
        background-color: #214287;
        color: white;
      }
      &:nth-of-type(2) {
        border: 1px solid #214287;
        color: #214287;
      }

      @media (max-width: 556px) {
        padding: 1em;
        font-size: 1.1rem;

        &:nth-of-type(2) {
          border: 1px solid #214287;
          color: #214287;
          padding: 1em;
        }
      }
    }
  }
}
</style>
