<template>
  <router-link class="tag"
    :to="{ name: 'tagList', params: { tag: slug } }">
    <span>{{label}}</span>
  </router-link>
</template>

<script>
  export default {
    name: 'Tag',
    props: ['label', 'slug']
  }
</script>
