<template>
  <div>
    <img
      v-if="showModal == false"
      :srcset="src.srcSet"
      alt="Untitled 1"
      class="art-src"
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

.art-src {
  max-height: 70vh;
  max-width: 50vw;

  img {
    object-fit: contain;
  }

  &:hover {
    cursor: pointer;
  }
}

.art-modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 2rem;
  z-index: 100;

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

  &-controls-lg {
    width: 100%;
    position: fixed;
    display: flex;
    height: 4rem;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 0;
    background: white;
  }

  &-controls-md {
    display: none;
  }
}

@include media-breakpoint-down(md) {
  .art-src {
  max-height: 70vh;
  max-width: 55vw;

  &:hover {
    cursor: pointer;
  }
}

  .art-modal {
    &-controls-lg {
      display: none;
    }

    &-controls-md {
      width: 100%;
      position: fixed;
      display: flex;
      height: 6rem;
      justify-content: center;
      align-items: center;
      left: 0;
      bottom: 0;
      background: white;
      text-align: center;

      .button {
        padding-bottom: 4rem;
      }
    }
  }
}
</style>
