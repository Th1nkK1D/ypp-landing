<template>
  <div id="app">
    <!-- Navbar -->
    <div :class="'navbar' + (logoActive ? '' : ' is-shrink')">
      <div class="icon">
        <div class="triangle is-hidden-mobile"></div>
        <object type="image/svg+xml" data="/static/logoypp.svg"></object>
      </div>

      <div class="menu">
        <a href="https://www.facebook.com/youngpassionateprogram/" target="_blank">
          <img src="/static/facebook.svg"/>
        </a>
      </div>
    </div><!-- End of Navbar -->

    <!-- Heading -->
    <div class="heading">
      <div class="columns is-gapless">
        <div class="column is-3"></div>
        <div class="column">
          <div class="section">
            <h1 id="title">Young Passionate Program</h1>
            <br>
            <p>โปรแกรมสำหรับเยาวชนและผู้ที่สนใจ โดยมีอายุตั้งแต่ 18-25 ปี เพื่อเรียนรู้ทักษะ Business, Marketing, Design, และ Development ฉบับเร่งด่วนแต่อัดแน่นด้วยสาระ ผ่านผู้เชี่ยวชาญในวงการต่างๆ ที่จะมาแบ่งปันเทคนิคอย่างไม่มีกั๊ก</p>
            <br>
            <!-- Scrollspy -->
            <scrollactive :offset="60" @itemchanged="onSectionChanged">
              <a href="#title" class="scrollactive-item" style="display: none;"></a>
              <a href="#event" class="scrollactive-item learnmore" @click="logoActive = false">&#8675;</a>
            </scrollactive><!-- End of Scrollspy -->
          </div>
        </div>
      </div>
    </div>
    <!-- End of Heading -->

  <!-- Events timeline -->
    <div class="section timeline">
      <h2 class="hyellow" id="event">EVENTS</h2>

      <div class="columns is-gapless is-mobile">
        <div class="column is-6 dash d-bottom d-right"> </div>
        <div class="column is-6"></div>
      </div>

      <!-- Event -->
      <div v-for="(event, e) in events" :key="e" :class="'columns is-gapless ' + (e%2 !== 0 ? 'r-reverse' : '') + ' dash ' + (e < events.length-1 ? 'd-bottom ' : '') + (e%2 === 0 ? 'd-left' : 'd-right')">
        <!-- Main content -->
        <div class="column">
          <div :class="'columns is-gapless is-mobile ' + (e%2 !== 0 ? 'r-reverse' : '')">
            <div class="column">
              <div class="event">
                {{event.date}}
                <p class="title" :style="'color: ' + event.color">{{event.name}}</p>
                <p>{{event.desc}}</p>
                <br>
                <a v-if="event.link.length > 0" :href="event.link" target="_blank"><button class="btn-prim" :style="'background-color: ' + event.color">ลงทะเบียน</button></a>
                <button v-else class="btn-prim disabled" :style="'color: ' + event.color +'; border-color: ' + event.color">Coming Soon</button>
              </div>
            </div>
            <div :class="'column is-narrow expander' + (event.expanded ? ' is-active' : '')" :style="'color: ' + event.color" @click="event.expanded = !event.expanded">
              <span class="gt" v-if="e%2 == 0">&gt;</span>
              <span class="lt" v-else>&lt;</span>
            </div>
          </div>
        </div><!-- End of Main content -->

        <!-- Expansion -->
        <div class="column">
          <transition name="fade">
            <div class="event" v-show="event.expanded">
              <div v-if="event.speakers.length > 0">
                <h3>Speakers</h3>

                <div class="columns is-gapless is-multiline is-mobile speakers">
                  <div class="speaker is-narrow" v-for="(speaker,s) in event.speakers" :key="s" onclick="">
                    <img :src="'/static/speakers/'+(e+1)+'/'+speaker.avatar" alt="">
                    <div class="label">
                      <p class="name">{{speaker.name}}</p>
                      <p class="pos">{{speaker.pos}}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="event.map.length > 0">
                <h3>Location</h3>
                <iframe :src="'https://www.google.com/maps/embed?pb=' + event.map"></iframe>
              </div>
            </div>
          </transition>
        </div><!-- End of Expansion -->

      </div><!-- End of Event -->

      <div :class="'columns is-gapless is-mobile '  + (this.events%2 !== 0 ? 'r-reverse' : '')">
        <div class="column is-6"></div>
        <div :class="'column is-6 dash d-top ' + (this.events%2 !== 0 ? 'd-right' : 'd-left')"></div>
      </div>
    </div><!-- End of Events timeline -->

    <!-- Sponsors -->
    <!-- <div class="section sponsors" style="text-align: center;">
      <h2 class="hgreen">Sponsors</h2>
      <p>Sponsors logo here...</p>
    </div> -->
    <!-- End of Sponsors -->

    <!-- Sponsors -->
    <div class="section sponsors" style="text-align: center;">
      <h2 class="hblue">About Us</h2>
      <p>พวกเรา คือ กลุ่มนักศึกษาที่รวมตัวกันจาก 10 มหาวิทยาลัย กว่า 20 ชีวิต เพื่อ Volunteer ในการจัดงาน 3 งานนี้ขึ้นมา</p>
      <br>

      <a href="https://www.facebook.com/youngpassionateprogram/" target="_blank">
        <button class="btn-prim">ติดตามพวกเราบน Facebook</button>
      </a>
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
        { 
          date: "30 March - 1 April 2018", name: "YOUNG LEAN ENTREPRENEUR", color: "#eee93b",
          desc: "95% ของ Startup ล้มเหลว เพราะผู้ประกอบการไม่รู้ความต้องการของลูกค้า Lean Startup จึงเป็นวิธีการที่นิยมใช้กันทั่วโลกเพื่อเริ่มต้นธุรกิจด้วยทรัพยากรจำกัด แต่ได้ผลลัพธ์เกินคาด คว้าความสำเร็จได้ในงาน Young Lean Entrepreneur พื้นที่แสวงหาประสบการณ์ที่ไม่ใช่แค่การเวิร์กชอปแล้วจบไป",
          speakers: [
            { name: "Chavayot", pos: "Lean Startup Thailand", avatar: "DSC00842.JPG"},
            { name: "Niti", pos: "Lean Startup Thailand", avatar: "DSC00860.JPG"},
            { name: "Krissada", pos: "Lean Startup Thailand", avatar: "DSC00850.JPG"},
          ],
          map: "",
          link: "https://www.eventpop.me/e/2994-young-lean-entrepreneur",
          expanded: false,
        },
        { 
          date: "6 April - 8 April 2018", name: "YOUNG DIGITAL MARKETEER", color: "#f8a28c", 
          desc: "หากยอดไลค์และยอดแชร์ ไม่ใช่หัวใจหลักของการทำการตลาดบนโลกดิจิตอล แล้วอะไรที่เป็นหัวใจสำคัญของการสร้างแบรนด์เหล่านี้ งาน Young Digital Marketer จึงเหมาะสำหรับผู้ที่อยากสร้างแบรนด์ของตนให้เป็นที่รู้จัก พร้อมกับจับลูกค้าให้อยู่หมัดด้วยพลังของการสื่อสาร",
          speakers: [
            { name: "Pornthep", pos: "ขอบสนาม", avatar: "PornthepAchatsachat.jpg"},
            { name: "Niti", pos: "Techsource", avatar: "DSC00860.JPG"},
            { name: "Panuwat", pos: "The Nerd Creator", avatar: "15622398_1385228428156931_1323153179127751927_n.jpg"},
            { name: "Sitthichok", pos: "Sista Cafe", avatar: "SitthichokPanyachaisana.jpg"},
            { name: "Supacheep", pos: "Growth Hack TH", avatar: "25593980_10211425178012660_8315281197925554200_n.jpg"},
            { name: "Chaiyaphong", pos: "3DS Interactive", avatar: "1512039_635170953243298_3405364241452411355_o.jpg"},
            { name: "Nakamon", pos: "Marketing Consult", avatar: "26060482_10209092906074591_1397648681681417503_o.jpg"},
            { name: "Sitthikit", pos: "Mobile Photographer", avatar: "13908940_10202060088459630_7999859933542120518_o.jpg"},
          ],
          map: "!1m18!1m12!1m3!1d3875.2542381557278!2d100.56557031523678!3d13.76353599033984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1a72743b53%3A0xb7d75ea04f6dea83!2z4LiV4Lil4Liy4LiU4Lir4Lil4Lix4LiB4LiX4Lij4Lix4Lie4Lii4LmM4LmB4Lir4LmI4LiH4Lib4Lij4Liw4LmA4LiX4Lio4LmE4LiX4LiiIC0gVGhlIFN0b2NrIEV4Y2hhbmdlIG9mIFRoYWlsYW5k!5e0!3m2!1sen!2sth!4v1518589636008",
          link: "",
          expanded: false,
        },
        { 
          date: "20 April - 22 April 2018", name: "YOUNG INNOVATION CREATOR", color: "#97d3de", 
          desc: "ปฏิเสธไม่ได้ว่านวัตกรรมสร้างสรรค์ธุรกิจ เทคโนโลยีจึงมีบทบาทสำคัญที่ช่วยสรรสร้างประสบการณ์ใหม่ๆ ให้กับผู้ประกอบการและผู้ใช้ เราจึงอยากชวนทุกคนที่มีใจทางด้าน Programming, Design, หรือProject Management มาร่วมกันจำลองสถานการณ์จริงเพื่อคิดค้น Application หรือ Website เพื่อตอบโจทย์ลูกค้า",
          speakers: [],
          map: "!1m18!1m12!1m3!1d3875.888575614033!2d100.58543395078647!3d13.725195201559128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fb195d786c9%3A0xd33e81e42904a76b!2sHUBBA+Thailand!5e0!3m2!1sen!2sth!4v1519132809342",
          link: "",
          expanded: false,
        },
        // { 
        //   date: "June 2018", name: "YOUNG SOCIAL IMPACT MAKER", color: "#77c8b9", 
        //   desc: "Some kind of foocking description",
        //   speakers: [
        //     { name: "ojnojn", pos: "test", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        //     { name: "ojnojn", pos: "test", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        //     { name: "ojnojn", pos: "test", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
        //   ],
        //   map: "",
        //   expanded: false,
        // },
      ],
    }
  },
  methods: {
    onSectionChanged(event, currentItem, lastActiveItem) {
      if(currentItem == null) {
        this.logoActive = true
      } else {
        this.logoActive = false
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
    min-width: 140px;
    padding: 0 20px;
    border-radius: 18px;
    color: black;
    background-color: white;
    border: 0;
    filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
    transition: all .3s;

    &:hover {
      transform: scale(1.05);
    }

    &.disabled {
      opacity: 0.5;
      background: transparent;
      border: 1px solid white;
      color: white;

      &:hover {
        transform: scale(1);
      }
    }
  }

  .is-gapless {
    margin: 0 !important;
  }

  .section {
    padding: 40px 10vw;

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
    transition: all .5s;

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
    }

    .menu {
      padding: 25px;

      a {
        border: 0 solid white;
        text-decoration: none;
        color: white;
        opacity: 0.4;
        transition: all .5s;

        img {
          width: 40px;
          height: auto;
          fill: white;
        }

        &:hover {
          opacity: 0.8;
        }
       
      }

      @include mobile {
        padding: 2vh 3vw;
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
      }

      @include mobile {
        opacity: 0;
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
      line-height: 1.2;
    }

    .scrollactive-nav {
      .learnmore {
        font-size: 3em;
        color: white;
        opacity: 0.5;
        transition: all 0.5s;

        &:hover {
          opacity: 1;
        }
      }

      @include mobile {
        text-align: right;
      }
    }

    @include mobile {
      padding-top: 10vh;
      
      h1 {
        font-size: 2.75em;
      }
    }
  }

  .timeline {
    .r-reverse {
      flex-direction: row-reverse;
    }

    .dash {
      border: 0 dashed white;
      box-sizing: border-box;
      min-height: 20px;
      padding: 0 10px;

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
      padding: 20px;
      text-align: left;

      .title {
        margin: 10px 0;
        font-size: 1.8em;
        line-height: 1.2;

        @include mobile {
          font-size: 1.5em;
        }
      }

      h3 {
        font-size: 1.2em;
      }

      .speakers {
        padding-bottom: 20px;

        .speaker {
          text-align: center;
          margin: 15px;

          img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            filter: grayscale(0.7);
            border-radius: 50%;
            transition: all .5s;
          }

          .label {
            width: 100%;
            line-height: 1.2;
            transition: all .5s;

            .name {
              font-size: 0.9em;
              font-weight: bold;
            }
            
            .pos {
              font-size: 0.7em;
            }
          }

          &:hover {
            img {
              filter: grayscale(0);
            }
          }
        }
      }
    }

    .expander {
      font-size: 2.6em;
      padding: 5px;
      display: flex;
      justify-content: center;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }

      span {
        margin: auto;
        transition: all 0.5s;
      }

      @include mobile {
        .gt {
          transform: rotate(90deg);
        }

        .lt {
          transform: rotate(-90deg);
        }
      }

      &.is-active {
        .gt {
          transform: rotate(180deg);

          @include mobile {
            transform: rotate(-90deg);
          }
        }

        .lt {
          transform: rotate(-180deg);

          @include mobile {
            transform: rotate(90deg);
          }
        }
      }
    }

    iframe {
      width: 100%;
      height: 250px;
      border: 0;
      transition: all 0.5s;
      filter: grayscale(0.7);

      &:hover {
        filter: grayscale(0);
      }

      @include mobile {
        height: 200px;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translate(0, -20px);
  }
</style>




