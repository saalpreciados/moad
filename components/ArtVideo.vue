<template>
  <video controls class="art-src">
    <source :src="src" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
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
  height: $art-height;
}

@include media-breakpoint-down(md) {
  .art-src {
    width: 100vw;
    position: fixed;
  }
}

</style>
