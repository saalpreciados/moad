<template>
  <div class="art-src">
    <img v-if="showModal == false" :srcset="src.thumbnail.srcSet" alt="Untitled 1" @click="toggleModal()">
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  img {
    max-width: calc(100vw - 18rem);
    height: $art-height;
    object-fit: contain;
  }

  &:hover {
    cursor: pointer;
  }
}

.art-modal {

  .art-html {
    overflow-y: scroll;
    align-self: center;
    justify-self: center;
    height: 90vh;
    width: 100%;
  }

}

@include media-breakpoint-down(md) {
  .art-src {
    align-items: center;

  img {
    max-width: 100vw;
    position: fixed;
  }

  &:hover {
    cursor: pointer;
  }
}
}
</style>
