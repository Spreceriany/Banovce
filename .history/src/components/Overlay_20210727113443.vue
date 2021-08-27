<template>
    <div class="overlay">
        <ul>
            <router-link to="/">Domov</router-link>
        <router-link :to="{ name: 'AboutPage'}" >O nás</router-link>
        <router-link :to="{ name: 'ServicesPage'}">Služby</router-link>
        </ul>
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
    position: fixed;
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
    z-index: 2;
    transform: translateX(100%);
    .close {
      position: absolute;
      top: 2em;
      right: 2em;
      width: 3em;
      height: 3em;
      cursor: pointer;
    }

    ul{
        list-style-type: none;
        a{
            text-decoration: none;
            font-family: "Chivo";
            text-transform: uppercase;
            color: white;
        }
        li{
            font-size: 3rem;
            padding: .2em 0;
            text-align: center;
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
