<template>
    <div class="bg" :class="backgroundImg">
    </div>
    <div class="hero-container">
      <div class="left-side">
        <h1>{{title}} <span class="blue">{{bold}}</span> {{title2}} </h1>
        <p>{{subtext}}</p>
        <div class="btn-group" >
          <router-link to="/AboutPage" :class="hideBtn">{{buttonText}}</router-link>
          <router-link to="/ServicesPage" :class="hideBtn2">Služby</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Hero',

  props: ['title', 'bold', 'title2', 'subtext', 'buttonText', 'hideBtn', 'hideBtn2', 'backgroundImg']
}

</script>

<style scoped lang="scss">

  .aboutBg{
    background-image: url('../assets/about-bg.png');
    color:white;
    background-position: center !important;
    background-size: cover !important;

  }

  .homeBg{
    background-image: url('../assets/cool-background 1.svg');
    background-position: center;
  }

  .bg{
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    height: calc(100vh - 1em);
    position: absolute;
    z-index: -1;

    @media(max-width:556px){
      background-size: cover;
      background-position: -15% 25%;
    }

    @media(max-width:996px){
      background-position: -20%;
      background-size: cover;

    }

    @media(max-width:1440px){
      background-position: 34vw;
      background-size: cover;

    }
  }
  .hero-container{
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;
    height: calc(100vh - 1em);
    align-items: center;

    .left-side{
      flex: 0 1 50%;
      padding-left: 2em;
      @media (max-width:556px) {
        flex: 0 1 80%;
      }
    }
    h1{
      font-family: Prata;
      font-size: clamp(1.8rem,5vw,3rem);
      padding-bottom: .5em;
    }

    p{
      font-size: clamp(1rem, 5vw, 1.3rem);
      padding-bottom: .5em;
    }

    .blue {
      color: #214287;
      font-family: Prata;
    }

    .btn-group{
      margin-top: 2rem;
      display: flex;
      gap:1em;

      @media(max-width:556px){
        gap:.5em;
      }

      a{
        transition:
         background-color .3s ease-in,
         color .3s ease-in,
         border .3s ease-in
        ;
        &:hover{
          &:first-child{
            background-color: #C7E1F3;
            color:black;
          }
          &:nth-child(2){
            background-color: #C7E1F3;
            color: black;
            border: 1px solid #C7E1F3;
          }
        }
      }
      .hide{
        display:none;
      }
      a{
        text-decoration: none;
        padding: 1em 1.6em;
        cursor: pointer;
        border-radius: .15em;
        font-size: 1.2rem;
        &:first-of-type{
          background-color: #214287;
          color:white;
        }
        &:nth-of-type(2){
          border:1px solid #214287;
          color:#214287;
          padding:1em 1.9em;
        }

        @media(max-width:556px){
          padding:1em 1.3em;
          &:nth-of-type(2){
            border:1px solid #214287;
            color:#214287;
            padding:1em 1.7em;
         }
        }
      }
    }
  }
</style>
