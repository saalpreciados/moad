<template>
  <div :class="{'expo-slide' : true, 'expo-slide-custom': slide.custom, 'container' : slide.custom }">
    <template v-if="!slide.custom">
      <art :src="slide.src" />
      <div v-if="!showModal" class="expo-slide-info">
        <div class="expo-slide-info-main">
          <div class="expo-slide-info-art">
            <div class="expo-slide-info-title">
              {{ slide.title }}
            </div>
            <div class="expo-slide-info-artist">
              {{ slide.author }}
            </div>
          </div>
          <div class="expo-slide-info-share">
            <a v-if="slide.twitter" :href="'https://twitter.com/'+slide.twitter" target="_blank"><i class="lab la-twitter" /></a>
            <a v-if="slide.instagram" :href="'https://instagram.com/'+slide.instagram" target="_blank"><i class="lab la-instagram" /></a>
            <a v-if="slide.youtube" :href="'https://youtube.com/'+slide.youtube" target="_blank"><i class="lab la-youtube" /></a>
            <a v-if="slide.soundcloud" :href="'https://soundcloud.com/'+slide.soundcloud" target="_blank"><i class="lab la-soundcloud" /></a>
            <a v-if="slide.web" :href="slide.web" target="_blank"><i class="lab la-youtube" /></a>
            <a><i class="las la-link" /></a>
          </div>
        </div>
        <p class="expo-slide-info-description">
          {{ slide.technique }}
        </p>
        <p v-if="slide.description" class="expo-slide-info-description">
          {{ slide.description }}
        </p>
        <p v-if="slide.artistnotes" class="expo-slide-info-description">
          Nota de l'artista: {{ slide.artistnotes }}
        </p>
      </div>
    </template>
    <template v-if="slide.custom">
      <div class="expo-slide-custom-title">
        {{ slide.title }}
      </div>
      <p class="expo-slide-custom-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <template class="expo-slide-custom-html" />
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
  grid-template-columns: 1fr;
  grid-template-rows: $art-height 1fr;
  gap: 1.5rem;
  margin: 0 8rem;
  justify-items: center;

  &-info {
    align-self: end;
    width: 100%;
    max-width: 800px;
    border-top: 1.5px black solid;
    padding-top: 1.5rem;

    &-main {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }

    &-art {
      margin-right: auto;
    }

    &-title {
      font-size: 1.75rem
    }

    &-artist {
      font-size: 1.25rem
    }

    &-description {
      margin: 0;
      max-width: 800px;
      line-height: 1.5;
    }

    &-share {
      font-size: 2rem;
      a {
        &:hover {
          color: $primary;
          cursor: pointer;
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
