<template>
    <div class="people-container">
      <div class="image">
        <img src="../assets/meeting.png" alt="meeting image">
      </div>
      <div class="text">
        <span>O nás</span>
        <h2>Náš príbeh</h2>
        <p>text</p>
      </div>
    </div>

    <div class="people-container right">
      <div class="image">
        <img src="../assets/meeting2.png" alt="meeting image">
      </div>
      <div class="text">
        <span>O nás</span>
        <h2>Náš príbeh</h2>
        <p>text</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'People'
}
</script>

<style lang="scss" scoped>

  .right{
    flex-direction: row-reverse;

    .image::before{
       right: -5rem;
        top: -5rem;
        left: unset;
    }
  }
  .people-container{
      width: 100%;
      max-width: 1440px;
      margin: auto;
      display: flex;
      align-items: center;
      padding: 10em 2em;
      gap: 3em;
      @media(max-width:556px){
        flex-direction: column-reverse;
        align-items: flex-start;
      }
      .image{
        flex: 0 1 50%;
        position: relative;
        overflow: initial;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 70%;
          left: -5rem;
          top: -5rem;
          z-index: -1;
          background-image: url('../assets/dots.svg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          @media(max-width:556px){
            width: 70%;
            top: -2rem;
          }

        }
        img{
          width: 100%;
          height: auto;
        }
      }

      .text{
        span{
          font-family: 'Prata', serif;
          color:#214287;
          font-size: clamp(.7rem, 5vw, 1.4rem);
          padding-bottom: .2em;
          display: inline-block;
        }
        h2{
          font-size: clamp(1rem, 5vw, 2rem);
          padding-bottom: .5em;

        }
      }
  }
</style>
