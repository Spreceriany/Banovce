<template>
    <div class="bg" id="footer"   >
        <footer>
             <Form/>
             <Udaje/>

        </footer>
        <div id="legal">

        </div>
    </div>
</template>

<script>
import Form from '../components/Form.vue'
import Udaje from '../components/Udaje.vue'
import axios from 'axios'

export default {
    name:'Footer',
    components:{
        Form,
        Udaje,
    },

    data() {
        return {
            isLoaded: false
        }
    },

    mounted() {
    axios
      .get(
        "https://api.storyblok.com/v2/cdn/stories/o-nas-stranka-uvodna-sekcia?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt"
      )
      .then(response => (this.data = response.data.story.content));
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