<template>
  <div class="home" v-if="data">
    <Hero
      :title=data.title
      :bold="data.bold"
      :title2="data.title2"
      :subtext="data.description"
      buttonText="Viac o nás"
      
      
    />    
    <img :src=data.image.filename alt="" class="bggg">

    <About />
    <Uspechy />
    <Services />
    <Footer/>

  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Uspechy from "../components/Uspechy.vue";
import Services from "../components/Services.vue";
import axios from "axios";
import Footer from "../views/Footer.vue";
import gsap from 'gsap'
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Uspechy,
    Services,
    Footer
  },

  data() {
    return {
      data: null
    };
  },

 

  mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/domovska-stranka-uvodna-sekcia?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content)).then( () =>{
            gsap.from(".bggg", {autoAlpha:0, ease: "power3.out", scale:1.2, duration:1.2})

      });
  }
};
</script>

<style lang="scss" scoped>
:root{
    --background: url('{{data.image.filename}}');
}

  .bggg{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
}
    
  
</style>
