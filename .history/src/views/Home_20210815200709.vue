<template>
  <div class="home" >
    <div class="home-bg"></div>
    <pre>{{ data }}</pre>
    <Hero
      title={{data.title}}
      bold="správny"
      title2=" parter pre podnikanie"
      subtext={{data.description}}
      buttonText="Viac o nás"
      :backgroundImg="{ homeBg: true }"
      v-if="data"
    />
    <About />
    <Uspechy />
    <Services />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Uspechy from "../components/Uspechy.vue";
import Services from "../components/Services.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";
const data = ref(null);

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Uspechy,
    Services
  },

  data:{
    data: String
  },

  setup(props) {
    onMounted(async () => {
      data.value = await fetch(
        "https://api.storyblok.com/v2/cdn/stories/hero?cv=1629048939&token=T8mLujNezqZvQjHW6yF0Xwtt&version=published"
      )
        .then((response )=> response.json())
        .then(({ story }) => story.content);
    });
  },

  mounted() {
    var x = window.matchMedia("(min-width: 759px)");
    if (x.matches) {
      gsap.from(".home-bg", {
        ease: "power4.out",
        delay: 2,
        rotate: 8,
        autoAlpha: 0,
        duration: 1.3
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-bg {
  height: 100vh;
  width: 100%;
  position: absolute;
  background-image: url("../assets/block.png");
  background-position: 100% 50%;
  background-size: 30rem;
  background-repeat: no-repeat;
  @media (max-width: 759px) {
    background-image: unset;
  }

  @media (min-width: 760px) and( max-width:1024px) {
    background-size: 20rem;
    background-position: 80% 50%;
  }

  @media (min-width: 1440px) {
    background-position: 70% 50%;
  }
}
</style>
