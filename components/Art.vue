<template>
  <div class="expo-page-art">
    <img v-if="showModal == false" :src="img" alt="Untitled 1" @click="toggleModal()">
    <div v-if="showModal" class="art-modal">
      <v-zoomer ref="zoomer">
        <img
          :src="img"
          style="object-fit: contain; width: 100%; height: 100%;"
        >
      </v-zoomer>
      <div class="art-modal-controls">
        <button class="button controls-button" @click="$refs.zoomer.zoomIn()">
          +
        </button>
        <button class="button controls-button" @click="$refs.zoomer.zoomOut()">
          -
        </button>
        <button class="button controls-button" @click="showModal = false">
          x
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Art',
  props: {
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-page-art {
    align-self: center;
    justify-self: center;

    img {
      max-height: 70vh;
      max-width: 55vw;
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
  z-index: 10;

  .vue-zoomer {
    align-self: center;
    justify-self: center;

    img {
      max-height: 90vh;
      max-width: 100vw;
    }
  }

  &-controls {
    width: 100%;
    position: fixed;
    display: flex;
    height: 3.5rem;
    justify-content: center;
    left: 0;
    bottom: 0;
    background: white;
  }

  .controls-button {
    font-size: 2.25rem;
    padding: 0 1rem;
  }
}

@include media-breakpoint-down(md) {
.expo-page-art {
    position: fixed;
    grid-area: art;
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-height: 100%;
      max-width: 90vw;
    }
  }
}

@media (max-width: 350px) {
.expo-page {
grid-template-rows: 57vh 1fr;

  &-art {
    height: 57vh;
  }
}
}
</style>
