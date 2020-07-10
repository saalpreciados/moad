<template>
  <div class="expo">
    <nuxt-link class="expo-link container" :to="'/expositions/'+exposition.id">
      <img :srcset="exposition.img.srcSet" alt="Untitled 1">
      <div class="expo-link-hall">
        Sala {{ number }}
      </div>
      <h2 class="expo-link-title">
        {{ exposition.title }}
      </h2>
      <p class="expo-link-description">
        {{ exposition.description }}
      </p>
      <span :class="['expo-number', number % 2 === 0 ? 'expo-number-right' : 'expo-number-left']">0{{ number }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ExpoLink',
  props: {
    exposition: {
      type: Object,
      default: null
    },
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';
.expo-link {
  display: block;
  margin-bottom: 3rem;
  color: $body-color;
  position: relative;

  &:hover, &:focus {
    text-decoration: none;

    .expo-link-title {
      &::after {
        text-decoration: none;
        padding-left: 1rem;
      }
    }
  }

  &:focus {
    img {
      border: 4px solid $primary;
      border-radius: 3px;
    }

    .expo-link-title {
      color: $primary;
    }
  }

  img {
    object-fit: cover;
    max-height: 450px;
    width: 100%;
  }

  &-title {
    display: block;

    &::after {
      content: '→';
      padding-left: .5rem;
      transition: .25s ease-in-out;
    }
  }

  &-hall {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: $gray;
  }
}

.expo {
  max-width: 100vw;
  position: relative;
  overflow: hidden;

  &-number {
    pointer-events: none;
    display: block;
    opacity: .95;
    position: absolute;
    font-family: soulcraft;
    mix-blend-mode: multiply;
    z-index: 10;
    color: $primary;
    font-size: 20rem;
    font-weight: bold;
    transform: rotate(-90deg);

    &-left {
      left: -5rem;
      bottom: 4rem;
    }

    &-right {
      right: -8rem;
      bottom: 0;
    }
  }
}

@include media-breakpoint-down(lg) {
  .expo {
    &-number {
      font-size: 17rem;

      &-left {
        left: -5rem;
        bottom: 1rem;
      }

      &-right {
        right: -6rem;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .expo {
    &-number {
      font-size: 14rem;

    &-left, &-right {
      left: initial;
      bottom: -1rem;
      right: -5rem;
    }
  }

  &-link {
      img {
        height: 375px;
      }
    }
  }
}
</style>
