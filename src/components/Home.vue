<template>
  <layout-main>
    <h2>All crafts</h2>

    <div v-for="item in items" :key="item.id">
      <router-link :to="item.url">{{item.name}}</router-link>
    </div>
  </layout-main>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import LayoutMain from '@/components/layouts/main'

  export default {
    components: {
      LayoutMain
    },
    computed: mapGetters({
      items: 'allCrafts'
    }),
    created () {
      this.$store.dispatch('getAllCrafts')
    }
  }
</script>
