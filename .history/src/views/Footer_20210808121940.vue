<template>
    <div class="bg">
        <footer>
             <Form/>
             <Udaje/>
        </footer>
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Udaje from '../components/Udaje.vue'

export default {
    name:'Footer',
    components:{
        Form,
        Udaje
    }
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
        gap: 2em;
        @media (max-width: 556px) {

            flex-direction: column;
        }
        > *{
            flex: 0 1 50%;
        }
    }


}
</style>