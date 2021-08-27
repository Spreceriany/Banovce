<template>
  <div class="gray-bg" v-if="data">
    <div class="about-container">
      <div class="left">
        <span>{{data.bold}}</span>
        <p>
         {{data.main_text}}
        </p>
        <p>
        {{data.subtext}}
        </p>
      </div>
      <div class="right">
        <img src="../assets/about-image.png" alt="image" class="about-image"/>
      </div>
    </div>
  </div>
</template>


<script>
import gsap from "gsap";
import axios from 'axios'

export default {
  name: "About",
  mounted() {
    const t1 = gsap.timeline();
    gsap.set(".right",{autoAlpha:1})
    t1.from(".left", {
      opacity: 0,
      y: 80,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".left",
        start: "top bottom",
        end: "top top",
        scrub: true
      }
    })
    gsap.from([".right, .about-image"], {
      xPercent:gsap.utils.wrap([100,-100]),
      duration:1,
      autoAlpha:0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-image",
        start: "top 80%",
        toggleActions: 'restart none none reset',
      }
    });
  },
   data(){
    return {
      data:null
    }
  },


   mounted() {
    axios
      .get('https://api.storyblok.com/v2/cdn/stories/domovska-stranka-o-nas?version=draft&token=T8mLujNezqZvQjHW6yF0Xwtt&cv=1629121159')
      .then(response => (this.data = response.data.story.content)).then( () =>{
            const t1 = gsap.timeline();
        gsap.set(".right",{autoAlpha:1})
        t1.from(".left", {
          opacity: 0,
          y: 80,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".left",
            start: "top bottom",
            end: "top top",
            scrub: true
          }
        })
        gsap.from([".right, .about-image"], {
          xPercent:gsap.utils.wrap([100,-100]),
          duration:1,
          autoAlpha:0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-image",
            start: "top 80%",
            toggleActions: 'restart none none reset',
          }
        });
      })



  }
};
</script>

<style lang="scss" scoped>
.gray-bg {
  width: 100%;
  background-color: #fbfbfb;
}
.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  margin: auto;
  gap: 2em;
  padding: 3em 1.5em;
  padding-bottom: 15em;
  overflow: hidden;
  @media (max-width: 556px) {
    grid-template-columns: 1fr;
    padding-bottom: unset;
  }
  span {
    color: #214287;
    display: block;
    padding-bottom: 1em;
    font-size:var(--smaller-header);
    font-family: Prata;
  }

  p {
    font-size:var(--paragraph);
    line-height: 1.4em;
    &:first-of-type {
      font-weight: bold;
      padding-bottom: 1em;
    }

    &:nth-of-type(2) {
      font-size: var(--paragraph);
    }
  }

  .right{
    visibility: hidden;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;

  }
}
</style>
