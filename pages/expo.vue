<template>
  <div>
    <div class="expo-wrapper">
      <transition name="fade" mode="out-in">
        <template v-for="(expo, i) in expo1">
          <expo-slide v-if="i == currentSlide" :key="i" :slide="expo1[currentSlide]" />
        </template>
      </transition>
    </div>
    <expo-nav :expo-length="expoLength" />
  </div>
</template>

<script>
import expo1 from '../assets/expo1.js'
import ExpoSlide from '../components/ExpoSlide'
import ExpoNav from '../components/ExpoNav'

export default {
  components: {
    ExpoSlide,
    ExpoNav
  },
  data () {
    return {
      expo1,
      showModal: false
    }
  },
  computed: {
    expoLength () {
      return this.expo1.length
    },
    currentSlide () {
      return this.$store.state.currentSlide
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.expo-wrapper {
  display: grid;
  height: 92vh;
  margin: 0;
  place-items: center center;
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    height: 90vh;
    margin: 0;
    place-items: center end;
  }
}
</style>
