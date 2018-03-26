<template>
  <div class="container">

    <nav-bar />


    <!-- <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header> -->

    <slot/>

    <!-- <footer>
      Site footer
    </footer> -->
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

