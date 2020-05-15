<template>
  <div class="welcome">
    <div class="welcome-text">
      Benvinguts al Museu Online d'Art Digital
    </div>
    <client-only>
      <Lottie
        class-name="scroll-icon"
        renderer="svg"
        :loop="true"
        :autoplay="true"
        :animation-data="scrollIcon"
        stroke="blue"
      />
    </client-only>
  </div>
</template>

<script>
import Lottie from 'vue-lottie-web'
import scrollIcon from '../assets/icons/scroll-down.json'

export default {
  name: 'MoadWelcome',

  components: {
    Lottie
  },

  data () {
    return {
      scrollIcon
    }
  }
}
</script>

<style lang="scss" scoped>
  .welcome {
  display: grid;
  grid-template-rows: 0.85fr 0.15fr;
  place-items: center center;
  height: calc(100vh - 4rem);

  &-text {
    font-size: 6rem;
    color: blue;
    max-width: 1000px;
    line-height: 1.2;
  }
}
</style>

<style lang="scss" >
.welcome {
  .scroll-icon {
    path {
      stroke: blue;
    }
  }
}
</style>
