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
        &::before{
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
          background-image: url('../assets/dots.svg');
        }
        img{
          width: 100%;
          height: auto;
        }
      }
  }
</style>
