<template>
    <div class="overlay">
        <ul>
            <router-link to="/">Domov</router-link>
            <router-link :to="{ name: 'AboutPage'}" >O nás</router-link>
            <router-link :to="{ name: 'ServicesPage'}">Služby</router-link>
            <a
            @click="goto()"

            >Kontakt</a
          >
        </ul>

    </div>
</template>

<script>
export default {
  name: 'Overlay',
  methods:{
    goto(){
      document.getElementById('footer').scrollIntoView({
        behavior: "smooth"
      })
      document.body.style.overflow = initial;
    }
  }
}
</script>

<style lang="scss" scoped>
  @media only screen and (max-width:1022px){
  .overlay {
    position: absolute;
    z-index: 4;
    display: grid;
    width: 100%;
    min-height: 100vh;
    padding: 2em;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #214287;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity .3s ease;
    visibility: hidden;
    ul{
      display: flex;
      flex-direction: column;
      text-align: center;
        a{
            text-decoration: none;
            font-family: "Prata", serif;
            text-transform: uppercase;
            color: white;
            padding-bottom: 1em;
            font-size: 1.5rem;
        }
    }
  }
}

@media only screen and (min-width:1024px){
  .overlay{
    display: none;
  }
}

</style>
