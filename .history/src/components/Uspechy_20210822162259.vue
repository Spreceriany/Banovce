<template>
  <div class="uspechy-container">
    <h2 class="uspech-title">{{data.title}}</h2>
    <div class="row">
      <div class="card">
        <img src="../assets/experience-icon.svg" alt="experience-icon" />
        <span class="prve">{{data.year_1}}</span>
        <p>{{data.success_1}}</p>
      </div>
      <div class="card">
        <img src="../assets/thumbsUp-icon.svg" alt="thumbs-up-icon" />
        <span class="druhe">{{data.year_2}}</span>
        <p>{{data.success_2}}</p>
      </div>
      <div class="card">
        <img src="../assets/hands-icon.svg" alt="hands-icon" />
        <span class="tretie">{{data.year_3}}</span>
        <p>{{data.success_3}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import axios from 'axios'

export default {
  name: 'Uspechy',
  mounted(){
    const t6 = gsap.timeline()
    const card = gsap.utils.toArray(".card");

    axios.get('https://api.storyblok.com/v2/cdn/stories/domovska-stranka-uspechy?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt')
    .then(response => (this.data = response.data.story.content)).then( () =>{
         t6.from(".uspech-title",{
      opacity:0,
      y:-70,
      duration:1,
      scrollTrigger:{
        trigger:".uspech-title",
        start: "top bottom",
        end: "top center",
        scrub:true
      }
    })

    card.forEach((c) =>{
      gsap.from(c,{
        opacity:0,
        x:-40,
        stagger:0.2,
        scrollTrigger:{
          trigger:c,
          start: "top bottom",
          end: "top center",
          scrub:true
        }
      })
    })
    })

  }
}
</script>

<style lang="scss" scoped>
.uspechy-container {
  text-align: center;
  padding: 3em 2em;
  width: 100%;
  background-color: #214287;
  max-width: calc(1440px - 2em);
  margin: -10em auto 0 auto;
  color: white;

  @media(max-width:556px){
    padding-top: 10em;
    margin: -9em auto 0 auto;

  }
  h2 {
    font-family: Prata, "serif";
    font-size: var(--heading-size);
    padding-bottom: 1em;
    font-weight: 200;
          @media(max-width:556px){
            margin-top: 1em;
          }
  }
  .row {
    display: flex;
    justify-content: space-between;

    @media (max-width: 556px) {
      flex-direction: column;

    }
    .card {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 0 1 33%;
      @media(max-width:556px){
        &:not(:first-of-type){
          padding-top: 3em;
        }
      }
      img {
        width: 3.5em;
      }
      p{
        font-size: var(--paragraph);

      }

      span {
        display: block;
        font-family: Prata;
        padding: 0.5em 0;
        color: white;
        font-size: var(--smaller-header);
      }
    }
  }
}
</style>
