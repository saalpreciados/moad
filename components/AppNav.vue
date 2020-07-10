<template>
  <b-navbar toggleable="md" type="light" fixed="top">
    <b-navbar-brand to="/" @mousedown.prevent>
      <logo version="symbol" subtitled />
    </b-navbar-brand>

    <b-navbar-toggle v-if="!showModal && !showMap" target="nav-collapse" />

    <div v-if="showModal" class="nav-close-modal d-flex">
      <div class="nav-close-modal-info d-sm-block d-none">
        <div class="nav-close-modal-info-art">
          {{ currentArt.art }}
        </div>
        <div class="nav-close-modal-info-author">
          {{ currentArt.author }}
        </div>
      </div>
      <nuxt-link class="button button-sm" :to="{ path: $store.state.route.from.fullPath }">
        <i class="las la-times" />
      </nuxt-link>
    </div>

    <div v-if="showMap" class="nav-close-modal d-flex">
      <div class="nav-close-modal-info">
        <div class="nav-close-modal-info-art">
          Tancar Mapa
        </div>
      </div>
      <nuxt-link class="button button-sm" :to="{ path: $store.state.route.from.fullPath }">
        <i class="las la-times" />
      </nuxt-link>
    </div>

    <b-collapse v-if="!showModal && !showMap" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/expositions" @mousedown.prevent>
          Exposició
        </b-nav-item>
        <b-nav-item to="/manifest" @mousedown.prevent>
          Nosaltres
        </b-nav-item>
        <b-nav-item to="/participa" @mousedown.prevent>
          Participa
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'AppNav',
  components: {
    Logo
  },
  computed: {
    showModal () {
      return this.$store.state.showModal
    },
    showMap () {
      return this.$store.state.showMap
    },
    currentArt () {
      return this.$store.state.currentArt
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
    background: $light;

    .navbar-nav {
      a.nav-link {
        font-size: 1rem;
        color: $dark;

        &::after {
          display: none;
        }

        &::after {
          display: none;
        }

        &:hover, &:active {
          color: $primary !important;
        }
      }
    }

    .navbar-brand {

      svg {
        height: 24px;
        width: 7rem;
      }

      &::after {
        display: none;
      }

      &:hover {
        .lt {
          fill: $dark;
        }
      }
    }
  }

  .nav-close-modal {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    &-info {
      text-align: right;
      margin-right: 1rem;
      line-height: 1.4;

      &-author {
        font-size: 0.8rem;
      }
    }
  }

  @include media-breakpoint-down(md) {
    .navbar {
      &-toggler {
        border: 0;

        &-icon {
          background-image: none !important;
          position: relative;

          &::before,
          &::after {
            content: '';
            position: absolute;
            background: $dark;
            height: 2px;
            left: 3px;
            right: 3px;
            top: 25%;
            transition: .4s ease-in-out;
          }

          &::after {
            content: '';
            top: auto;
            bottom: 25%;
          }
        }

        &[aria-expanded="true"] {
          .navbar-toggler-icon {
            &::after {
              transform: rotate(45deg) translateY(-10px);
            }

            &::before {
              transform: rotate(-45deg) translateY(9px);
            }
          }
        }
      }
    }
  }

</style>
