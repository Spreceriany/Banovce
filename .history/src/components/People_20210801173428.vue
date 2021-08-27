<template>
  <div class="people-container">
    <div class="image">
      <img
        src="../assets/meeting.png"
        alt="meeting image"
        class="reveal-image"
      />
      <img src="../assets/dots.svg" alt="" class="dots">
    </div>
    <div class="text">
      <span>O nás</span>
      <h2>Náš príbeh</h2>
      <p>text</p>
    </div>
  </div>

  <div class="people-container right">
    <div class="image">
      <img
        src="../assets/meeting2.png"
        alt="meeting image 2"
        class="reveal-image"
      />
    </div>
    <div class="text">
      <span>O nás</span>
      <h2>Náš príbeh</h2>
      <p>text</p>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "People",
  mounted() {
    var images = gsap.utils.toArray(" .image");
    var texts = gsap.utils.toArray(".text");

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
      });
    });

    const revealContainers = gsap.utils.toArray(".image");
    gsap.set(revealContainers, { autoAlpha: 1 });
    revealContainers.forEach((container, i) => {
      let image = container.querySelector(".reveal-image");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });

      tl.from([container, image], {
        duration: 1,
        xPercent:
          i % 2 === 0
            ? gsap.utils.wrap([-100, 100])
            : gsap.utils.wrap([100, -100]),
        ease: "power4"
      });
      // images.forEach(image => {
      //   gsap.fromTo(image, {

      //     clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)",
      //     scrollTrigger: {
      //       trigger: image,
      //       start: "top bottom",
      //       end: "top center",
      //       scrub: true
      //     }
      //   })
      // })
    });
  }
};
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
  align-items: center;
  padding: 10em 2em;
  gap: 3em;
  @media (max-width: 556px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 3em 2em;
    overflow: hidden;
  }
  .image {
    flex: 0 1 50%;
    position: relative;
    overflow: hidden;
    visibility: hidden;
    img {
      width: 100%;
      height: auto;
      position: relative;

    }

    .dots{
      position: absolute;
      width: 70%;
      height: 100%;
      left: -5rem;
      top: -5rem;
      z-index: 2;
    }

    .reveal-image{
      position: relative;
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
    }
  }

  .text {
    align-self: flex-start;
    justify-self: flex-start;
    flex: 0 1 50%;
    span {
      font-family: "Prata", serif;
      color: #214287;
      font-size: clamp(0.7rem, 5vw, 1.4rem);
      padding-bottom: 0.2em;
      display: inline-block;
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      padding-bottom: 0.5em;
    }
  }
}
</style>
