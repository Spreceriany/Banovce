<template>
    <div class="overlay">
        <ul>
            <router-link to="/">Domov</router-link>
            <router-link :to="{ name: 'AboutPage'}" >O nás</router-link>
            <router-link :to="{ name: 'ServicesPage'}">Služby</router-link>
        </ul>

          <img src="../assets/cross.svg" alt="" class="icon">
    </div>
</template>

<script>
export default {
  name: 'Overlay'
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
    transform: translateX(100%);
    transition: transform .3s ease;
    .close {
      position: absolute;
      top: 2em;
      right: 2em;
      width: 3em;
      height: 3em;
      cursor: pointer;
    }

    .icon{
       position: absolute;
      right: 14px;
      top: 34px;
      cursor: pointer;
      z-index: 10;
      padding: 0.7em 0.6em 0.6em 0.4em;
      border: 0px solid red;
      border-radius: 50%;
      @media (min-width: 996px) {
        display: none;
      }
      width: 2rem;
    }

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
