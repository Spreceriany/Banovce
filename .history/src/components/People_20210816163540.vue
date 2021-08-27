<template>
  <div class="people-container">
    <div class="image">
      <img src="../assets/meeting.png" alt="meeting image" class="clip" />
    </div>
    <div class="text">
      <span>O nás</span>
      <h2>Náš príbeh</h2>
      <p>Naše skúsenosti v oblasti financií sme začali naberať od roku 2005.  Postupom času sa nám podarilo pretransformovať na stredne veľkú spoločnosť, ponúkajúcu účtovné služby.  </p>
      <p> V súčastnosti sme stabilná, zdravá spoločnosť, ktorá neustále zväčšuje svoje portfólio zamerania, vďaka čomu vieme svojim klientom poskytovať detailne široké spektrum služieb.</p>
    </div>
  </div>

  <div class="people-container right">
    <div class="image">
      <img src="../assets/meeting2.png" alt="meeting image" class="clip" />
    </div>
    <div class="text">
      <span>O nás</span>
      <h2>Naša misia</h2>
      <p>Našou snahou je neustále posúvanie a skvalitňovanie poskytujúcich služieb. Našim cieľom je byť pre klientov stabilný partner a opora pri podnikaní. </p>
      <p>Sme dynamická firma, ktorá ide ruka v ruke s dobou, preto presúvame svoje podnikanie do online prostredia a digitalizujeme naše služby, vďaka čomu prinášame klientom tie najmodernejšie postupy a riešenia ich problémov.</p>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'People',
  mounted(){
    const t7 = gsap.timeline();
    var images = gsap.utils.toArray(".image");
    var texts = gsap.utils.toArray(".text")

    texts.forEach(text => {
      gsap.from(text, {
        opacity: 0,
        x: -40,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      })
    })

    images.forEach(image => {
      gsap.from(image, {

        opacity:0,
        duration:1,
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "top center",
          scrub: true
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.right {
  flex-direction: row-reverse;

  .image::before {
    right: -5rem !important;
    top: -5rem;
    left: unset !important;
  }
}
.people-container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 10em 2em;
  gap: 3em;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 3em 2em;
  }
  .image {
    flex: 0 1 50%;
    position: relative;
    overflow: initial;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 70%;
      left: -5rem;
      top: -5rem;
      z-index: -1;
      background-image: url("../assets/dots.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      @media (max-width: 556px) {
        width: 70%;
        top: -2rem;
      }
    }
    .clip {

    }
    img {
      width: 100%;
      height: auto;
    }
  }

  .text {
    align-self: flex-start;
    justify-self: flex-start;
    flex: 0 1 50%;
    span {
      font-family: "Prata", serif;
      color: #214287;
      font-size: var(--paragraph);
      padding-bottom: 0.2em;
      display: inline-block;
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      padding-bottom: 0.5em;
    }
    p{
      font-size: clamp(1rem, 5vw, 1.3rem);
      padding-bottom: .5em;
    }
  }
}
</style>
