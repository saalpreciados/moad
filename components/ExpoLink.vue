<template>
  <div class="expo">
    <a class="expo-link container" href="#">
      <img src="../assets/art/motocross-saito/untitled-1.png" alt="Untitled 1">
      <div class="expo-link-hall">Sala 1</div>
      <h2 class="expo-link-title">Nom de l'exposició</h2>
      <p class="expo-link-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </a>
    <span class="expo-number">01</span>
  </div>
</template>

<script>
export default {
  name: 'ExpoLink'
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
    display: block;
    opacity: .95;
    position: absolute;
    font-family: soulcraft;
    mix-blend-mode: multiply;
    bottom: 5rem;
    left: 12rem;
    z-index: 10;
    color: $primary;
    font-size: 22rem;
    font-weight: bold;
    transform: rotate(-90deg);
  }
}

@include media-breakpoint-down(md) {
  .expo {
    &-number {
      bottom: 15rem;
      right: -15rem;
      font-size: 15rem;
    }
  }
}

</style>
