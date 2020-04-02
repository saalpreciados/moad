<template>
  <div>
    <div class="expo-wrapper">
      <transition name="fade" mode="out-in">
        <template v-for="(expo, i) in expo1">
          <expo-slide v-if="i == currentSlide" :key="i" :slide="expo1[currentSlide]" />
        </template>
      </transition>
    </div>
    <div class="expo-nav">
      <a class="expo-nav-progress" :style="progressBarLength" href="/" />
      <button class="expo-nav-prev button" @click="prevSlide()">
        ←
      </button>
      <a class="expo-nav-map d-lg-none d-xl-none" href="/"> Mapa </a>
      <button class="expo-nav-next button" @click="nextSlide()">
        →
      </button>
    </div>
  </div>
</template>

<script>
import expo1 from '../assets/expo1.js'
import ExpoSlide from '../components/ExpoSlide'

export default {
  components: {
    ExpoSlide
  },
  data () {
    return {
      currentSlide: 0,
      expo1
    }
  },
  computed: {
    progressBarLength () {
      return 'width:' + ((this.currentSlide + 1) / this.expo1.length) * 100 + '%'
    }
  },
  methods: {
    nextSlide () {
      if (this.expo1.length > (this.currentSlide + 1)) {
        this.currentSlide = this.currentSlide + 1
      }
    },
    prevSlide () {
      if ((this.currentSlide - 1) >= 0) {
        this.currentSlide = this.currentSlide - 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.fade-enter-active, .fade-leave-active {
  transition: .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}

.expo-wrapper {
  display: grid;
  height: 92vh;
  margin: 0;
  place-items: center center;
}

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

    &::before {
      content: '';
      z-index: -10;
      width: 100px;
      height: 100px;
      background-color: gray;
    }
  }

  &-next {
    right: 2.25rem;
  }

  &-prev {
    left: 2.25rem;
  }
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    display: block;
    height: 92vh;
    margin: 0;
  }

  .expo-nav {
    position: fixed;
    bottom: 0;
    background-color: $light;
    z-index: 100;
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &-next, &-prev {
      bottom: 0;
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
