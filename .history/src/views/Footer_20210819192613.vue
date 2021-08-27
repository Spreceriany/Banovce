<template>
    <div class="bg" id="footer" v-if="isLoaded">
        <footer>
             <Form/>
             <Udaje/>

        </footer>
        <Legals/>
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Udaje from '../components/Udaje.vue'
import Legals from '../components/Legals.vue'


export default {
    name:'Footer',
    components:{
        Form,
        Udaje,
        Legals
    },

    data() {
        return {
            isLoaded: false
        }
    },

    mounted() {
        setTimeout(() => { this.isLoaded = true }, 4000)
    },

   created() {

   },
}
</script>

<style lang="scss" scoped>
    .bg {
    width: 100%;
    background-color: #173169;
    position: relative;

    footer {
        background-color: #173169;
        display: flex;
        color: white;
        width: 100%;
        margin: auto;
        max-width: 1440px;
        padding: 2em;
        gap: 8em;
        @media (max-width: 900px) {
            gap:2em;
            flex-direction: column;
        }
        > div{
            flex: 0 1 49%;
        }
    }

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }


}
</style>