<template>
  <layout-main>
    <section class="hero is-light is-medium">
      <div class="hero-body">
        <div class="container">
          <h2 class="title font-pacifico">Welcome crafter!</h2>

          <p>Papermania is a community-driven platform to view, download or share paper creations and tutorials.</p>
        </div>
      </div>
    </section>

    <div class="container">
      <h2 class="title font-pacifico text-shadow">Popular crafts</h2>

      <div class="columns">
        <div class="column is-one-quarter" v-for="(item, index) in popularCrafts" :key="index">
          <card :item="item"/>
        </div>
      </div>
    </div>

  </layout-main>
</template>

<script>
import Vue from 'vue'
import VueTypes from 'vue-types'
import { mapGetters, mapActions } from 'vuex'
import config from '@/config/index'
import LayoutMain from '@/components/layouts/main'
import Card from '@/components/ui/card'

export default {
  components: {
    LayoutMain,
    Card
  },
  computed: {
    ...mapGetters({
      popularCrafts: 'homepagePopular'
    })
  },
  methods: {
    ...mapActions([
        'getHomepageCrafts'
    ]),
  },
  created () {
    this.getHomepageCrafts(config.posts.limit.homepage[this.$mq])
  }
}
</script>
