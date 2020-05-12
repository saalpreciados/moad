<template>
  <div :class="[showModal ? 'expo-slide-art--modal-open' : 'expo-slide-art']">
    <image-dialog v-if="src.type === 'img'" :src="src.url" />
    <art-3d v-if="src.type === '3d'" :src="src.url" />
    <art-video v-if="src.type === 'video'" :src="src.url" />
    <art-html v-if="src.type === 'html'" :src="src" />
    <div v-if="src.type !== 'video'" class="expand-info">
      Expandir <i class="las la-expand" />
    </div>
  </div>
</template>

<script>
import ImageDialog from './ImageDialog'
import Art3d from './Art3d'
import ArtVideo from './ArtVideo'
import ArtHtml from './ArtHtml'

export default {
  name: 'Art',
  components: {
    ImageDialog,
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

<style lang="scss" scoped>
@import '../sass/variables';

.expo-slide-art {
  align-self: center;
  justify-self: center;
  position: relative;

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
