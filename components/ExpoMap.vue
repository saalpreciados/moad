<template>
  <div>
    <div class="expo-wrapper">
      <h4>Mapa</h4>
      <h2 class="mb-4">
        Nom de l'exposició
      </h2>
      <ul class="expo-map">
        <li v-for="(art, i) in filteredExpo" :key="i" :class="{'expo-map-item': true, 'expo-map-item-selected': i === currentSlide}">
          <button class="button-def" @click="goToSlide(i)">
            <img :src="art.src.thumbnail" alt="">
            <div class="expo-map-item-title">
              {{ art.title }}
            </div>
            <div class="expo-map-item-author">
              {{ art.author }}
            </div>
            <div v-if="i === currentSlide" class="expo-map-item-selected">
              <i class="las la-map-marker" /> Estàs ací
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpoMap',
  props: {
    expo: {
      type: Object,
      default: null
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    },
    filteredExpo () {
      return this.expo.filter(this.removeEmpty)
    }
  },
  methods: {
    removeEmpty (obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'src')
    },
    goToSlide (i) {
      this.$store.commit('changeCurrentSlide', i + 1)
      this.$store.commit('toggleMap')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.expo-wrapper {
  height: 92vh;
  margin: 0;
  padding: 0 2rem;
}

.expo-map {
  display: grid;
  grid-template-columns: repeat( auto-fit, 250px);
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.expo-map-item {
  img {
    object-fit: cover;
    height: 250px;
    width: 250px;
  }

  a {
    text-decoration: none;
    color: $dark;
  }

  &-title {
    font-size: 1.2rem;
    margin: 1rem 0 0.25rem 0;
    text-align: left;
  }

  &-author {
    text-align: left;
  }

  &-selected {
    text-align: left;
    color: blue;

    .expo-map-item-title, .expo-map-item-author {
      color: blue;
    }
  }
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    height: 90vh;
    margin: 0;
    place-items: center end;
  }
}

@include media-breakpoint-down(sm) {
  .expo-map {
    grid-template-columns: 1fr;

    &-item {
      img {
        width: 100%;
      }
    }
  }
}
</style>
