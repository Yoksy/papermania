<template>
<layout-main>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Test craft</h1>

        <div class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                By <strong>John Smith</strong><br /> <small>@johnsmith</small>
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
              <span class="tag is-medium"><strong>~3h30</strong></span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-warning is-medium">
                <span class="icon">
                  <i class="mdi mdi-buffer"></i>
                </span>
              </span>
              <span class="tag is-medium">Beginner</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-danger is-medium">
                <span class="icon">
                  <i class="mdi mdi-heart-outline"></i>
                </span>
              </span>
              <span class="tag is-medium">8,5k likes</span>
            </div>
          </div>

          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-danger is-medium">
                <span class="icon">
                  <i class="mdi mdi-download"></i>
                </span>
              </span>
              <span class="tag is-medium">125k downloads</span>
            </div>
          </div>

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
        <p>
          <span>Posted by <strong>John Smith</strong> on 2017-05-03 at 11:15</span>
        </p>
        <p>Sed sollicitudin orci non ex dapibus efficitur. Praesent ac nisl auctor, viverra leo ac, consectetur nunc. Nam quam odio, lobortis sit amet accumsan nec, convallis non metus. Etiam rhoncus maximus ante hendrerit tincidunt. Mauris vitae odio sit amet quam eleifend ultrices. Cras ornare vitae nulla a fermentum. Ut tempor felis erat, et volutpat lectus luctus sed. Vivamus molestie malesuada dolor, eget eleifend nunc malesuada blandit. Nunc at finibus sem. Nam est justo, mattis at tellus quis, laoreet auctor eros.</p>
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

        <div class="gallery">
          <gallery
            :images="gallery.items"
            :index="gallery.index"
            :options="{
              youTubeVideoIdProperty: 'youtube',
              youTubePlayerVars: undefined,
              youTubeClickToPlay: true,
              closeOnSlideClick: true
            }"
            @close="gallery.index = null"></gallery>

          <div class="image-wrapper"
            v-for="(image, imageIndex) in gallery.items"
            :key="imageIndex"
            @click="gallery.index = imageIndex">
            <div class="image">
              <span class="image-expand">
                <span>View in full size</span>

                <span class="icon is-medium">
                  <i class="mdi mdi-24px mdi-arrow-expand"></i>
                </span>
              </span>
              <img :src="image.poster || image.href" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="content">
        <h2 class="title font-pacifico">Downloads</h2>

        <p>There is currently 3 downloads available:</p>
      </div>

      <div class="list-download">
        <p>
          <span class="tag is-link is-medium">
            <span class="icon">
              <i class="mdi mdi-download"></i>
            </span>
          </span>
          <a href="download/monkey-d-luffy.pdf">monkey-d-luffy.pdf (PDF - 34,5kb - ~125k downloads)</a>
        </p>
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
import Gallery from 'vue-gallery';
import LayoutMain from '@/components/layouts/main'

export default {
  components: {
    LayoutMain,
    Gallery
  },
  data() {
    return {
      gallery: {
        items: [
          {
            title: 'A YouYube video',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            href: 'https://dummyimage.com/800/ffffff/000000',
            alt: 'test alt'
          },
          {
            href: 'https://dummyimage.com/1280/000000/ffffff',
            alt: 'test alt 2'
          }
        ],
        index: null
      }
    };
  }
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
</style>
