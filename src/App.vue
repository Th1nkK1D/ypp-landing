<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <div :class="'icon' + (logoActive ? '' : ' is-shrink')">
        <div class="triangle is-hidden-mobile"></div>
        <object type="image/svg+xml" data="/static/logoypp.svg"></object>
      </div>

      <!-- Menu -->
      <scrollactive :offset="80" class="menu is-hidden-mobile" @itemchanged="onSectionChanged">
        <a href="#title" class="scrollactive-item" style="display: none;"></a>
        <a href="#events" class="scrollactive-item r-line">EVENTS</a>
        <a href="#speakers" class="scrollactive-item r-line">SPEAKERS</a>
        <a href="#supporters" class="scrollactive-item">SUPPORTERS</a>
      </scrollactive><!-- End of Menu -->
    </div><!-- End of Navbar -->

    <!-- Heading -->
    <div class="heading">
      <div class="columns is-gapless">
        <div class="column is-3"></div>
        <div class="column">
          <div class="section">
            <h1 id="title">Young Passionate Program</h1>

            <p>Ignite your passion. Surround with young talent. Informative workshop from experience mentor.</p>
            <br>
            <button class="btn-prim">JOIN US</button>
          </div>
          
        </div>
      </div>
    </div>
    <!-- End of Heading -->

  <!-- Events timeline -->
    <div class="section timeline" id="events">
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
    <div class="section speakers" id="speakers">
      <h2 class="hblue">SPEAKERS</h2>

      <div class="row" v-for="(col, c) in speakers" :key="c">
        <!-- <div class="spcon" v-for="(speaker, s) in col" :key="s">{{speaker}}</div> -->
        <div class="cell" v-for="(speaker, s) in col" :key="s">
          <div class="hexagon" :style="'background-image: url(' + speaker.avatar + '); filter: drop-shadow(0 0 4px ' + events[speaker.event].color + ');'">
            <div class="hexTop"></div>
            <div class="hexBottom"></div>
          </div>
          <div class="label">
            <strong>{{speaker.name}}</strong>
            <p>{{speaker.pos}}</p>
          </div>
        </div>
      </div>
    </div><!-- End of Speakers -->

    <!-- Sponsors -->
    <div class="section sponsors" id="supporters">
      <h2 class="hgreen">Supporter</h2>
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
      speakers: [
        [
          { name: "nono", pos: "manager", avatar: "https://www.w3schools.com/howto/img_avatar.png", event: 0 },
          { name: "dfgdtg", pos: "manager", avatar: "https://www.w3schools.com/w3images/avatar2.png", event: 1 },
        ],
        [
          { name: "nono", pos: "manager", avatar: "https://www.w3schools.com/howto/img_avatar.png", event: 1 },
          { name: "dfgdtg", pos: "manager", avatar: "https://www.w3schools.com/w3images/avatar2.png", event: 1 },
          { name: "oiuhiohoiu", pos: "manager", avatar: "https://www.w3schools.com/w3images/avatar2.png", event: 2 },
        ],
        [
          { name: "nono", pos: "manager", avatar: "https://www.w3schools.com/w3images/avatar2.png", event: 2 },
          { name: "dfgdtg", pos: "manager", avatar: "https://www.w3schools.com/howto/img_avatar.png", event: 3 },
        ]
      ]
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
    background: linear-gradient(100deg, #022088, #00769b);
    color: white;
    font-size: 1em;
    font-weight: bold;
    height: 50px;
    width: 200px;
    border-radius: 25px;
    border: 1px solid white;
    filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
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
      }

      object {
        position: absolute;
        top: 4vw;
        left: 4vw;
        width: auto;
        height: 14vw;
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

      p {
        margin: 10px 0 0 0;
        font-size: 1.8em;
        line-height: 1.2;
      }
    }
  }

  .speakers {
    .row {
      display: flex;
      justify-content: center;

      .cell {
        position: relative;

        .label {
          position: absolute;
          z-index: 5;
          bottom: 20px;
          width: 100%;
          text-align: center;
          display: none;

          p {
            font-size: 0.8em;
            margin: 0;
          }
        }

        &:hover {
          .hexagon {
            opacity: 0.3;
          }

          .label {
            display: block;
            text-align: center;
          }
        }
      }

      .hexagon {
        position: relative;
        width: 150px; 
        height: 86.60px;
        margin: 43.30px 0;
        background-size: auto 173.2051px;
        background-position: center;
        margin: 28px 8px;
      }

      .hexTop,
      .hexBottom {
        position: absolute;
        z-index: 1;
        width: 106.07px;
        height: 106.07px;
        overflow: hidden;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background: inherit;
        left: 21.97px;
      }

      /*counter transform the bg image on the caps*/
      .hexTop:after,
      .hexBottom:after {
        content: "";
        position: absolute;
        width: 150.0000px;
        height: 86.60254037844388px;
        -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-43.3013px);
        -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-43.3013px);
        transform:          rotate(45deg) scaleY(1.7321) translateY(-43.3013px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: inherit;
      }

      .hexTop {
        top: -53.0330px;
      }

      .hexTop:after {
        background-position: center top;
      }

      .hexBottom {
        bottom: -53.0330px;
      }

      .hexBottom:after {
        background-position: center bottom;
      }

      .hexagon:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 150.0000px;
        height: 86.6025px;
        z-index: 2;
        background: inherit;
      }
    }
  }
</style>




