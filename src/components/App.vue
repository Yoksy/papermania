<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

// Customization/helpers
@import "../assets/sass/index";

html, body, #app {
  height: 100%;
}

// Bulma/Buefy lib
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
