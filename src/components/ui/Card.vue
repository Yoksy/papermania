<template>
  <router-link :to="{ name: 'itemView', params: { id: item.item_id } }" class="card-wrapper h-100">
    <div class="card h-100">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="item.medias.thumbnail" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h3 class="card-content__title is-size-6 ellispis">{{item.title}}</h3>
          <p class="card-content__description ellispis is-size-7">{{item.description | limit(100)}}</p>
        </div>
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="item.author.avatar" />
            </figure>
          </div>
          <div class="media-content">
            <p class="is-6 is-bold">
              By {{item.author.display_name}}
              <router-link :to="{ name: 'userProfile', params: { id: item.author.user_id } }">
                <small>@{{item.author.username}}</small>
              </router-link>
            </p>
            <p class="is-size-7">{{item.createdAt | timeAgo}}</p>
          </div>
        </div>

        <div class="tags">
          <router-link class="tag"
          v-for="(tag, index) in item.tags"
          :key="index"
          :to="{ name: 'tagList', params: { tag: hyphenate(tag) } }">
            <span>{{tag}}</span>
          </router-link>
        </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span class="icon">
            <i class="mdi mdi-timelapse"></i>
          </span>
          <span class="is-size-7">{{item.completion_time | duration}}</span>
        </p>
        <p class="card-footer-item">
          <span class="icon">
            <i class="mdi mdi-buffer"></i>
          </span>
          <span class="is-size-7">{{item.difficulty | difficulty}}</span>
        </p>
        <p class="card-footer-item">
          <span class="icon">
            <i class="mdi mdi-heart-outline"></i>
          </span>
          <span class="is-size-7">{{item.meta.votes | largeNumber}}</span>
        </p>
        <p class="card-footer-item">
          <span class="icon">
            <i class="mdi mdi-comment-processing-outline"></i>
          </span>
          <span class="is-size-7">{{item.comments.length | largeNumber}}</span>
        </p>
      </footer>
    </div>
  </router-link>
</template>

<script>
import { hyphenate } from '@/helpers/helpers'

export default {
  props: ['item'],
  methods: {
    hyphenate: (str) => hyphenate(str)
  }
}
</script>

<style lang="scss">
.card-content {
  &__title {
    height: 36px;
    margin-bottom: 2rem;
  }

  &__description {
    min-height: 54px;
  }
}
</style>
