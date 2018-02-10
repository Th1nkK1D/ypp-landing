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

  <!-- Events timeline -->
    <div class="scenter timeline">
      <h2 class="hyellow">EVENTS</h2>

      <div class="columns is-gapless is-mobile">
        <div class="column is-6 dash d-bottom d-right"> </div>
        <div class="column is-6"></div>
      </div>
      <!-- Event -->
      <div v-for="(event, e) in events" :key="e" :class="'columns is-gapless dash ' + (e < events.length-1 ? 'd-bottom ' : '') + (e%2 === 0 ? 'd-left' : 'd-right')">
        <div v-if="e%2 !== 0" class="column"></div>
        <div class="column">
          <div class="event">
            {{event.date}}
            <p :style="'color: ' + event.color">{{event.name}}</p>
          </div>
        </div>
        <div v-if="e%2 === 0" class="column"></div>
      </div><!-- End of Event -->
      <div class="columns is-gapless is-mobile">
        <div class="column is-6"></div>
        <div class="column is-6 dash d-left d-top"></div>
      </div>
    </div><!-- End of Events timeline -->

    <!-- Speakers -->
    <div class="scenter">
      <h2 class="hgreen">SPEAKERS</h2>
    </div>
    <!-- Speakers -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      events: [
        { date: "30 March - 1 April 2018", name: "YOUNG LEAN ENTREPRENEUR", color: "#eee93b" },
        { date: "6 April - 8 April 2018", name: "YOUNG DIGITAL MARKETEER", color: "#f8a28c" },
        { date: "20 April - 22 April 2018", name: "YOUNG INNOVATION CREATOR", color: "#97d3de" },
        { date: "June 2018", name: "YOUNG SOCIAL IMPACT MAKER", color: "#77c8b9" },
      ]
    }
  }
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

      &.d-top {
        border-top-width: 1px;
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




