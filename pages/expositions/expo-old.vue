<template>
  <div>
    {{ expositions[currentExpoNumber].id }}
    {{ expositions[currentExpoNumber].expo }}
  </div>
</template>

<script>
export default {
  props: {
    expositions: {
      type: Array,
      default: null
    }
  },

  computed: {
    currentExpoNumber () {
      return this.expositions.findIndex(expo => expo.id === this.$route.params.expo)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
