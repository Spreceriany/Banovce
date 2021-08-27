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
    :backgroundImg="{ sluzbyBg: true }"
  />
  <ThreeColumn/>
  <SluzbyGrid/>
</div>

</template>

<script>
import Hero from '../components/Hero.vue'
import ThreeColumn from '../components/ThreeColumn.vue'
import SluzbyGrid from '../components/SluzbyGrid.vue'
import axios from "axios";
import Footer from "../views/Footer.vue";

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
    .then(response => (this.data = response.data.story.content));
  }
}
</script>

<style lang="scss" scoped>
  .services-layout{
    overflow: hidden;
  }
</style>
