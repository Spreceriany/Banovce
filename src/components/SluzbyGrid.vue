<template>
  <div class="sluzby" v-if="data">
    <h2 class="sluzby2-title">{{data.titulok}}</h2>
    <div class="grid">
      <div class="service-item">
        <h3>{{data.sluzba1}}</h3>
        <p>{{data.text1}}</p>
      </div>
      <div class="service-item">
        <h3>{{data.sluzba2}}</h3>
        <p>{{data.text2}}</p>
      </div>
      <div class="service-item">
       <h3>{{data.sluzba3}}</h3>
        <p>{{data.text3}}</p>
      </div>
      <div class="service-item">
        <h3>{{data.sluzba4}}</h3>
        <p>{{data.text4}}</p>
      </div>
      <div class="service-item">
       <h3>{{data.sluzba5}}</h3>
        <p>{{data.text5}}</p>
      </div>
      <div class="service-item">
        <h3>{{data.sluzba6}}</h3>
        <p>{{data.text6}}</p>
      </div>
      <div class="service-item">
        <h3>{{data.sluzba7}}</h3>
        <p>{{data.text7}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";

export default {
  name: "SluzbyGrid",
  data() {
    return {
      data: null
    };
  },

  mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/sluzby-stranka-vsetky-sluzby?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content))
      .then(() => {
        const t4 = gsap.timeline();
        var items = gsap.utils.toArray(".service-item");

        t4.from(".sluzby2-title", {
          opacity: 0,
          y: 40,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".sluzby2-title",
            start: "top bottom",
            end: "top center",
            scrub: true
          }
        });
        items.forEach(item => {
          gsap.from(item, {
            opacity: 0,
            x: -40,
            stagger: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "top center",
              scrub: true
            }
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-top: 1.5em;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-family: Prata, "serif";
}
.grid {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 5em 2em;
  position: relative;
  z-index: 0;

  @media (max-width: 556px) {
    padding: 1.5em 2em;
    overflow-x: hidden;
  }
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/dots.svg");
    background-size: cover;
    background-repeat: no-repeat;
    transform: translate(20deg);
    height: 20rem;
    width: 20rem;
    z-index: -1;
    top: 0;
    left: -20%;
    display: inline-block;
    @media (max-width: 556px) {
      right: -70%;
      bottom: 0;
      top: unset;
      left: unset;
    }
  }
  .service-item {
    padding: 1em 1em 1em 0;

    h3 {
      color: #214287;
      font-family: Prata, "serif";
      font-size: clamp(1.3rem, 5vw, 2rem);

      @media (max-width: 556px) {
        padding: 0 3em 0.5em 0;
      }
    }
  }
}
</style>
