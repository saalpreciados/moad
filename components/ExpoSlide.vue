<template>
  <div>
    <template v-if="!slide.custom">
      <div class="expo-slide">
        <art :img="slide.img" />
        <div v-if="!showModal" class="expo-slide-info">
          <div class="expo-slide-info-title">
            {{ slide.title }}
          </div>
          <div class="expo-slide-info-artist">
            {{ slide.author }}
          </div>
          <div class="expo-slide-info-share">
            <a :href="slide.twitter"><i class="lab la-twitter" /></a>
            <a :href="slide.link"><i class="las la-link" /></a>
          </div>
          <p class="expo-slide-info-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </template>
    <template v-if="slide.custom">
      <div class="expo-slide-custom container">
        <div class="expo-slide-custom-title">
          {{ slide.title }}
        </div>
        <p class="expo-slide-custom-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <template class="expo-slide-custom-html" />
      </div>
    </template>
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
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-slide {
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

    &-share {
      font-size: 1.75rem;
      a {
        &:hover {
          color: $primary;
        }
      }
    }
  }

  &-custom {
    margin-top: 4rem;
    align-self: center;
    &-title {
      font-size: 2.75rem
    }
  }
}

@include media-breakpoint-down(md) {
.expo-slide {
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
</style>
