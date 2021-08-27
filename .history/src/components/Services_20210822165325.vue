<template>
  <div class="services-container" v-if="data">
    <div class="left-service">
      <h3>{{data.title}}</h3>
      <p>

          {{data.subtext}}

      </p>
    </div>

    <div class="right-service">
      <div class="service">
        <p>{{data.blok1}}</p>
        <h4>{{data.headline1}}</h4>
        <p>
         {{data.text1}}
        </p>
        <router-link to="/aboutpage"
          >Čítať viac <span class="arrow">></span>
        </router-link>
      </div>
      <div class="service">
        <p>{{data.blok2}}</p>
        <h4>{{data.headline2}}</h4>
        <p>
         {{data.text2}}
        </p>
        <router-link to="/aboutpage"
          >Čítať viac <span class="arrow">></span>
        </router-link>
      </div>
      <div class="service">
        <p>{{data.blok3}}</p>
        <h4>{{data.headline3}}</h4>
        <p>
          {{data.text3}}
        </p>
        <router-link to="/aboutpage"
          >Čítať viac <span class="arrow">></span>
        </router-link>
      </div>
      <div class="service">
        <p>{{data.blok4}}</p>
        <h4>{{data.headline4}}</h4>
        <p>
          {{data.text4}}
        </p>
        <router-link to="/aboutpage"
          >Čítať viac <span class="arrow">></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from 'axios'

export default {
  name: "Services",

  data(){
    return {
      data:null
    }
  },

  mounted() {
    axios.get('https://api.storyblok.com/v2/cdn/stories/domovska-stranka-sluzby?version=draft&token=ULhggiK1mlwtAQretJ4Snwtt&cv=1629642933')
    .then(response => (this.data = response.data.story.content)).then( () =>{
      const t3 = gsap.timeline();
      var services = gsap.utils.toArray(".service");
      t3.from(".left-service", {
        opacity: 0,
        y: -40,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".left-service",
          start: "top bottom",
          end: "top top",
          scrub: true
        }
      });

      services.forEach(service => {
        gsap.from(service, {
          opacity: 0,
          x: -40,
          stagger: 0.2,
          scrollTrigger: {
            trigger: service,
            start: "top bottom",
            end: "top center",
            scrub: true
          }
        });
      });
      })
  }
};
</script>

<style lang="scss" scoped>
.services-container {
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 7em 1.5em;

  @media (max-width: 996px) {
    flex-direction: column;
    padding: 3em 1.5em;
  }

  .left-service {
    @media (max-width: 996px) {
      margin-bottom: 1em;
    }
    h3 {
      font-size: var(--heading-size);
      font-family: Prata, "serif";
      color: #214287;
      font-weight: 200;
      margin-bottom: 0.5em;
    }

    p {
      font-size:var(--paragraph);
      max-width: 100%;
      font-weight: bold;
      @media (min-width: 556px) {
        width: 70%;
      }
    }
  }
  .right-service {
    display: grid;

    grid-template-columns: 1fr 1fr;
    gap: 3em;
    position: relative;
    line-height: 1.5em;
    &::after {
      content: "";
      position: absolute;
      width: 0.1px;
      height: 100%;
      top: 0;
      left: 50%;
      border: 0.5px solid rgba(0, 0, 0, 0.03);
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.005px;
      top: 50%;
      left: 0;
      border: 0.5px solid rgba(0, 0, 0, 0.03);
    }

    @media (max-width: 556px) {
      &::before,
      &::after {
        all: unset;
      }

      grid-template-columns: 1fr;
      gap: 1em;
    }

    p {
      padding: 0.7em 0;
      font-size:var(--paragraph);
      line-height: 1.35em;
      &:first-of-type {
        color: #214287;
        font-family: Prata, "serif";
      }

    }

    h4 {
      font-size: var(--smaller-header);
      line-height: 1em;
    }

    .arrow {
      transition: transform 0.3s ease;
      display: inline-block;
      transform: translateY(1px);
    }

    a {
      text-decoration: none;
      color: #214287;
      font-size: var(--paragraph);

      &:hover .arrow {
        transform: translateX(7px);
      }
    }

    @media (max-width: 556px) {
      .service {
        position: relative;
        padding: 1em 0;
        &:nth-child(-n + 3) {
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 0.005px;
            bottom: -17px;
            left: 0;
            border: 0.5px solid rgba(0, 0, 0, 0.03);
          }
        }
      }
    }
  }
}
</style>
