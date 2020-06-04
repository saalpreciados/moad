<template>
  <div>
    <div class="expo-wrapper">
      <nuxt-child :expo="expo1" />
    </div>
    <expo-nav v-if="!showMap && !showModal" :expo="expo1" />
  </div>
</template>

<script>
import expo1 from '@/assets/expo1.js'
import ExpoNav from '@/components/ExpoNav'

export default {
  components: {
    ExpoNav
  },
  middleware ({ route, redirect }) {
    if (!(route.path.endsWith('map')) && !(route.params.id)) {
      return redirect(`/expo/${expo1[0].id}`)
    }
  },
  data () {
    return {
      expo1
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
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
      this.$store.commit('changeCurrentArt', { art: expo1[this.currentSlide.number].title, author: expo1[this.currentSlide.number].author })
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
              number: this.expo1.findIndex(slide => slide.id === this.$route.params.id),
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
