<template>
  <Hero title="Podnikajte a " bold="financie" title2="nechajte na nás" subtext="Viac ako 10 rokov pomáhame našim klientov v dosahovaní svojich cieľov" :hideBtn="{ hide:true }" :hideBtn2="{ hide: true }" :backgroundImg="{ aboutBg: true }" />
  <ThreeColumn/>
  <ServicesLayout/>
</template>

<script>

import Hero from '../components/Hero.vue'
import ThreeColumn from '../components/ThreeColumn.vue'
import ServicesLayout from '../components/ServicesLayout.vue'
export default {
  name: 'AboutPage',
  props: ['backgroundImg', 'hideBtn', 'hideBtn2'],
  components: {
    Hero,
    ThreeColumn,
    ServicesLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
