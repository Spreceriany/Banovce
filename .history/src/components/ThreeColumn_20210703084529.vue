<template>
    <div class="uspechy-container">
    <h2>Naše úspechy</h2>
    <div class="row">
      <div class="card">
        <img src="../assets/experience-icon.svg" alt="experience-icon" />
        <span>10+</span>
        <p>rokov skúseností v oblasti financovania</p>
      </div>
      <div class="card">
        <img src="../assets/thumbsUp-icon.svg" alt="thumbs-up-icon" />
        <span>500+</span>
        <p>spokojných zákazníkov</p>
      </div>
      <div class="card">
        <img src="../assets/hands-icon.svg" alt="hands-icon" />
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

</style>