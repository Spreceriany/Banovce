<template>
    <h2>Pomôžeme vám s</h2>

    <div class="services">
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
  name: 'ServicesLayout'
}
</script>

<style lang="scss" scoped>

h2{
      text-align: center;
      padding-top: 3em;
    }
.services {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    padding: 3em 2em;

    .service {
        &:last-of-type {
            justify-self: center;
        }
    }

}
</style>
