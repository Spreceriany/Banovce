<template>
  <div class="home">
  <div class="home-bg"> </div>
      <Hero title="Ten" bold ="správny" title2=" parter pre podnikanie" subtext="S nami zvládnete podnikanie jednoduchšie" buttonText="Viac o nás" :backgroundImg=" {homeBg: true} "/>
   <About/>
   <Uspechy/>
   <Services/></div>
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
    var x = window.matchMedia("(min-width: 759px)")
    if(x.matches ){
      gsap.from(".home-bg",{
        backgroundPosition: "110% 50%",
        ease:"power4.out",
        duration:3,
        delay:1,
        rotate:8,
        autoAlpha:0
      })
    }

  },

}
</script>

<style lang="scss" scoped>

  .home-bg{
    height: 100vh;
    width: 100%;
    position: absolute;
    background-image: url('../assets/block.png');
    background-position: 100% 13%;
    background-size: 30rem;
    background-repeat: no-repeat;
    @media(max-width:759px){
      background-image: unset;
    }

    @media(min-width:760px) and( max-width:1024px){
      background-size: 20rem;
      background-position: 80% 50%;

    }

    @media(min-width:1440px){
      background-position:70% 50%;;
    }
  }
</style>
