<template>
  <div v-if="!showModal" class="expo-nav">
    <button id="progress-bar" class="expo-nav-progress button-def" :style="progressBarLength" @click="toggleMap()" @mousedown.prevent />
    <b-tooltip target="progress-bar" triggers="hover" offset="10000px" custom-class="tooltip-moad">
      Obrir Mapa
    </b-tooltip>
    <button v-if="showControls" class="expo-nav-prev button" @click="prevSlide()" @mousedown.prevent>
      <span>←</span>
    </button>
    <button v-if="showControls" class="expo-nav-map d-lg-none d-xl-none button-def" @click="toggleMap()" @mousedown.prevent>
      Mapa
    </button>
    <button v-if="showControls" class="expo-nav-next button" @click="nextSlide()" @mousedown.prevent>
      <span>→</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    expoLength: {
      type: Number,
      default: 0
    },
    showControls: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    progressBarLength () {
      return 'width:' + ((this.currentSlide) / this.expoLength) * 100 + '%'
    },
    showModal () {
      return this.$store.state.showModal
    },
    showMap () {
      return this.$store.state.showMap
    }
  },
  methods: {
    nextSlide () {
      if (this.expoLength > (this.currentSlide + 1)) {
        this.$store.commit('changeCurrentSlide', this.currentSlide + 1)
      }
    },
    prevSlide () {
      if ((this.currentSlide - 1) >= 0) {
        this.$store.commit('changeCurrentSlide', this.currentSlide - 1)
      }
    },
    toggleMap () {
      this.$store.commit('toggleMap')
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
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

    &:hover {
      span {
        display: block;
        animation-name: slide-fade-right;
        animation-duration: 1.25s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
      }
    }
  }

  &-prev {
    left: 2.25rem;

    &:hover {
      span {
        display: block;
        animation-name: slide-fade-left;
        animation-duration: 1.25s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
      }
    }
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

@keyframes slide-fade-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    30% {
      transform: translateX(20px);
      opacity: 0;
    }
    31% {
      transform: translateX(-20px);
      opacity: 0;
    }
  }

  @keyframes slide-fade-left {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    44% {
      transform: translateX(-20px);
      opacity: 0;
    }
    45% {
      transform: translateX(20px);
      opacity: 0;
    }
  }
</style>
