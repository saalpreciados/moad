<template>
  <div>
    <expo-slide :slide="expo[slideNumber]" />
    <nuxt-child :src="expo[slideNumber].src" />
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
    slideNumber () {
      return this.expo.findIndex(slide => slide.id === this.$route.params.id)
    },
    currentSlide () {
      return this.$store.state.currentSlide
    },
    showModal () {
      return this.$store.state.showModal
    }
  },

  watch: {
    currentSlide (newSlide, oldSlide) {
      this.$router.push(`${this.expo[this.currentSlide].id}`)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
