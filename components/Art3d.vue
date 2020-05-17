<template>
  <div class="art-3d">
    <div class="model-wrapper" @click="toggleModal()">
      <model-obj
        :src="src"
        :controls-options="{
          enablePan,
          enableZoom,
          enableRotate,
        }"
        @on-load="onLoad"
      />
      <client-only>
        <Lottie
          v-show="loading"
          class-name="loading-icon"
          renderer="svg"
          :loop="true"
          :autoplay="true"
          :animation-data="loadingIcon"
        />
      </client-only>
    </div>
    <div v-if="showModal" class="art-modal">
      <div class="model-wrapper-modal">
        <model-obj
          :src="src"
        />
      </div>
      <ul class="art-modal-controls-lg">
        <li><i class="las la-search-plus" /> Roda del ratolí</li>
        <li><i class="las la-undo-alt" /> Click + moure</li>
        <li><i class="las la-arrows-alt" /> Espai + moure</li>
      </ul>
      <div v-if="showModal" class="art-modal-controls-md" @click.stop>
        <button class="button" @click="toggleModal()">
          <i class="las la-times" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie-web'
import loadingIcon from '../assets/icons/loading.json'

export default {
  name: 'Art3d',

  components: {
    Lottie
  },
  props: {
    src: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      enablePan: false,
      enableZoom: false,
      enableRotate: false,
      loading: true,
      loadingIcon
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
    },
    onLoad () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.art-3d {
  height: 100%;
  width: 100%;
}

.model-wrapper {
  width: 100%;
  height: 100%;
  float: left;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &-modal {
    width: 90vw;
    height: 90vh;
  }
}

.loading-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 3rem;
  height: 3rem;
}

.art-src {
  height: 100%;
  width: 100%;

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
  padding: 0 2rem;
  z-index: 100;
  align-items: center;
  justify-items: center;

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
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 1.5rem;
    }

    i {
      font-size: 1.25rem;
    }
  }

  &-controls-md {
    display: none;
  }
}

@include media-breakpoint-down(md) {
.art-3d {
  .model-wrapper {
    position: fixed;
  }
}

.art-src {
  &:hover {
    cursor: pointer;
  }
}

  .art-modal {
    padding: 0 1rem;

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
