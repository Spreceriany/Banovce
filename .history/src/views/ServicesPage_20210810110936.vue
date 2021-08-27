<template>
<div class="services-layout">
    <Hero
    title="Sme kľúčový"
    bold="partner"
    title2="pre Vaše podnikanie"
    subtext="Našou prioritou je spokojnosť našich klientov, čo odrážajú aj dlhodobé a úspešné spolupráce"
    buttonText="Konzultácia"
    :callback="scrolling"
    :hideBtn2="{ hide: true }"
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

export default {
  name: 'ServicesPage',
  components: {
    Hero,
    ThreeColumn,
    SluzbyGrid
  },

  methods:{
    scrolling(){
     document.getElementById('footer').scrollIntoView({
        behavior: "smooth"
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  .services-layout{
    overflow: hidden;
  }
</style>
