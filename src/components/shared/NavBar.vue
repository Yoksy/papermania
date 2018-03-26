<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" title="Papermania: a community driven platform to share any kind of paper models" class="navbar-item font-pacifico">
        <h1>Papermania</h1>
      </router-link>

      <div class="navbar-burger">
        <span>Lien 1</span>
        <span>Lien 2</span>
        <span>Lien 3</span>
      </div>
    </div>
    <div class="navbar-menu">
      <router-link :to="{ name: 'craftList', params: { category: category.slug }}" v-for="category in categories" :key="category.id" class="navbar-item">
        {{category.name}}
      </router-link>
    </div>
    <div class="navbar-end">
      <router-link :to="{name: 'craft-post'}" class="navbar-item">
        Post craft
      </router-link>
      <router-link :to="{name: 'craft-tutorial'}" class="navbar-item">
        Create tutorial
      </router-link>

      <!-- User profile here -->
    </div>
  </nav>
</template>

<script>
import categories from '@/datas/categories'

export default {
  data() {
    return {
      categories: categories
    }
  }
}
</script>
