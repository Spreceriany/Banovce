<template>
    <div class="bg">
        <footer>
            </Form>
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
    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 20%;
        background-color: #001950;
        @media (max-width: 600px) {
        width: unset;
        }
    }
    footer {
        background-color: #173169;
        display: flex;
        color: white;
        min-height: 35vh;
        width: 100%;
        margin: auto;
        max-width: 1440px;
        @media (max-width: 556px) {
            min-height: 45vh;
        }
    }


}
</style>