<template>
  <div>
    <client-only>
      <Lottie
        class-name="loading-icon"
        renderer="svg"
        :loop="true"
        :autoplay="true"
        :animation-data="loadingIcon"
      />
    </client-only>
  </div>
</template>

<script>
import Lottie from 'vue-lottie-web'
import loadingIcon from '../assets/icons/loading.json'

export default {
  components: {
    Lottie
  },

  data () {
    return {
      loadingIcon
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
