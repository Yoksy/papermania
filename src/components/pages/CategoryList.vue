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
        category: this.$route.params.category
      }
    },
    computed: {
      ...mapState({
        items (state, getters) {
          return getters[this.category]
        }
      })
    },
    methods: {
      ...mapActions([
          'getCategoryItems'
      ]),
      /* setCategoryName: (categoryName) => categoryName.toUpperCase() */
    },
    mounted() {
      this.getCategoryItems(this.category, config.posts.limit.default[this.$mq])
    },
    beforeRouteUpdate(to, from, next) {
      this.category = to.params.category

      this.getCategoryItems(this.category, config.posts.limit.default[this.$mq])

      next()
    }
  }
</script>
