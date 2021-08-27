<template>
  <div class="sluzby">
    <h2 class="sluzby-title">Pomôžeme vám s</h2>
  <div class="grid">
    <div class="service-item">
      <h3>Spracovania účtovníctva online</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>Právne služby</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>Spracovania miezd</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>Spracovanie a optimalizáciu daní z príjmov</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>Zakladanie firiem</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>E-archivácia dokladov</h3>
      <p>paragraph</p>
    </div>
    <div class="service-item">
      <h3>Transferové oceňovanie</h3>
      <p>paragraph</p>
    </div>
  </div>
  </div>

</template>

<script>
import gsap from 'gsap'
export default {
  name: 'SluzbyGrid',
  mounted(){
    const t4 = gsap.timeline()
    var items = gsap.utils.toArray(".service-item");


      items.forEach(item => {
      gsap.from(item, {
        opacity: 0,
        x: -40,
        stagger: 0.3,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      });
    });
  },


}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-top: 1.5em;
  font-size: clamp(1.8rem,5vw,3rem);
  font-family: Prata, "serif";
}
.grid {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3em 2em;
  position: relative;
  z-index: 0;

  @media(max-width:556px){
    padding: 1.5em 2em;
    overflow-x: hidden;
  }
  &::before {
    content: "";
    position: absolute;
    background-image: url("../assets/dots.svg");
    background-size: cover;
    background-repeat: no-repeat;
    transform: translate(20deg);
    height: 20rem;
    width: 20rem;
    z-index: -1;
    top: 0;
    left: -20%;
    display: inline-block;
    @media (max-width: 556px) {
      right: -70%;
      bottom: 0;
      top: unset;
      left: unset;
    }
  }
  .service-item {
    padding: 1em 1em 1em 0;

    h3 {
      color: #214287;
      font-family: Prata, "serif";
      font-size: clamp(1.3rem, 5vw, 2rem);

      @media (max-width: 556px) {
        padding: 0 3em 0.5em 0;
      }
    }
  }
}
</style>
