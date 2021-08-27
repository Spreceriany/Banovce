<template>
  <Header/>
  <main>
    <Hero/>
    <About/>
    <Uspechy/>
  </main>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Uspechy from './components/Uspechy.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Uspechy,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:  'Lato','Prata', serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
