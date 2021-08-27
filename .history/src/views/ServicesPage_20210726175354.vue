<template>
<div class="services">
    <Hero
    title="Sme kľúčový"
    bold="partner"
    title2="pre Vaše podnikanie"
    subtext="Našou prioritou je spokojnosť našich klientov, čo odrážajú aj dlhodobé a úúspešné spolupráce"
    buttonText="Konzultácia"
    :hideBtn2="{ hide: true }"
    :backgroundImg="{ sluzbyBg: true }"
  />
  <ThreeColumn/>
  <People/>
</div>

</template>

<script>
import Hero from '../components/Hero.vue'
import ThreeColumn from '../components/ThreeColumn.vue'
import People from '../components/People.vue'

export default {
  name: 'ServicesPage',
  components: {
    Hero,
    ThreeColumn,
    People
  }
}
</script>

<style lang="scss" scoped></style>
