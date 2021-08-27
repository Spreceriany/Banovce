<template>
<div class="services-layout">
    <Hero
    title="Sme kľúčový"
    bold="partner"
    title2="pre Vaše podnikanie"
    subtext="Našou prioritou je spokojnosť našich klientov, čo odrážajú aj dlhodobé a úúspešné spolupráce"
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

export default {
  name: 'ServicesPage',
  components: {
    Hero,
    ThreeColumn,
    SluzbyGrid
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .services-layout{
    overflow: hidden;
  }
</style>
