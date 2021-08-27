<template>
    <div class="bg">
        <footer>
             <Form/>
        </footer>
    </div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
    name:'Footer',
    components:{
        Form
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
        min-height: 35vh;
        width: 100%;
        margin: auto;
        max-width: 1440px;
        padding: 0 2em;
        display: flex;
        @media (max-width: 556px) {
            min-height: 45vh;
        }
    }


}
</style>