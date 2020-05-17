<template>
  <div :class="[showModal ? 'expo-slide-art--modal-open' : 'expo-slide-art']">
    <art-img v-if="src.type === 'img'" :src="src.url" />
    <art-3d v-if="src.type === '3d'" :src="src.url" />
    <art-video v-if="src.type === 'video'" :src="src.url" />
    <art-html v-if="src.type === 'html'" :src="src" />
    <div v-if="src.type !== 'video'" class="expand-info">
      Expandir <i class="las la-expand" />
    </div>
  </div>
</template>

<script>
import ArtImg from './ArtImg'
import Art3d from './Art3d'
import ArtVideo from './ArtVideo'
import ArtHtml from './ArtHtml'

export default {
  name: 'Art',
  components: {
    ArtImg,
    Art3d,
    ArtVideo,
    ArtHtml
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

<style lang="scss">
@import '../sass/variables';

.expo-slide-art {
  height: 100%;
  width: 100%;
  max-height: 80vh;
  align-self: center;
  justify-self: center;
  position: relative;

  img {
    max-width: calc(100vw - 15rem);
    height: $art-height;
  }

  .expand-info {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: .25s ease-in-out;
    color: $black;
    display: flex;
    background: $white;
    padding: .25rem;
    font-size: .9rem;
    align-items: flex-end;

    i {
      font-size: 1.25rem;
      margin-left: .25rem;
    }
  }

  &:hover {
    .expand-info {
      visibility: initial;
      opacity: 1;
    }
  }
}

@include media-breakpoint-down(md) {
.expo-slide-art {
    grid-area: art;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1000;
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
