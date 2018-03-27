<template>
<div class="wrapper h-100">
  <nav-bar />

  <slot/>
</div>
</template>


<script>
import NavBar from '@/components/shared/NavBar'
import Footer from '@/components/shared/Footer'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
