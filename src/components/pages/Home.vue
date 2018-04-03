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
          <div class="column is-one-quarter" v-for="(item, index) in popular" :key="index">
            <card :item="item"/>
          </div>
        </div>
      </section>
      <section class="section">
        <h2 class="title font-pacifico text-shadow">Rising crafts</h2>

        <div class="columns is-clipped">
          <div class="column is-one-quarter" v-for="(item, index) in rising" :key="index">
            <card :item="item"/>
          </div>
        </div>
      </section>
    </div>

  </layout-main>
</template>

<script>
import Vue from 'vue'
import VueTypes from 'vue-types'
import { mapState, mapActions } from 'vuex'
import config from '@/config/index'
import LayoutMain from '@/components/layouts/main'
import Card from '@/components/ui/card'

export default {
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
  computed: mapState('crafts', ['popular', 'rising']),
  methods: mapActions('crafts', ['getHomeCrafts']),
  created() {
    this.getHomeCrafts({ limit: config.posts.limit.homepage[this.$mq] })
  }
}
</script>

<style scoped>
.hero-body > .container {
  padding-left: 1.5rem;
}
</style>
