<template>
  <div v-if="data">
      <Hero

    :title=data.title
    :bold="data.bold"
    :title2="data.title2"
    :subtext="data.description"
    :hideBtn="{ hide: true }"
    :hideBtn2="{ hide: true }"
    
  />
  <img :src=data.image.filename alt="" class="bggg">

  <ThreeColumn2 />
  <People />
  <Footer/>
  </div>

</template>

<script>
import Hero from "../components/Hero.vue";
import ThreeColumn2 from "../components/ThreeColumn2.vue";
import People from "../components/People.vue";
import Footer from "../views/Footer.vue";
import axios from "axios";
import gsap from 'gsap'

export default {
  name: "AboutPage",
  props: ["backgroundImg", "hideBtn", "hideBtn2"],
  components: {
    Hero,
    ThreeColumn2,
    People,
    Footer
  },
  created() {
    window.scrollTo(0, 0);
  },

    data() {
    return {
      data: null,

    };
  },


  mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/o-nas-stranka-uvodna-sekcia?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content)).then( () =>{
         gsap.from(".bggg", {autoAlpha:0, ease: "power3.out", scale:1.2, duration:1.2})
      });
  }
};
</script>

<style lang="scss" scoped>
.bggg{
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
}
</style>
