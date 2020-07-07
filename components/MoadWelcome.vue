<template>
  <div class="container welcome">
    <div class="welcome-text">
      Benvinguts al Museu Online d'Art Digital
    </div>
    <div class="links">
      <a class="link-arrow" href="#expositions">
        Exposicions
      </a>
      <nuxt-link class="link-arrow" to="manifest">
        Sobre nosaltres
      </nuxt-link>
      <nuxt-link class="link-arrow" to="participa">
        Participa al museu
      </nuxt-link>
      </a>
    </div>
    <!-- <client-only>
      <Lottie
        class-name="scroll-icon"
        renderer="svg"
        :loop="true"
        :autoplay="true"
        :animation-data="scrollIcon"
        stroke="blue"
      />
    </client-only> -->
  </div>
</template>

<script>
// import Lottie from 'vue-lottie-web'
import scrollIcon from '../assets/icons/scroll-down.json'

export default {
  name: 'MoadWelcome',

  components: {
    // Lottie
  },

  data () {
    return {
      scrollIcon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.welcome {
  margin-bottom: 3rem 0;

  &-text {
    font-size: 6rem;
    color: blue;
    line-height: 1.1;
    padding: 2rem 0;
  }

  .links {
    font-size: 2rem;

    a {
      display: inline-block;
      margin-right: 1.5rem;
    }
  }
}

@include media-breakpoint-down (md) {
  .welcome {
    &-text {
      font-size: 3.25rem;
    }
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
