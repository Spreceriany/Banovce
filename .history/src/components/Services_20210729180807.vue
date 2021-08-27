<template>
    <div class="services-container">
        <div class="left">
          <h3>Služby</h3>
          <p> <strong>V našom zábere je komplexná ekonomická podpora malých a stredných podnikateľských subjektov.</strong></p>
        </div>

        <div class="right">
          <div class="service">
            <p>Klient</p>
            <h4>Individuálny prístup</h4>
            <p> Individuálny prístup je pre nás veľmi dôležitý , pracujeme s klientami so zreteľom na ich špecifiká.</p>
            <router-link to="/aboutpage">Čítať viac <span class="arrow">></span> </router-link>
          </div>
          <div class="service">
            <p>Dane</p>
            <h4>Individuálny prístup</h4>
            <p> Individuálny prístup je pre nás veľmi dôležitý , pracujeme s klientami so zreteľom na ich špecifiká.</p>
            <router-link to="/aboutpage">Čítať viac <span class="arrow">></span> </router-link>
          </div>
          <div class="service">
            <p>Zakladanie firiem</p>
            <h4>Transparentnosť firmy</h4>
            <p> Individuálny prístup je pre nás veľmi dôležitý , pracujeme s klientami so zreteľom na ich špecifiká.</p>
            <router-link to="/aboutpage">Čítať viac <span class="arrow">></span> </router-link>
          </div>
          <div class="service">
            <p>Účtovníctvo</p>
            <h4>Spracovanie účtovníctva</h4>
            <p> Individuálny prístup je pre nás veľmi dôležitý , pracujeme s klientami so zreteľom na ich špecifiká.</p>
            <router-link to="/aboutpage">Čítať viac <span class="arrow">></span> </router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
  .services-container{
    display:flex;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3em 1.5em;

    @media(max-width:996px){
      flex-direction: column;
    }

    .left{
      @media(max-width:996px){
        margin-bottom: 1em;
      }
      h3{
        font-size: clamp(1.5rem, 5vw, 3rem);
        font-family: Prata, 'serif';
        color: #214287;
        margin-bottom: .5em;
      }

      p{
        font-size: clamp(1.5rem, 5vw, 1.6rem);
        max-width: 100%;
        @media(min-width:556px){
          width: 70%;
        }
      }
    }
    .right{
      display:grid;

      grid-template-columns: 1fr 1fr;
      gap: 3em;
      position: relative;
      line-height: 1.5em;
      &::after{
        content:"";
        position: absolute;
        width: .1px;
        height: 100%;
        top:0;
        left:50%;
        border:.5px solid rgba(0, 0, 0, 0.03)
      }

       &::before{
        content:"";
        position: absolute;
        width: 100%;
        height: .005px;
        top:50%;
        left:0;
        border:.5px solid rgba(0, 0, 0, 0.03)
      }

      @media(max-width:556px){
        &::before, &::after{
          all:unset;
        }

        grid-template-columns: 1fr;
        gap:1em;
      }

      p{
        padding: .7em 0;
        &:first-of-type{
          color: #214287;
          font-family: Prata, 'serif';
          font-size: clamp(.7rem, 5vw, 1.4rem);
        }

        &:nth-of-type(2){
          font-size: clamp(1rem, 5vw, 1.3rem);
        }
      }

      h4{
        font-size: clamp(1.5rem, 5vw, 1.6rem);

      }

      .arrow{
        transition: transform .3s ease;
        display: inline-block;
        transform: translateY(1px);

      }

      a{
        text-decoration: none;
        color: #214287;
        font-size: clamp(.8rem, 5vw, 1.2rem);

        &:hover .arrow{
          transform: translateX(7px);
        }
      }

      @media(max-width:556px){
        .service{
        position: relative;
        padding: 2em 0;
          &:nth-child(-n + 3) {
            &::after{
              content:'';
              position: absolute;
              width: 100%;
              height: .005px;
              bottom: -17px;
              left: 0;
              border:.5px solid rgba(0, 0, 0, 0.03)

            }
          }
      }
      }
    }

  }
</style>
