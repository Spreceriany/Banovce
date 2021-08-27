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
  },
  mounted() {
    gsap.from(".home",{
      opacity:0,
      duration:3
    })
  },
}
</script>

<style lang="scss" scoped>
  .home{
    background-image: url('../assets/block.png');
    background-position: 100% 13%;
    background-size: 30rem;
    background-repeat: no-repeat;

    @media(max-width:759px){
      background-image: unset;
    }

    @media(min-width:1200px){
      background-position: 70% 12%;
    }
  }
</style>
