<template>
  <div>
    <expo-slide :slide="expo[currentSlide.number]" />
    <nuxt-child :src="expo[currentSlide.number].src" />
  </div>
</template>

<script>
import ExpoSlide from '@/components/ExpoSlide'

export default {
  components: {
    ExpoSlide
  },

  props: {
    expo: {
      type: Array,
      default: null
    }
  },

  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
