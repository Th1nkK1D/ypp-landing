<template>
  <div id="app">
    <section class="section">
      <h1>Young</h1>
      <h1>Passionate</h1>
      <h1>Program</h1>
      {{test}}
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      test: 'Hi'
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
    background-color: black;
    color: white;
    font-family: "cloud"
  }

  h1 {
    font-family: "beon"
  }
</style>




