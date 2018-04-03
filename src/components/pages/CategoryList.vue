<template>
  <layout-main>
    <div class="container">
      <section class="section">
        <h2 class="title text-shadow">Category {{ category | capitalize }}</h2>

        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(item, index) in items" :key="index">
            <card :item="item"/>
          </div>
        </div>
      </section>
    </div>
  </layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LayoutMain from '@/components/layouts/main'
import Card from '@/components/ui/card'
import config from '@/config/index'

export default {
  components: {
    LayoutMain,
    Card
  },
  data() {
    return {
      category: this.$route.params.category,
      items: []
    }
  },
  methods: {
    ...mapActions('crafts', ['getCategoryCrafts']),
    async getItems () {
      const response = await this.$http.get(`/category/${this.category}.js`);

      this.items = response.json()
    }
  },
  created() {
    this.getItems()
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    this.category = to.params.category

    //this.getCategoryCrafts({ category: this.category, limit: config.posts.limit.homepage[this.$mq] })

    next()
  }
}
</script>
