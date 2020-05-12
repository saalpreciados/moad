<template>
  <div id="art-img" type="text/x-template">
    <div class="art-img">
      <button class="art-img-trigger" type="button" @click="toggleModal">
        <img
          ref="thumb"
          class="art-src"
          :srcset="src.srcSet"
          alt="Untitled 1"
        >
      </button>
      <transition name="dialog" @enter="enter" @leave="leave">
        <div v-show="showModal" ref="dialog" class="art-modal">
          <img ref="animate" class="art-img-animate" :class="{ loading: !loaded }" :src="loaded ? src.images[src.images.length-1].path : src.srcSet">
          <v-zoomer ref="zoomer">
            <img
              ref="full"
              class="art-img-full"
              :src="showModal && src.images[src.images.length-1].path"
              @load="onLoadFull"
            >
          </v-zoomer>
          <div class="art-modal-controls-lg" @click.stop>
            <button class="button button-sm" @click="$refs.zoomer.zoomIn()">
              <i class="las la-search-plus" />
            </button>
            <button class="button button-sm" @click="$refs.zoomer.zoomOut()">
              <i class="las la-search-plus" />
            </button>
          </div>
          <div v-if="showModal" class="art-modal-controls-md" @click.stop>
            <button class="button" @click="toggleModal()">
              <i class="las la-times" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageDialog',

  props: {
    src: {
      type: String,
      default: ''
    },
    fullWidth: {
      type: Number,
      default: 0
    },
    fullHeight: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      loaded: false
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

    enter () {
      this.animateImage(
        this.$refs.thumb,
        this.$refs.full
      )
    },

    leave () {
      this.animateImage(
        this.$refs.full,
        this.$refs.thumb
      )
    },

    onLoadFull () {
      this.loaded = true
    },

    animateImage (startEl, destEl) {
      const start = this.getBoundForDialog(startEl)
      this.setStart(start)

      this.$nextTick(() => {
        const dest = this.getBoundForDialog(destEl)
        this.setDestination(start, {
          top: dest.top,
          left: dest.left,
          width: dest.width || this.fullWidth,
          height: dest.height || this.fullHeight
        })
      })
    },

    getBoundForDialog (el) {
      const bound = el.getBoundingClientRect()
      const dialog = this.$refs.dialog
      return {
        top: bound.top + dialog.scrollTop,
        left: bound.left + dialog.scrollLeft,
        width: bound.width,
        height: bound.height
      }
    },

    setStart (start) {
      const el = this.$refs.animate
      el.style.left = start.left + 'px'
      el.style.top = start.top + 'px'
      el.style.width = start.width + 'px'
      el.style.height = start.height + 'px'
      el.style.transitionDuration = '0s'
      el.style.transform = ''
    },

    setDestination (start, dest) {
      const el = this.$refs.animate
      el.style.transitionDuration = ''

      const translate = `translate(${dest.left - start.left}px, ${dest.top - start.top}px)`
      const scale = `scale(${dest.width / start.width}, ${dest.height / start.height})`
      el.style.transform = `${translate} ${scale}`
    }
  }
}
</script>

<style lang="scss" scoped>

.vue-zoomer img {
  max-height: 90vh;
  max-width: 100vw;
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

.art-src {
  max-height: 70vh;
  max-width: 50vw;

  img {
    object-fit: contain;
  }
}

.art-img {
  &-trigger {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  &-animate {
    display: none;
    position: absolute;
    transform-origin: left top;

    &.loading {
      display: block;
    }
  }
}

.dialog {
  &-enter-active,
  &-leave-active {
    transition: background-color 300ms ease-out;
  }

  &-enter,
  &-leave-to {
    background-color: rgba(255, 255, 255, 0);
  }

  &-enter-active .art-img-animate,
  &-leave-active .art-img-animate {
    display: block;
    transition: transform 300ms cubic-bezier(1, 0, .7 , 1);
  }

  &-enter-active .art-img-full,
  &-leave-active .art-img-full {
    visibility: hidden;
  }
}
</style>
