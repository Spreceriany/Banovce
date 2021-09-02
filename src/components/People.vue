<template>
  <div class="people-container" v-if="data">
    <div class="imagee">
      <img :src=data.image1.filename alt="meeting image" class="clip" />
    </div>
    <div class="text">
      <span>{{ data.bold1 }}</span>
      <h2>{{ data.title1 }}</h2>
      <p>{{ data.text1 }}</p>
    </div>
  </div>

  <div class="people-container right" v-if="data">
    <div class="imagee">
      <img :src=data.image2.filename alt="meeting image" class="clip" />
    </div>
    <div class="text">
      <span>{{ data.bold2 }}</span>
      <h2>{{ data.title2 }}</h2>
      <p>{{ data.text2 }}</p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";

export default {
  name: "People",

  data() {
    return {
      data: null
    };
  },

  beforeDestroy() {
    anim().kill()
  },

  methods: {
    anim(){
         var images = gsap.utils.toArray(".imagee");
        var texts = gsap.utils.toArray(".text");
        texts.forEach(text => {
          gsap.from(text, {
            opacity: 0,
            x: -40,
            scrollTrigger: {
              trigger: text,
              start: "top bottom",
              end: "top center",
              scrub: true
            }
          });
        });

        images.forEach(image => {
          gsap.from(image, {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "+=300",
              scrub: true
            }
          });
        });
    }
  },
  mounted() {
    axios.get(
        'https://api.storyblok.com/v2/cdn/stories/o-nas-stranka-o-nas?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt'
      )
      .then(response => (this.data = response.data.story.content))
      .then(() => {
          this.anim()
      });
  }
};
</script>

<style lang="scss" scoped>
.right {
  flex-direction: row-reverse;

  .image::before {
    right: -5rem !important;
    top: -5rem;
    left: unset !important;
  }
}
.people-container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 10em 2em;
  gap: 3em;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 3em 2em;
  }
  .imagee {
    flex: 0 1 50%;
    position: relative;
    overflow: initial;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 70%;
      left: -5rem;
      top: -5rem;
      z-index: -1;
      background-image: url("../assets/dots.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      @media (max-width: 556px) {
        width: 70%;
        top: -2rem;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .text {
    align-self: flex-start;
    justify-self: flex-start;
    flex: 0 1 50%;
    span {
      font-family: "Prata", serif;
      color: #214287;
      font-size: var(--paragraph);
      padding-bottom: 0.2em;
      display: inline-block;
    }
    h2 {
      font-size: var(--heading-size);
      padding-bottom: 0.5em;
      font-weight: 200;
    }
    p {
      font-size: var(--paragraph);
      padding-bottom: 0.5em;
    }
  }
}
</style>
