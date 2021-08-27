<template>
  <h2>Pomôžeme vám s</h2>

  <div class="grid">
    <div class="service">
      <h3>Spracovania účtovníctva online</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>Právne služby</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>Spracovania miezd</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>Spracovanie a optimalizáciu daní z príjmov</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>Zakladanie firiem</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>E-archivácia dokladov</h3>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h3>Transferové oceňovanie</h3>
      <p>paragraph</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SluzbyGrid'
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
  .service {
    padding: 1em;

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
