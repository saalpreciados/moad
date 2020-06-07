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
  },

  computed: {
    routeParams () {
      return this.$store.state.route.params
    }
  },

  watch: {
    routeParams: {
      handler (from, to) {
        if (this.currentExpo) {
          this.$store.commit('changeRedirectId', 'untitled')
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
