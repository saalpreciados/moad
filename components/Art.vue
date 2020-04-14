<template>
  <div :class="[showModal ? 'expo-slide-art--modal-open' : 'expo-slide-art']">
    <img v-if="showModal == false" :src="img" alt="Untitled 1" @click="toggleModal()">
    <div v-if="showModal" class="art-modal" @click="toggleModal()">
      <v-zoomer ref="zoomer">
        <img
          :src="img"
          @click.stop
        >
      </v-zoomer>
      <div class="art-modal-controls" @click.stop>
        <button class="button button-sm" @click="$refs.zoomer.zoomIn()">
          <i class="las la-search-plus" />
        </button>
        <button class="button button-sm" @click="$refs.zoomer.zoomOut()">
          <i class="las la-search-minus" />
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

.expo-slide-art {
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
  z-index: 100;

  .vue-zoomer {
    overflow: initial;
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
    height: 4rem;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 0;
    background: white;
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

    img {
      max-height: 100%;
      max-width: 90vw;
    }

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
