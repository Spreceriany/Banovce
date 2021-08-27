<template>
    <div class="legals">
        <p>COPYRIGHT © 2021 Economy plus s.r.o | Web solution by DEVISION</p>

             <a href="javascript:void(0);" aria-label="View cookie settings" data-cc="c-settings">Nastavenia súkromia</a>


        <p>Osobnú údaje | </p>
    </div>
</template>

<script>
cc.run();
import cc from 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.4.7/dist/cookieconsent.js'
export default {
    name:'Legals',


    mounted() {
        var cc = initCookieConsent();

    },
}
</script>

<style lang="scss" scoped>
    .legals{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1440px;
        padding: 0 2em;
        color:white;
        @media(max-width:800px){
            flex-direction: column;
            padding: 0 2em;
        }
        p{
            padding-bottom: 2em;
            font-size: var(--paragraph);
            a{
                font-size: var(--paragraph);
                color: white;
                text-decoration: none;
            }
        }
    }
</style>