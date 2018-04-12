<template>
  <layout-main>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container content">
          <h2 class="title font-pacifico">Welcome crafter!</h2>


          <p>Papermania is a community-driven platform to view, download or share paper creations and tutorials.</p>
          <p>Our community has published <strong>{{craftsCount}} crafts</strong> and <strong>{{tutorialsCount}} tutorials</strong> so far.</p>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="section">
        <h2 class="title font-pacifico text-shadow">Popular crafts</h2>

        <div class="columns is-clipped">
          <div class="column is-one-quarter" v-for="(item, index) in home.popular" :key="index">
            <card :item="item"/>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="title font-pacifico text-shadow">Rising crafts</h2>

        <div class="columns is-clipped">
          <div class="column is-one-quarter" v-for="(item, index) in home.rising" :key="index">
            <card :item="item"/>
          </div>
        </div>
      </section>
    </div>

  </layout-main>
</template>

<script>
import { mapState } from 'vuex'
import { differenceInMinutes } from 'date-fns'
import LayoutMain from '@/components/layouts/main'
import Card from '@/components/ui/card'
import config from '@/config/index'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Papermania - share your paper models to the world!',
    titleTemplate: null
  },
  components: {
    LayoutMain,
    Card
  },
  data() {
    return {
      craftsCount: 120,
      tutorialsCount: 8
    }
  },
  computed: mapState('items', ['home']),
  created() {
    const action = 'items/LOAD_HOME_ITEMS',
          params = { limit: config.posts.limit.homepage[this.$mq] }

    if (this.$store.cache.has(action, params)) {
      if (Math.abs(differenceInMinutes(this.home.lastUpdated, new Date())) > 10) {
        this.$store.cache.delete(action, params)
      }
    }

    this.$store.cache.dispatch(action, params)

  }
}
</script>

<style scoped>
.hero-body > .container {
  padding-left: 1.5rem
}
</style>
