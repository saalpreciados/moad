<template>
  <div class="expo">
    <a class="expo-link container" :href="exposition.url">
      <img :src="exposition.img" alt="Untitled 1">
      <div class="expo-link-hall">Sala {{ number }}</div>
      <h2 class="expo-link-title">{{ exposition.title }}</h2>
      <p class="expo-link-description">{{ exposition.description }}</p>
    </a>
    <span :class="['expo-number', number % 2 === 0 ? 'expo-number-right' : 'expo-number-left']">0{{ number }}</span>
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

  &:hover {
    text-decoration: none;

    .expo-link-title {
      &::after {
        text-decoration: none;
        padding-left: 1rem;
      }
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
    bottom: 5rem;
    z-index: 10;
    color: $primary;
    font-size: 22rem;
    font-weight: bold;
    transform: rotate(-90deg);
    &-left {
      left: 12rem;
    }

    &-right {
      right: 12rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .expo {
    &-number {
      bottom: 18rem;
      font-size: 15rem;
    &-left, &-right {
      left: 0;
      right: -22rem;
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
