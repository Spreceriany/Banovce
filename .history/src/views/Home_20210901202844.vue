<template>
  <div class="home" v-if="data">
    <Hero
      :title=data.title
      :bold="data.bold"
      :title2="data.title2"
      :subtext="data.description"
      buttonText="Viac o nás"
      v-bind:style="{'background-image': 'url(' + data.image.filename + ')'}"
    />
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
      data: null,

    };
  },


  mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/domovska-stranka-uvodna-sekcia?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content));
  }
};
</script>

<style lang="scss" scoped></style>
