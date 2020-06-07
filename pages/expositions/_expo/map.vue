<template>
  <div class="map-wrapper">
    <h4>Mapa</h4>
    <h2 class="mb-4">
      Nom de l'exposició
    </h2>
    <ul class="expo-map">
      <li v-for="(art, i) in expo" :key="i" :class="{'expo-map-item': true, 'expo-map-item-selected': i === currentSlide}">
        <button v-if="art.hasOwnProperty('src')" class="button-def" @click="goToSlide(i)" @mousedown.prevent>
          <img :src="art.src.thumbnail" alt="">
          <div class="expo-map-item-title">
            {{ art.title }}
          </div>
          <div class="expo-map-item-author">
            {{ art.author }}
          </div>
          <div v-if="i === currentSlide.number" class="expo-map-item-selected">
            <i class="las la-map-marker" /> Estàs ací
          </div>
        </button>
        <button v-else class="button-def expo-map-item-custom" @click="goToSlide(i)" @mousedown.prevent>
          {{ i }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    expo: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentSlide () {
      return this.$store.state.currentSlide
    }
  },
  methods: {
    goToSlide (i) {
      this.$router.push(`${this.expo[i].id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/variables';

.map-wrapper {
  width: 100%;
  padding: 0 8rem;
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

  &-custom {
    height: 250px;
    width: 250px;
    border: 2px solid $dark;
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
  .map-wrapper {
    padding: 0 1rem;
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
