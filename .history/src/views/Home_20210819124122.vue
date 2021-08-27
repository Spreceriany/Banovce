<template>
  <div class="home"  v-if="data" >
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
import axios from 'axios'
import StoryblokClient from 'storyblok-js-client'
const Storyblok = new StoryblokClient({accessToken:'T8mLujNezqZvQjHW6yF0Xwtt'})
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

  created(){
     window.storyblok.init({
      accessToken: 'T8mLujNezqZvQjHW6yF0Xwtt'
    })
  },

  mounted() {
    console.log( axios
      .get(Storyblok.get('cdn/stories/hero', {version:'draft'})))


    // axios
    //   .get('https://api.storyblok.com/v2/cdn/stories/hero?version=draft&token=T8mLujNezqZvQjHW6yF0Xwtt')
    //   .then(response => (this.data = response.data.story.content))
  }
};
</script>

<style lang="scss" scoped>

</style>
