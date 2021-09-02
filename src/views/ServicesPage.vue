<template>
<div class="services-layout" v-if="data">
    <Hero
   :title=data.title
    :bold="data.bold"
    :title2="data.title2"
    :subtext="data.description"
    buttonText="Konzultácia"
    :hideBtn2="{ hide: true }"
    :hideBtn="{ hide: true }"
   
  />
  <img :src=data.image.filename alt="" class="bggg">

  <ThreeColumn/>
  <SluzbyGrid/>
  <Footer/>
</div>

</template>

<script>
import Hero from '../components/Hero.vue'
import ThreeColumn from '../components/ThreeColumn.vue'
import SluzbyGrid from '../components/SluzbyGrid.vue'
import axios from "axios";
import Footer from "../views/Footer.vue";
import gsap from 'gsap'
export default {
  name: 'ServicesPage',
  components: {
    Hero,
    ThreeColumn,
    SluzbyGrid,
    Footer
  },

  data() {
    return {
      data:null
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    axios
    .get(
      "https://api.storyblok.com/v2/cdn/stories/sluzby-stranka-uvodnka-sekcia?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
    )
    .then(response => (this.data = response.data.story.content)).then( ()=>{
         gsap.from(".bggg", {autoAlpha:0, ease: "power3.out", scale:1.2, duration:1.2})

    });
  }
}
</script>

<style lang="scss" scoped>
  .services-layout{
    overflow: hidden;
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
