<template>
  <div class="expo-page">
    <art :img="slide.img" />
    <div class="expo-page-info">
      <div class="expo-page-info-title">
        {{ slide.title }}
      </div>
      <div class="expo-page-info-artist">
        {{ slide.author }}
      </div>
      <p class="expo-page-info-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
import Art from './Art'
export default {
  name: 'ExpoSlide',
  components: {
    Art
  },
  props: {
    slide: {
      type: Object,
      default: null
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-page {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin: 0 8rem;

  &-info {
    align-self: end;

    &-title {
      font-size: 1.75rem
    }

    &-artist {
      font-size: 1.25rem
    }

    &-description {
      margin: 0;
    }
  }
}

@include media-breakpoint-down(md) {
.expo-page {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 70vh 1fr;
grid-template-areas: "art"
                    "info";
gap: 1.5rem;
margin: 0;

  &-info {
    background-color: $light;
    border-top: 1.5px solid $body-color;
    position: relative;
    grid-area: info;
    padding: 1rem;
  }
}

}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.scale-fade-enter-active {
  transition: all .3s ease;
}
.scale-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.scale-fade-enter, .slide-fade-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
</style>
