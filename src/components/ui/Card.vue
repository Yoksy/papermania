<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="item.coverSmall" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-6">{{item.name}}</p>

      <div class="content">
        <p class="ellispis">{{item.descriptionShort}}</p>
      </div>

      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/64x64.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="is-6">{{item.author}}</p>
          <p>On <time datetime="2016-1-1">{{item.createdAt}}</time></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
.card-content > .title {
  min-height: 36px;
  margin-bottom: 6px;
}

.ellispis {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3; /* number of lines to show */
   line-height: 18px;        /* fallback */
   max-height: 18px * 3;       /* fallback */
}
</style>
