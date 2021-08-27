<template>
    <div class="udaje">
        <h2>Firemné údaje</h2>
        <p>ECONOMY PLUS, s.r.o.</p>
        <p>Jesenského 68/8 957 01 Bánovce nad Bebravou</p>
        <p>IČO: 36350192
</p>
        <p>DIČ: 2022106218
</p>
        <p>IČ DPH: SK2022106218
</p>
        <p>Zapísaná v: Obchodný register Okresného súdu Trenčín</p>
        <p>Oddiel: Sro, vložka č. 16314/R</p>
    </div>
</template>

<script>
export default {
    name:'Udaje',

}
</script>

<style lang="scss" scoped>
    .udaje{
        h2{
            font-size: clamp(1.5rem, 5vw, 1.6rem);
                        padding-bottom: .5em;

        }
        > p{
            padding-bottom: .5em;
            font-size: clamp(1rem, 5vw, 1.3rem);
        }
    }
</style>