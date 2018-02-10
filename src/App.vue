<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <!-- <div class="icon">
        <div class="triangle"></div>
        <object type="image/svg+xml" data="/static/logoypp.svg"></object>
      </div> -->

      <!-- Menu -->
      <div class="menu">
        <a class="r-line">EVENTS</a>
        <a class="r-line">SPEAKERS</a>
        <a>SUPPORTERS</a>
      </div><!-- End of Menu -->
    </div><!-- End of Navbar -->

    <!-- Heading -->
    <div class="heading">
      <div class="columns is-gapless">
        <div class="column is-4"></div>
        <div class="column">
          <h1>Young Passionate Program</h1>

          <p>Ignite your passion. Surround with young talent. Informative workshop from experience mentor.</p>
          <br>
          <button class="btn-prim">JOIN US</button>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
    <!-- End of Heading -->

    <div class="scenter timeline">
      <h2 class="hyellow">EVENTS</h2>
      <div class="columns is-gapless is-mobile">
        <div class="column is-6 dash d-bottom d-right"> </div>
        <div class="column is-6"></div>
      </div>
      <div class="columns is-gapless dash d-bottom d-left">
        <div class="column is-6">
          <div class="event">
            30 March - 1 April 2018
            <p style="color: #eee93b">YOUNG LEAN ENTREPRENEUR</p>
          </div>
        </div>
        <div class="column is-6"></div>
      </div>
      <div class="columns is-gapless dash d-bottom d-right">
        <div class="column is-6"></div>
        <div class="column is-6">
          <div class="event">
            6 April - 8 April 2018 
            <p style="color: #f8a28c">YOUNG DIGITAL MARKETEER </p>
          </div>
        </div>
      </div>
      <div class="columns is-gapless dash d-bottom d-left">
        <div class="column is-6">
          <div class="event">
            20 April - 22 April 2018
            <p style="color: #97d3de">YOUNG INNOVATION CREATOR</p>
          </div>
        </div>
        <div class="column is-6"></div>
      </div>
      <div class="columns is-gapless">
        <div class="column is-6"></div>
        <div class="column is-6 dash d-bottom d-right">
          <div class="event">
            June 2018
            <p style="color: #77c8b9">YOUNG SOCIAL IMPACT MAKER</p>
          </div>
        </div>
      </div>
      <div class="columns is-gapless is-mobile">
        <div class="column is-6"></div>
        <div class="column is-6 dash d-left"></div>
      </div>
    </div>

    <!-- <div class="scenter">
      <h2 class="hgreen">ABOUT US</h2>
      <p>Ever wondered how some graphic designers always manage to produce beautiful looking designs for their brochures, website designs, logo designs? Talent…yes, it helps but there are a handful of more important things you can do that will have even complete beginners producing award winning design.</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/_all";
  @import "../node_modules/bulma/sass/grid/columns";
  @import "../node_modules/bulma/sass/layout/section.sass";

  @import "./assets/fonts/fonts.scss";

  body {
    background: linear-gradient(-15deg, #093038, #260933, #260933);
    color: white;
    font-family: "cloud";
    font-size: 18px;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: "beon";
    font-size: 3em;

    &.hyellow {
      text-shadow: 0 0 15px #FFA136;
    }
    &.hgreen {
      text-shadow: 0 0 15px #36FDFF;
    }
  }

  .btn-prim {
    background: linear-gradient(-100deg, #00769b, #022088);;
    color: white;
    font-size: 1em;
    font-weight: bold;
    height: 50px;
    width: 200px;
    border-radius: 25px;
    border: 1px solid white;
    filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
  }

  .navbar {
    width: 100vw;
    position: fixed;
    text-align: right;

    .icon {
      position: relative;

      .triangle {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 30vw solid #281853;
        border-right: 35vw solid transparent;
        filter: drop-shadow(0 0 1px white);
      }

      object {
        position: absolute;
        top: 3.5vw;
        left: 3.5vw;
        width: auto;
        height: 12vw;
      }
    }

    .menu {
      padding: 25px;

      a {
        padding: 5px 15px;
        margin: 10px 0;
        border: 0 solid white;

        &.r-line {
           border-right-width: 1px;
        }
       
      }
    }
  }

  .heading {
    width: 100%;
    height: 75vh;
    padding-top: 25vh;

    h1 {
      font-family: "beon";
      font-size: 4.5em;
      text-shadow: 0 0 15px #E23EFF;
    }
  }

  .timeline {
    padding: 0 10vw;

    .columns {
      margin: 0 !important;
    }

    .dash {
      border: 0 dashed white;
      box-sizing: border-box;
      min-height: 20px;

      &.d-right {
        border-right-width: 1px;
      }

      &.d-left {
        border-left-width: 1px;
      }

      &.d-bottom {
        border-bottom-width: 1px;
      }
    }

    .event {
      padding: 20px 30px;
      text-align: left;

      p {
        margin: 10px 0 0 0;
        font-size: 1.8em;
        line-height: 1.2;
      }
    }
  }

  .scenter {
    text-align: center;
  }
</style>




