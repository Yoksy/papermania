<template>
<div class="wrapper">
  <nav class="navbar is-primary container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" title="Papermania: a community driven platform to share any kind of paper models" class="navbar-item font-pacifico">
        <h1 class="title font-pacifico">Papermania</h1>
      </router-link>

      <div class="navbar-burger">
        <span>Lien 1</span>
        <span>Lien 2</span>
        <span>Lien 3</span>
      </div>
    </div>
    <div class="navbar-start navbar-menu">
      <router-link :to="{ name: 'categoryList', params: { category: category.slug }}" v-for="category in categories" :key="category.id" exact class="navbar-item">
        {{category.name}}
      </router-link>
    </div>
    <div class="navbar-end">
      <router-link :to="{name: 'postItem'}" exact class="navbar-item">
        Post craft
      </router-link>
      <router-link :to="{name: 'postTutorial'}" exact class="navbar-item">
        Create tutorial
      </router-link>

      <!-- User profile here -->
    </div>
  </nav>
</div>
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

<style lang="scss" scoped>
@import "~bulma/sass/utilities/functions";
@import "../../assets/sass/variables";

.wrapper {
  background-color: $primary;
}

h1 {
  color: findColorInvert($primary);
  font-weight: normal;
}
</style>
