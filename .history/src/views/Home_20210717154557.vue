<template>
  <div class="home">
   <Hero title="Ten" bold ="správny" title2=" parter pre podnikanie" subtext="S nami zvládnete podnikanie jednoduchšie" buttonText="Viac o nás" :backgroundImg=" {homeBg: true} "/>
   <About/>
   <Uspechy/>
   <Services/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Uspechy from '../components/Uspechy.vue'
import Services from '../components/Services.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Uspechy,
    Services
  }
}
</script>

<style lang="scss" scoped>
  .home{
    background-image: url('../assets/block.png');
    background-position: right;
    background-size: contain;
  }
</style>
