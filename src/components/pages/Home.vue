<template>
  <layout-main>

    <div class="content">
      <h2>Welcome!</h2>
      <p>Papermania is a community-driven platform to view, download or share paper creations.</p>
    </div>

    <div>
      <h2 clas="title">Papercrafts</h2>

      <div class="columns is-multiline">
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
    this.getHomepageCrafts(config.postsLimit.homepage[this.$mq])
  }
}
</script>
