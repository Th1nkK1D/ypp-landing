<template>
  <div id="app">
    <!-- Navbar -->
    <div class="navbar">
      <div class="columns">
        <div class="column icon">
          <div class="triangle"></div>
          <object type="image/svg+xml" data="/static/logoypp.svg"></object>
        </div>

        <!-- Menu -->
        <div class="column is-narrow">
          <div class="columns">
            <div class="column is-narrow">Event</div>
            <div class="column is-narrow">Speaker</div>
            <div class="column is-narrow">Supporter</div>
          </div>
        </div><!-- End of Menu -->
      </div>
    </div><!-- End of Navbar -->

    <!-- Heading -->
    <section class="section heading">
      <div class="columns">
        <div class="column is-4"></div>
        <div class="column">
          <h1>Young Passionate</h1>
          <h1>Program</h1>

          <p>With the exception of Nietzsche, no other madman has contributed so much to human sanity as has Louis Althusser.</p>
        </div>
      </div>
    </section>
    <!-- End of Heading -->

    <section class="section scenter">
      <h2 class="hyellow">EVENTS</h2>
    </section>

    <section class="section scenter">
      <h2 class="hgreen">ABOUT US</h2>
      <p>Ever wondered how some graphic designers always manage to produce beautiful looking designs for their brochures, website designs, logo designs? Talent…yes, it helps but there are a handful of more important things you can do that will have even complete beginners producing award winning design.</p>
    </section>
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
    background: linear-gradient(-15deg, #093038 ,#260933);
    color: white;
    font-family: "cloud";
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

  .navbar {
    width: 100vw;
    position: fixed;

    .icon {
      position: relative;

      .triangle {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 70vh solid #281853;
        border-right: 70vh solid transparent;
        filter: drop-shadow(0 0 2px white);
      }

      object {
        position: absolute;
        top: 7vh;
        left: 7vh;
        width: auto;
        height: 25vh;
      }
    }
  }

  .heading {
    width: 100%;
    height: 100vh;
    padding-top: 20vh;

    h1 {
      font-family: "beon";
      line-height: 0.2;
      font-size: 4.5em;
      text-shadow: 0 0 15px #E23EFF;
    }
  }

  .scenter {
    text-align: center;
  }

  .logo {
    text-align: right;

    object {
      width: auto;
      height: 100%;
      max-height: 250px;
    }
  }
</style>




