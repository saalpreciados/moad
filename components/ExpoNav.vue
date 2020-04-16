<template>
  <div v-if="!showModal" class="expo-nav">
    <a class="expo-nav-progress" :style="progressBarLength" href="/" />
    <button class="expo-nav-prev button" @click="prevSlide()">
      ←
    </button>
    <a class="expo-nav-map d-lg-none d-xl-none" href="/"> Mapa </a>
    <button class="expo-nav-next button" @click="nextSlide()">
      →
    </button>
  </div>
</template>

<script>
export default {
  props: {
    expoLength: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    progressBarLength () {
      return 'width:' + ((this.currentSlide + 1) / this.expoLength) * 100 + '%'
    },
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    nextSlide () {
      if (this.expoLength > (this.currentSlide + 1)) {
        this.$store.commit('changeCurrentSlide', 1)
      }
    },
    prevSlide () {
      if ((this.currentSlide - 1) >= 0) {
        this.$store.commit('changeCurrentSlide', -1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-nav {
  &-progress {
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 4px solid $primary;
    transition: .25s ease-out;

    &:hover {
      border-top: 8px solid $primary;
      cursor: pointer;
    }
  }

  &-next, &-prev {
    position: fixed;
    font-size: 3rem;
    bottom: 45vh;
  }

  &-next {
    right: 2.25rem;
  }

  &-prev {
    left: 2.25rem;
  }
}

@include media-breakpoint-down(md) {
  .expo-nav {
    position: fixed;
    bottom: 0;
    background-color: $light;
    z-index: 100;
    height: 4.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-next, &-prev {
      font-size: 2.35rem;
      bottom: 10px;
    }

    &-next {
    right: 0.5rem;
    }

    &-prev {
    left: 0.5rem;
    }
  }
}
</style>
