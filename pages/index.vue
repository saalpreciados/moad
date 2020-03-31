<template>
  <div>
    <div class="container">
      <h1 class="title">
        Exposicions
      </h1>
    </div>
    <div class="expositions">
      <expo-link />
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

  data () {
    return {
      expositions
    }
  }
}
</script>

<style>

</style>
