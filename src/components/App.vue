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

// Customs variables
@import "../assets/sass/variables";

// Bulma/Buefy lib
@import "~bulma";
@import "~buefy/src/scss/buefy";

// Customization/helpers
@import "../assets/sass/index";
</style>
