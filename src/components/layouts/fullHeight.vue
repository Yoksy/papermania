<template>
<section class="hero is-fullheight">
  <div class="hero-head">
    <primary-nav-bar />
  </div>
  <div class="hero-body">
    <slot />
  </div>
  <div class="hero-foot">
    <primary-footer />
  </div>
</section>
</template>


<script>
import PrimaryNavBar from '@/components/shared/NavBar'
import PrimaryFooter from '@/components/shared/Footer'

export default {
  components: {
    PrimaryNavBar,
    PrimaryFooter
  }
}
</script>
