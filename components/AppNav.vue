<template>
  <b-navbar toggleable="md" type="light" fixed="top">
    <b-navbar-brand to="/">
      Moad
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/expo">
          Exposició
        </b-nav-item>
        <b-nav-item to="/info">
          Recepció
        </b-nav-item>
        <b-nav-item to="/artists">
          Artistes
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss">
  @import '../sass/variables';

  .navbar-light {
    background: $light;
    border-bottom: 1.5px $dark solid;

    .navbar-nav {
      a.nav-link {
        font-size: 1.25rem;
        color: $dark;

        &::after {
          display: none;
        }
      }
    }

    .navbar-brand {
      svg {
        height: 36px;
        width: 87px;
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
