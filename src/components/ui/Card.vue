<template>
  <div class="card h-100">
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
            <img :src="item.authorImage" />
          </figure>
        </div>
        <div class="media-content">
          <p class="is-6 is-bold">
            By
            <router-link :to="{ name: 'userProfile', params: { id: item.authorId } }">
              @{{item.authorName}}
            </router-link>
          </p>
          <p class="is-size-7">{{item.createdAt | timeAgo}}</p>
        </div>
      </div>
    </div>




    <footer class="card-footer">
      <p class="card-footer-item">
        <span class="icon">
          <i class="mdi mdi-timelapse"></i>
        </span>
        <span class="is-size-7">{{item.completionTime | duration}}</span>
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
        <span class="is-size-7">{{item.nbLikes | largeNumber}}</span>
      </p>
      <p class="card-footer-item">
        <span class="icon">
          <i class="mdi mdi-comment-processing-outline"></i>
        </span>
        <span class="is-size-7">{{item.nbComments | largeNumber}}</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss">
.card-content {
  > .title {
    min-height: 36px;
    margin-bottom: 6px;
  }

  .content p {
    min-height: 54px;
  }
}
</style>
