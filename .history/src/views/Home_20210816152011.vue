<template>
  <div class="home"  v-if="data" >
    <div class="home-bg"  v-if="data"></div>

    <Hero
      :title=data.title
      :bold=data.bold
      :title2=data.title2
      :subtext=data.description
      buttonText="Viac o nás"
      :backgroundImg="{ homeBg: true }"

    />
    <About />
    <Uspechy />
    <Services />
  </div>
</template>
<!-- <script setup>
// import { ref, onMounted } from "vue";
// const data = ref(null);

// onMounted(async () =>{
//   data.value = await fetch('https://api.storyblok.com/v2/cdn/stories/hero?version=draft&token=T8mLujNezqZvQjHW6yF0Xwtt&cv=1629107381').then( (response) => response.json()).then( ({story}) =>story.content)
// })
// </script>
-->
<script>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Uspechy from "../components/Uspechy.vue";
import Services from "../components/Services.vue";
import gsap from "gsap";
import axios from 'axios'
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Uspechy,
    Services
  },

  data(){
    return {
      data:null
    }
  },

  mounted() {
    axios
      .get('https://api.storyblok.com/v2/cdn/stories/hero?version=draft&token=T8mLujNezqZvQjHW6yF0Xwtt&cv=1629107381')
      .then(response => (this.data = response.data.story.content)).then()



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
