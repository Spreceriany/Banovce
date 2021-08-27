<template>
  <div class="gray-bg">
    <div class="about-container">
      <div class="left">
        <span>O nás</span>
        <p>
          Zameranie našej spoločnosti je komplexné poskytovanie ekonomických
          služieb pre podnikajúce a nepodnikajúce subjekty.
        </p>
        <p>
          Sme pripravení spoľahlivo poradiť a účtovať, optimalizovať a
          kontrolovať Váš subjekt. Ponúkame Vám priebežný prehľad o Vašej
          ekonomickej výkonnosti a podporu pre rozvoj Vášho podnikania.
        </p>
      </div>
      <div class="right">
        <img src="../assets/about-image.png" alt="image" class="about-image"/>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";


export default {
  name: "About",
  mounted() {
    const t1 = gsap.timeline();
    gsap.set(".right",{autoAlpha:1})
    t1.from(".left", {
      opacity: 0,
      y: 80,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".left",
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    }).from([".right, .about-image"], {
      xPercent:gsap.utils.wrap([100,-100]),
      duration:1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top bottom",
        end: "top top",
        toggleActions: 'play none none reset',
      }
    });
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.gray-bg {
  width: 100%;
  background-color: #fbfbfb;
}
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  margin: auto;
  gap: 2em;
  padding: 3em 1.5em;
  padding-bottom: 15em;
  overflow: hidden;
  @media (max-width: 556px) {
    grid-template-columns: 1fr;
    padding-bottom: unset;
  }
  span {
    color: #214287;
    display: block;
    padding-bottom: 1em;
    font-size: clamp(1.2rem, 5vw, 1.5rem);
    font-family: Prata;
  }

  p {
    font-size: clamp(1.5rem, 5vw, 1.6rem);
    line-height: 1.4em;
    &:first-of-type {
      font-weight: bold;
      padding-bottom: 1em;
    }

    &:nth-of-type(2) {
      font-size: clamp(1.1rem, 5vw, 1.3rem);
    }
  }

  .right{
    visibility: hidden;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;

  }
}
</style>
