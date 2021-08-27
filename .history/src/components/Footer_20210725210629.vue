<template>
  <div class="bg">
    <footer>
      <div class="info">
        <h3>Pripravený posunúť Vaše podnikanie na novú úroveň?</h3>
        <p>Neváhajte nás kontaktovať</p>
        <div class="grid">
          <a href="mailto:mail">Mail</a>
          <div class="icons">
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="../assets/Facebook.svg" alt="" />
            </a>
          </div>
          <a href="tel:+0917000000">0197845</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background-color: #173169;
  position: relative;
    &::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 20rem;
    background-color: #001950;
    @media(max-width:800px){
      width: unset;
    }
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

  .info {
    margin: auto;
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 2em;
    justify-content: center;
    h3 {
      font-family: Prata, serif;
      padding-bottom: 1em;
      font-size: clamp(1.2rem, 5vw, 1.7rem);
      width: 50%;
      @media (max-width: 556px) {
        width: 80%;
      }
    }
    p {
      padding-bottom: 1em;
      font-size: clamp(1rem, 5vw, 1.3rem);
      color: #fbfbfb;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: clamp(1rem, 5vw, 1.3rem);
    font-weight: bold;
  }

  .grid {
    display: grid;
    width: 50%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media (max-width: 808px) {
      grid-template-columns: 1fr;
      a {
        &:first-of-type {
          order: 1;
        }
        &:nth-of-type(2) {
          order: 2;
          margin-bottom: 1.5em;
        }
      }
      .icons {
        order: 3;
      }
    }

    > * {
      margin-bottom: 1em;
    }

    .icons {
      display: flex;
      justify-content: end;

      @media(max-width: 810px){
        display: inline;
      }
    }
    .icons > a {
      border: 1px solid #fbfbfb;
      border-radius: 50%;
      margin-right: 0.5em;
      padding: 0.3em 0.7em;

      @media(max-width:556px){

        display: inline;
      }
    }
  }
}
</style>
