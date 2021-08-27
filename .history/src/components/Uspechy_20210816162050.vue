<template>
  <div class="uspechy-container">
    <h2 class="uspech-title">Naše úspechy</h2>
    <div class="row">
      <div class="card">
        <img src="../assets/experience-icon.svg" alt="experience-icon" />
        <span class="prve">25+</span>
        <p>rokov skúseností v oblasti poskytovania
ekonomických služieb</p>
      </div>
      <div class="card">
        <img src="../assets/thumbsUp-icon.svg" alt="thumbs-up-icon" />
        <span class="druhe">200+</span>
        <p>spokojných zákazníkov</p>
      </div>
      <div class="card">
        <img src="../assets/hands-icon.svg" alt="hands-icon" />
        <span class="tretie">100000+</span>
        <p>spolupracujúcich firiem</p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Uspechy',
  mounted(){
    const t6 = gsap.timeline()
    const card = gsap.utils.toArray(".card");

    var Cont ={val:0}, Prve = 15, Druhe = 500, Tretie = 20
    gsap.to(Cont,{var:10,onUpdate: ()=>{}})

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
    font-size: var(--smaller-header);
    padding-bottom: 1em;

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
        font-size: clamp(1rem, 5vw, 1.3rem);

      }

      span {
        display: block;
        font-family: Prata;
        padding: 0.5em 0;
        color: white;
        font-size: clamp(1.3rem, 5vw, 1.5rem);
      }
    }
  }
}
</style>
