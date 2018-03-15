<template>
  <layout-main>
    <h2>type : {{ $route.params.type }}</h2>
    <h2>id : {{ $route.params.slug }}</h2>

    <p>Name: {{item.name}}</p>
  </layout-main>
</template>

<script>
  import LayoutMain from '@/components/layouts/main'
  import Item from '@/datas/tests/craft/luffy'

  export default {
    components: {
      LayoutMain
    },
    data() {
      return {
        item: Item
      }
    }
  }
</script>
