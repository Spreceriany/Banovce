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
import gsap from 'gsap'
export default {

  name: 'Home',
  components: {
    Hero,
    About,
    Uspechy,
    Services
  },
  mounted() {
    gsap.set(".home",{zIndex:20})
    gsap.from(".home",{
      backgroundPosition: "120% 13%",
      ease:"power4.inOut",
      duration:3,
      delay:.5,
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

    @media(min-width:760px) and( max-width:1024px){
      background-size: 25rem;
    }

    @media(min-width:1200px){
      background-position: 70% 12%;
    }
  }
</style>
