<template>
  <div class="art-img">
    <img
      v-if="showModal == false"
      :srcset="src.srcSet"
      alt="Untitled 1"
      @click="toggleModal()"
    >
    <div v-if="showModal" class="art-modal" @click="toggleModal()">
      <v-zoomer ref="zoomer">
        <img
          :src="src.images[src.images.length-1].path"
          @click.stop
        >
      </v-zoomer>
      <div class="art-modal-controls-lg" @click.stop>
        <button class="button button-sm" @click="$refs.zoomer.zoomIn()">
          <i class="las la-search-plus" />
        </button>
        <button class="button button-sm" @click="$refs.zoomer.zoomOut()">
          <i class="las la-search-minus" />
        </button>
      </div>
      <div v-if="showModal" class="art-modal-controls-md" @click.stop>
        <button class="button" @click="toggleModal()">
          <i class="las la-times" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtImg',
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.art-img {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }

  &:hover {
    cursor: zoom-in;
  }
}

.art-modal {
  .vue-zoomer {
    overflow: initial;
    align-self: center;
    justify-self: center;

    img {
      cursor: move;
      max-height: 90vh;
      max-width: 100vw;
    }
  }

  &-controls-md {
    display: none;
  }
}

@include media-breakpoint-down(md) {
  .art-img {
    align-items: center;
    position: fixed;

    img {
      max-width: 100vw;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .expo-slide-art--modal-open {
    .art-img {
      position: inherit;
    }
  }
}
</style>
