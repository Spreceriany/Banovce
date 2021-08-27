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
</template>

<script>
export default {
  name: 'People'
}
</script>

<style lang="scss" scoped>
  .people-container{
      width: 100%;
      max-width: 1440px;
      margin: auto;
      display: flex;
      align-items: center;
      padding: 3em 0;

      .image{
        flex: 0 1 50%;
        position: relative;
        overflow: initial;
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          left: -20rem;
          top: -20rem;
          z-index: -1;
          background-image: url('../assets/dots.svg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        img{
          width: 100%;
          height: auto;
        }
      }
  }
</style>
