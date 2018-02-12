<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <div :class="'icon' + (logoActive ? '' : ' is-shrink')">
        <div class="triangle is-hidden-mobile"></div>
        <object type="image/svg+xml" data="/static/logoypp.svg"></object>
      </div>

      <!-- Scrollspy -->
      <scrollactive :offset="80" class="menu is-hidden-mobile" @itemchanged="onSectionChanged" style="display: none;">
        <a href="#title" class="scrollactive-item"></a>
      </scrollactive><!-- End of Scrollspy -->
    </div><!-- End of Navbar -->

    <!-- Heading -->
    <div class="heading">
      <div class="columns is-gapless">
        <div class="column is-3"></div>
        <div class="column">
          <div class="section">
            <h1 id="title">Young Passionate Program</h1>

            <p>Ignite your passion. Surround with young talent. Informative workshop from experience mentor.</p>
          </div>
          
        </div>
      </div>
    </div>
    <!-- End of Heading -->

  <!-- Events timeline -->
    <div class="section timeline">
      <h2 class="hyellow">EVENTS</h2>

      <div class="columns is-gapless is-mobile">
        <div class="column is-6 dash d-bottom d-right"> </div>
        <div class="column is-6"></div>
      </div>

      <!-- Event -->
      <div v-for="(event, e) in events" :key="e" :class="'columns is-gapless dash ' + (e < events.length-1 ? 'd-bottom ' : '') + (e%2 === 0 ? 'd-left' : 'd-right')">
        <div  v-if="e%2 !== 0" class="column"></div>

        <div class="column">
          <div class="columns is-gapless is-mobile">
            <div v-if="e%2 !== 0" class="column is-narrow expander" :style="'color: ' + event.color">
              <span>&lt;</span>
            </div>
            <div class="column">
              <div class="event">
                {{event.date}}
                <p class="title" :style="'color: ' + event.color">{{event.name}}</p>
                <p>Some kind of foocking description</p>
                <br>
                <button class="btn-prim">JOIN US</button>
              </div>
            </div>
            <div v-if="e%2 === 0" class="column is-narrow expander" :style="'color: ' + event.color">
              <span>&gt;</span>
            </div>
          </div>
        </div>

        <div v-if="e%2 === 0" class="column"></div>
      </div><!-- End of Event -->

      <div class="columns is-gapless is-mobile">
        <div class="column is-6"></div>
        <div class="column is-6 dash d-left d-top"></div>
      </div>
    </div><!-- End of Events timeline -->

    <!-- Sponsors -->
    <div class="section sponsors" id="supporters">
      <h2 class="hgreen">Sponsors</h2>
    </div><!-- End of Sponsors -->

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logoActive: true,
      events: [
        { date: "30 March - 1 April 2018", name: "YOUNG LEAN ENTREPRENEUR", color: "#eee93b" },
        { date: "6 April - 8 April 2018", name: "YOUNG DIGITAL MARKETEER", color: "#f8a28c" },
        { date: "20 April - 22 April 2018", name: "YOUNG INNOVATION CREATOR", color: "#97d3de" },
        { date: "June 2018", name: "YOUNG SOCIAL IMPACT MAKER", color: "#77c8b9" },
      ],
    }
  },
  methods: {
    onSectionChanged(event, currentItem, lastActiveItem) {
      if(lastActiveItem == null) {
        this.logoActive = false
      } else if(currentItem == null) {
        this.logoActive = true
      }
    },
  },
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/_all";
  @import "../node_modules/bulma/sass/base/_all.sass";
  @import "../node_modules/bulma/sass/grid/columns";

  @import "./assets/fonts.scss";

  @mixin mobile {
   @media (max-width: 768px) {
       @content;
   }
  }

  @mixin desktop {
   @media (min-width: 769px) {
       @content;
   }
  }

  body {
    background: linear-gradient(165deg, #260933, #093038);
    color: white;
    font-family: "cloud";
    font-size: 18px;
    padding: 0;
    margin: 0;
  }

  .btn-prim {
    font-size: 0.8em;
    font-weight: bold;
    height: 40px;
    width: 140px;
    border-radius: 18px;
    border: 1px solid white;
    color: white;
    background: transparent;
    filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
    transition: all .5s;
  }

  .is-gapless {
    margin: 0 !important;
  }

  .section {
    padding: 20px 10vw;

    @include mobile {
      padding: 20px 5vw;
    }

    h2 {
      font-family: "beon";
      font-size: 3em;
      text-align: center;

      &.hyellow {
        text-shadow: 0 0 15px #FFA136;
      }
      &.hblue {
        text-shadow: 0 0 15px #36d7ff;
      }
      &.hgreen {
        text-shadow: 0 0 15px #36ffb2;
      }

      @include mobile {
        font-size: 2.5em;
      }
    }
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
        border-top: 35vw solid #281853;
        border-right: 40vw solid transparent;
        filter: drop-shadow(0 0 1px white);
        transition: all .5s;
      }

      object {
        position: absolute;
        top: 4vw;
        left: 4vw;
        width: auto;
        height: 14vw;
        transition: all .5s;

        @include mobile {
          height: 8vh;
          top: 2vh;
          left: 3vw;
        }
      }

      &.is-shrink {
        .triangle {
          border-top-width: 15vw;
          border-right-width: 18vw;
          opacity: 0;
        }
        object {
          @include desktop {
            position: absolute;
            top: 1.5vw;
            left: 1.5vw;
            width: auto;
            height: 4vw;
          }

          @include mobile {
            opacity: 0;
          }
        }
      }
    }

    .menu {
      padding: 25px;

      a {
        padding: 5px 15px 5px 12px;
        margin: 10px 0;
        border: 0 solid white;
        text-decoration: none;
        color: white;
        transition: all .2s;

        &.r-line {
           border-right-width: 1px;
        }

        &:hover {
          color: rgba(255,255,255,0.7);
        }

        &.is-active {
          font-weight: bold;
        }
       
      }
    }
  }

  .heading {
    width: 100%;
    height: 100vh;
    padding-top: 25vh;

    h1 {
      font-family: "beon";
      font-size: 4.5em;
      text-shadow: 0 0 15px #E23EFF;
    }

    @include mobile {
      padding-top: 10vh;
      
      h1 {
        font-size: 2.75em;
        line-height: 1.3;
      }
    }
  }

  .timeline {
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

      .title {
        margin: 10px 0;
        font-size: 1.8em;
        line-height: 1.2;

        @include mobile {
          font-size: 1.5em;
        }
      }
    }

    .expander {
      font-size: 1.8em;
      padding: 5px;
      display: flex;
      justify-content: center;
      opacity: 0.6;

      span {
        margin: auto;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
</style>




