<template>
  <div>
    <div class="container">
      <h1 class="title">
        Exposicions
      </h1>
    </div>
    <div class="expositions">
      <expo-link v-for="(exposition, i) in expositions" :key="i" :exposition="exposition" :number="i + 1" />
    </div>
  </div>
</template>

<script>
import expositions from '../assets/expositions.js'
import ExpoLink from '../components/ExpoLink'

export default {
  components: {
    ExpoLink
  },

  transition: {
    name: 'index',
    mode: 'out-in'
  },

  data () {
    return {
      expositions
    }
  },

  layout: 'default-footer'
}
</script>

<style>
.index-enter-active, .index-leave-active {
  transition: .5s ease-out;
}

.index-enter {
  opacity: 0;
  transform: scale(1.1);
}

.index-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
