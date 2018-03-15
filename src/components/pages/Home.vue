<template>
  <layout-main>
    <h2>All crafts</h2>

    <div v-for="item in items" :key="item.id">
      <router-link :to="{name: 'Craft', params: {category: item.category, slug: item.slug}}">{{item.name}}</router-link>
    </div>

    <input type="text" v-super-directive.a.b.c="trololo" />
    <input type="text" v-model="trololo" />

  <button></button>


    <p>test : ===={{testData}}====</p>
  </layout-main>

</template>

<script>
  import Vue from 'vue'
  import VueTypes from 'vue-types';
  import { mapGetters, mapActions } from 'vuex'
  import LayoutMain from '@/components/layouts/main'

  let superDirective = function(el, binding) {
    //if (binding.oldValue === binding.value) return

    el.value = binding.value;
    console.log('all', el, binding)
  }

  export default {
    components: {
      LayoutMain
    },
    directives: {
      superDirective
    },
    /* props: {
      trololo: { type: String, default: 'lorem ipsum' }
    }, */
    data() {
      return {
        testData: 'lorem ipsum'
      }
    },
    computed: mapGetters({
      items: 'allCrafts'
    }),
    created () {
      this.$store.dispatch('getAllCrafts')
    }
  }
</script>
