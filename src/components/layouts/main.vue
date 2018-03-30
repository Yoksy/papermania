<template>
<div class="wrapper h-100">
  <primary-nav-bar />

  <div class="main-content">
    <slot />
  </div>

  <primary-footer />
</div>
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
