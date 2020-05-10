<template>
  <div>
    <image-loader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      width="864px"
      height="476px"
    />
  </div>
</template>

<script>
import expo1 from '../assets/expo1.js'

export default {
  data () {
    return {
      expo1,
      showModal: false
    }
  },
  computed: {
    expoLength () {
      return this.expo1.length
    },
    currentSlide () {
      return this.$store.state.currentSlide
    },
    filteredExpo () {
      return expo1.filter(this.removeEmpty)
    }
  },
  methods: {
    removeEmpty (obj) {
      return Object.prototype.hasOwnProperty.call(obj, 'src')
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
  }
}

@include media-breakpoint-down(md) {
  .expo-wrapper {
    height: 90vh;
    margin: 0;
    place-items: center end;
  }
}
</style>
