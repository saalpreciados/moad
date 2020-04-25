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
  min-width: 50vw;
  max-width: 100%;
  max-height: 70vh;
}

@include media-breakpoint-down(md) {
  .art-src {
  width: 98vw;
}
}

</style>
