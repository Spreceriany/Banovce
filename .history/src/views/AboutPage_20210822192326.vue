<template>
  <Hero
   :title=data.title
    :bold="data.bold"
    :title2="data.title2"
    :subtext="data.description"
    :hideBtn="{ hide: true }"
    :hideBtn2="{ hide: true }"
    :backgroundImg="{ aboutBg: true }"
  />
  <ThreeColumn2 />
  <People />
</template>

<script>
import Hero from "../components/Hero.vue";
import ThreeColumn2 from "../components/ThreeColumn2.vue";
import People from "../components/People.vue";
export default {
  name: "AboutPage",
  props: ["backgroundImg", "hideBtn", "hideBtn2"],
  components: {
    Hero,
    ThreeColumn2,
    People
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
      .then(response => (this.data = response.data.story.content));
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-position: center !important;
}
</style>
