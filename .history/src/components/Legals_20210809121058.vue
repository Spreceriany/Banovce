<template>
    <div class="legals">
        <p>COPYRIGHT © 2021 Economy plus s.r.o | Web solution by DEVISION</p>
        <p>Osobnú údaje | Nastavenie súkromia </p>
    </div>
</template>

<script>
export default {
    name:'Legals'
}
</script>

<style lang="scss" scoped>
    .legals{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1400px;
        padding: 0 2em;
        color:white;
        @media(max-width:700px){
            flex-direction: column;
        }
    }
</style>