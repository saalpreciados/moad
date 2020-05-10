<template>
  <b-navbar toggleable="md" type="light" fixed="top">
    <b-navbar-brand to="/" @mousedown.prevent>
      <logo version="symbol" subtitled />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <div v-if="showModal" class="nav-close-modal d-none d-md-flex">
      <div class="nav-close-modal-info">
        <div class="nav-close-modal-info-art">
          {{ currentArt.art }}
        </div>
        <div class="nav-close-modal-info-author">
          {{ currentArt.author }}
        </div>
      </div>
      <button class="button button-sm" @click="toggleModal()">
        <i class="las la-times" />
      </button>
    </div>

    <div v-if="showMap" class="nav-close-modal d-none d-md-flex">
      <div class="nav-close-modal-info">
        <div class="nav-close-modal-info-art">
          Tancar Mapa
        </div>
      </div>
      <button class="button button-sm" @click="toggleMap()">
        <i class="las la-times" />
      </button>
    </div>

    <b-collapse v-if="!showModal && !showMap" id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/expo" @mousedown.prevent>
          Exposició
        </b-nav-item>
        <b-nav-item to="/info" @mousedown.prevent>
          Recepció
        </b-nav-item>
        <b-nav-item to="/artists" @mousedown.prevent>
          Artistes
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
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    },
    toggleMap () {
      this.$store.commit('toggleMap')
    }
  }
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
    background: $light;
    border-bottom: 0 $dark solid;

    .navbar-nav {
      a.nav-link {
        font-size: 1.25rem;
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
        height: 26px;
        width: 12rem;
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
              transform: rotate(45deg) translateY(-9px);
            }

            &::before {
              transform: rotate(-45deg) translateY(8px);
            }
          }
        }
      }
    }
  }

</style>
