<template>
  <div :class="[showModal ? 'expo-slide-art--modal-open' : 'expo-slide-art']">
    <art-img v-if="src.type === 'img'" :src="src.url" />
    <art-3d v-if="src.type === '3d'" :src="src.url" />
  </div>
</template>

<script>
import ArtImg from './ArtImg'
import Art3d from './Art3d'

export default {
  name: 'Art',
  components: {
    ArtImg,
    Art3d
  },
  props: {
    src: {
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

.expo-slide-art {
  align-self: center;
  justify-self: center;
}

@include media-breakpoint-down(md) {
.expo-slide-art {
    position: fixed;
    grid-area: art;
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &--modal-open {
      align-self: center;
      justify-self: center;

      img {
        max-height: 70vh;
        max-width: 55vw;
      }
    }
  }
}

@media (max-width: 350px) {
.expo-slide {
grid-template-rows: 57vh 1fr;

  &-art {
    height: 57vh;
  }
}
}
</style>
