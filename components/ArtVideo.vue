<template>
  <div class="embed-responsive embed-responsive-16by9 art-src">
    <video controls class="embed-responsive-item">
      <source :src="src" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
export default {
  name: 'ArtVideo',
  props: {
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.art-src {
  width: 100%;
}

@include media-breakpoint-down(md) {
  .art-src {
    width: 100vw;
    position: fixed;
  }
}

</style>
