<template>
  <div>
    <art-img-modal v-if="src.type === 'img'" :src="src.url" />
    <art-3d-modal v-if="src.type === '3d'" :src="src.url" />
    <art-html-modal v-if="src.type === 'html'" :src="src" />
  </div>
</template>

<script>
import ArtImgModal from './ArtImgModal'
import Art3dModal from './Art3dModal'
import ArtHtmlModal from './ArtHtmlModal'

export default {
  name: 'Art',
  components: {
    ArtImgModal,
    Art3dModal,
    ArtHtmlModal
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
@import '../../sass/variables';

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
