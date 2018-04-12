<template>
  <layout-main>
    <div class="container">
      <section class="section">
        <h2 class="title text-shadow">Category {{ category | capitalize }}</h2>

        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(item, index) in papercraft.items" :key="index">
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
import { capitalizeFirstLetter } from '@/helpers/helpers'

export default {
  name: 'CategoryList',
  metaInfo() {
    return {
      title: this.categoryLabel
    }
  },
  components: {
    LayoutMain,
    Card
  },
  data() {
    return {
      category: this.$route.params.category,
      listParams: {
        postLimit: config.posts.limit.default[this.$mq],
        category: this.$route.params.category,
      },
      loadAction: 'items/LOAD_CATEGORY_ITEMS'
    }
  },
  computed: {
    ...mapState('items', ['papercraft']),
    categoryLabel() {
      return capitalizeFirstLetter(this.category)
    },

  },
  created() {

    if (this.$store.cache.has(this.loadAction, this.listParams)) {
      if (Math.abs(differenceInMinutes(this.items.lastUpdated, new Date())) > 10) {
        this.$store.cache.delete(this.loadAction, this.listParams)
      }
    }

    this.$store.cache.dispatch(this.loadAction, this.listParams)
  },
  beforeRouteUpdate(to, from, next) {
    this.currentCategory = to.params.category
    this.listParams.category = to.params.category

    this.$store.cache.dispatch(this.loadAction, this.listParams)

    next()
  }
}
</script>
