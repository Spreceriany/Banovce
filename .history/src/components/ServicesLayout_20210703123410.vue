<template>
  <div class="services">
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
    <div class="service">
      <h2>Nadpis</h2>
      <p>paragraph</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesLayout'
}
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
  max-width: 1440px;
  margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	justify-items: center;
}
</style>
