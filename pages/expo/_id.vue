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
  },

  transition: {
    name: 'slide',
    mode: 'out-in'
  }
}
</script>

<style lang="scss">
.slide-enter-active, .slide-leave-active {
  opacity: 1;
  transition: .5s ease-out;
}

.slide-enter {
  opacity: 0;
  transform: scale(1.1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale(1.9);
}
</style>
