<template>
<layout-main>
  <section class="hero is-medium" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">{{item.title}}</h1>

        <div class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="item.author && item.author.avatar">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p v-if="item.author">
                By <strong>{{item.author.display_name}}</strong><br />
                <router-link :to="{ name: 'userProfile', params: { id: item.author.user_id } }">
                  <small>@{{item.author.username}}</small>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-footer">
      <div class="container">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-warning is-medium">
                <span class="icon">
                  <i class="mdi mdi-timelapse"></i>
                </span>
              </span>
              <span class="tag is-medium"><strong>~{{item.completion_time | duration}}</strong></span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-warning is-medium">
                <span class="icon">
                  <i class="mdi mdi-buffer"></i>
                </span>
              </span>
              <span class="tag is-medium">{{item.difficulty | difficulty}}</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-danger is-medium">
                <span class="icon">
                  <i class="mdi mdi-heart-outline"></i>
                </span>
              </span>
              <span class="tag is-medium">{{item.meta && item.meta.votes | largeNumber}} votes</span>
            </div>
          </div>

          <!-- <div class="control">
            <div class="tags has-addons">
              <span class="tag is-danger is-medium">
                <span class="icon">
                  <i class="mdi mdi-download"></i>
                </span>
              </span>
              <span class="tag is-medium">125k downloads</span>
            </div>
          </div> -->

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-info is-medium">
                <span class="icon">
                  <i class="mdi mdi-comment-processing-outline"></i>
                </span>
              </span>
              <span class="tag is-medium">34 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="content">
        <p v-if="item.author">
          <span>Posted by <strong>{{item.author.display_name}}</strong>
          <router-link :to="{ name: 'userProfile', params: { id: item.author.user_id } }">
            <small>@{{item.author.username}}</small>
          </router-link>
          on {{item.createdAt | posted}}</span>
        </p>
        <p>{{item.description}}</p>
      </div>

      <div class="buttons">
        <button type="button" class="button is-danger is-outlined">
          <span class="icon">
            <i class="mdi mdi-heart-outline"></i>
          </span>
          <span>Like</span>
        </button>

        <button type="button" class="button is-info is-outlined">
          <span class="icon">
            <i class="mdi mdi-bookmark-outline"></i>
          </span>
          <span>Bookmark</span>
        </button>

        <button type="button" class="button is-info">
          <span class="icon">
            <i class="mdi mdi mdi-comment-processing-outline"></i>
          </span>
          <span>Comment</span>
        </button>

        <button type="button" class="button is-link">
          <span class="icon">
            <i class="mdi mdi-download"></i>
          </span>
          <span>Download</span>
        </button>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title font-pacifico">Gallery</h2>

        <div class="gallery" v-if="item.medias">
          <gallery
            :images="gallery.images"
            :index="gallery.index"
            :options="{
              youTubeVideoIdProperty: 'youtube',
              youTubePlayerVars: undefined,
              youTubeClickToPlay: true,
              closeOnSlideClick: true
            }"
            @close="gallery.index = null"></gallery>

          <div class="image-wrapper"
            v-for="(image, index) in gallery.images"
            :key="index"
            @click="gallery.index = index">
            <div class="image">
              <span class="image-expand">
                <span>View in full size</span>

                <span class="icon is-medium">
                  <i class="mdi mdi-24px mdi-arrow-expand"></i>
                </span>
              </span>
              <img :src="image.thumbnail" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="content" v-if="item.medias">
        <h2 class="title font-pacifico">Downloads</h2>

        <p v-if="item.medias.download.length > 0">There is currently {{item.medias.download.length}} downloads available:</p>
        <p v-if="item.medias.download.length === 0">There is currently no downloads available</p>
      </div>

      <div class="list-download">
        <ul v-if="item.medias">
          <li v-for="(download, index) in item.medias.download" :key="index">
            <span class="tag is-link is-medium">
              <span class="icon">
                <i class="mdi mdi-download"></i>
              </span>
            </span>
            <a href="download/monkey-d-luffy.pdf">{{download}} (PDF - 34,5kb - ~125k downloads)</a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title font-pacifico">Comments</h2>
      </div>
    </div>
  </section>

</layout-main>
</template>

<script>
import { mapState } from 'vuex'
import Gallery from 'vue-gallery';
import LayoutMain from '@/components/layouts/main'

export default {
  components: {
    LayoutMain,
    Gallery
  },
  /* data() {
    return {
      gallery: {
        images: [
          {
            href: 'https://dummyimage.com/800/ffffff/000000',
            alt: 'alt'
          }
        ],
        index: null
      }
    }
  }, */
  computed: {
    ...mapState('items', ['currentItem']),
    item() {
      return this.currentItem
    },
    backgroundImage() {
      return this.currentItem.medias && this.currentItem.medias.cover
    },
    gallery() {
      return {
        images: this.currentItem.medias && this.currentItem.medias.gallery,
        index: null
      }
    }
  },
  created() {
    this.$store.dispatch('items/LOAD_ITEM', {
      id: this.$route.params.id,
      slug: this.$route.params.slug
    })
  },
}
</script>

<style lang="scss">
  .hero-head {
    position: relative;

    .buttons {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .list-download li {
    margin-bottom: 12px;
  }
</style>
