<template>
    <div class="uspechy-container">
    <h2>Naše úspechy</h2>
    <div class="row">
      <div class="card">
        <span>10+</span>
        <p>rokov skúseností v oblasti financovania</p>
      </div>
      <div class="card">
        <span>500+</span>
        <p>spokojných zákazníkov</p>
      </div>
      <div class="card">
        <span>20+</span>
        <p>spolupracujúcich firiem</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColumn',
  props: ['title']
}
</script>

<style lang="scss" scoped>

  .uspechy-container {
  text-align: center;
  padding: 3em 2em;
  width: 100%;
  background-color: #214287;
  margin: -10em auto 0 auto;
  color: white;
  @media(max-width:556px){
    padding-top: 10em;
    margin: -9em auto 0 auto;

  }
  h2 {
    font-family: Prata, "serif";
    font-size: clamp(1.8rem,5vw,3rem);
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
        font-size: 2rem;
      }
    }
  }
}
</style>
