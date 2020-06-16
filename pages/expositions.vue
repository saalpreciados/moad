<template>
  <div class="expos">
    <nuxt-child :expositions="expositions" />
  </div>
</template>

<script>
import expositions from '@/assets/expositions.js'
export default {
  data () {
    return {
      expositions
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
