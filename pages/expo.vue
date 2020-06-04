<template>
  <div>
    <div class="expo-wrapper">
      <transition name="slide" mode="out-in">
        <nuxt-child :expo="expo" />
      </transition>
    </div>
    <expo-nav v-if="!showMap && !showModal" :expo="expo" />
  </div>
</template>

<script>
import expositions from '@/assets/expositions.js'
import ExpoNav from '@/components/ExpoNav'

export default {
  components: {
    ExpoNav
  },
  middleware ({ route, redirect }) {
    if (!(route.path.endsWith('map')) && !(route.params.id)) {
      return redirect(`/expo/${this.expo[0].id}`)
    }
  },
  data () {
    return {
      expositions
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    currentExpo () {
      return this.$store.state.currentExpo
    },
    expo () {
      return expositions[this.currentExpo].expo
    },
    showMap () {
      return this.$store.state.showMap
    },
    route () {
      return this.$store.state.route.path
    },
    routeParams () {
      return this.$store.state.route.params
    },
    showModal () {
      return this.$store.state.showModal
    }
  },
  watch: {
    currentSlide (newslide, oldslide) {
      this.$store.commit('changeCurrentArt', { art: this.expo[this.currentSlide.number].title, author: this.expo[this.currentSlide.number].author })
    },
    route: {
      handler (from, to) {
        if (from.endsWith('modal')) {
          this.$store.commit('toggleModal', 'open')
        } else if (from.endsWith('map')) {
          this.$store.commit('toggleMap', 'open')
        } else {
          this.$store.commit('toggleModal', 'close')
          this.$store.commit('toggleMap', 'close')
        }
      },
      immediate: true,
      deep: true
    },
    routeParams: {
      handler (from, to) {
        if (this.$route.params.id) {
          this.$store.commit('changeCurrentSlide',
            {
              number: this.expo.findIndex(slide => slide.id === this.$route.params.id),
              id: this.$route.params.id
            })
        }
      },
      immediate: true,
      deep: true
    }
  },
  transition: {
    name: 'expo',
    mode: 'out-in'
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-wrapper {
  display: grid;
  min-height: calc(100vh - 8rem);
  margin: 0 0 4rem 0;
  place-items: center center;
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    height: 90vh;
    margin: 0;
    place-items: center end;
  }
}

.expo-enter-active, .expo-leave-active {
  transition: .5s ease-out;
}

.expo-enter {
  opacity: 0;
  transform: scale(1.1);
}

.expo-leave-to {
  opacity: 0;
  transform: scale(1.9);
}
</style>
