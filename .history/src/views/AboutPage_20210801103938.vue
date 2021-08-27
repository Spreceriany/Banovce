<template>
  <Hero title="Podnikajte a " bold="financie" title2="nechajte na nás" subtext="Viac ako 10 rokov pomáhame našim klientov v dosahovaní svojich cieľov" :hideBtn="{ hide:true }" :hideBtn2="{ hide: true }" :backgroundImg="{ aboutBg: true }" />
  <ThreeColumn2/>
  <SluzbyGrid/>
</template>

<script>

import Hero from '../components/Hero.vue'
import ThreeColumn2 from '../components/ThreeColumn2.vue'
import SluzbyGrid from '../components/SluzbyGrid.vue'
export default {
  name: 'AboutPage',
  props: ['backgroundImg', 'hideBtn', 'hideBtn2'],
  components: {
    Hero,
    ThreeColumn2,
    SluzbyGrid
  },
  created(){
    window.scrollTo(0, 0)
  },

    mounted(){
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .bg{
    background-position: center !important;
  }
</style>
