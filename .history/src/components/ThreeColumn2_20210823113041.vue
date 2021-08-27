<template>
  <div class="container" v-if="data">
    <div class="uspechy-container">
      <h2 class="uspech2">
        {{data.title}}
      </h2>
      <div class="row">
        <div class="uspech-card2">
          <span>{{data.blok1}}</span>
          <p>
           {{data.text1}}
          </p>
        </div>
        <div class="uspech-card2">
          <span>{{data.blok2}}</span>
          <p>
             {{data.text2}}
          </p>
        </div>
        <div class="uspech-card2">
          <span>{{data.blok3}}</span>
          <p>
             {{data.text3}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";

const t5 = gsap.timeline();

export default {
  name: "ThreeColumn2",

  mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/o-nas-stranka-sluzby?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content))
      .then(() => {
        gsap.from(".uspech2", {
          opacity: 0,
          y: 40,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".uspech2",
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        });
        gsap.forEach(card => {
          gsap.from(card, {
            opacity: 0,
            x: -40,
            stagger: 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top center",
              scrub: true
            }
          });
        });
      });
  },

  data() {
    return {
      data: null
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #214287;
}
.uspechy-container {
  text-align: center;
  padding: 3em 2em;
  width: 100%;
  background-color: #214287;
  color: white;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 556px) {
    padding: 2em;
  }
  h2 {
    font-family: Prata, "serif";
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    padding-bottom: 1em;
  }
  .row {
    display: flex;
    justify-content: center;

    @media (max-width: 641px) {
      flex-direction: column;
    }
    .uspech-card2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 0 1 33%;
      &:not(:last-child) {
        padding-right: 2em;
      }
      @media (max-width: 556px) {
        &:not(:first-of-type) {
          padding-top: 3em;
        }
      }
      img {
        width: 3.5em;
      }
      p {
        font-size: clamp(1rem, 5vw, 1.3rem);
        text-align: left;
        color: #e4e4e4;
      }

      span {
        display: block;
        font-family: Prata;
        padding: 0.5em 0;
        color: white;
        letter-spacing: 0.05em;
        text-align: left;

        font-size: clamp(1.3rem, 5vw, 1.5rem);
      }
    }
  }
}
</style>
