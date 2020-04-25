<template>
  <div>
    <img v-if="showModal == false" :src="src.thumbnail" alt="Untitled 1" class="art-src" @click="toggleModal()">
    <div v-if="showModal" class="art-modal" @click="toggleModal()">
      <embed :src="src.url" class="art-html">
      <div class="art-modal-controls-lg" @click.stop />
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
  name: 'ArtHtml',
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
  max-width: 55vw;

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
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 1rem;
  z-index: 100;

  .art-html {
    overflow-y: scroll;
    align-self: center;
    justify-self: center;
    height: 90vh;
    width: 100%;
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
