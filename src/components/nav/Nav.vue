<template>
  <div class="wrapper">
    <router-link to="/" class="btn-home">
      <img src="../../assets/img/nav/logo.png" alt="Logo" class="logo">
      <span class="name">Merkury</span>
    </router-link>
    <nav class="nav">
      <ul>
        <li v-for="link in navLinks" :key="link.title">
          <router-link :to="link.url" exact class="link">
            <img
              :src="require(`../../assets/img/${link.iconPath}`)"
              alt="Icon"
              class="icon"
            >
            <span class="title">{{ link.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',
  computed: {
    ...mapGetters('navigation', [
      'navLinks'
    ])
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_media-queries.scss';

  .wrapper {
    width: var(--nav-width);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--nav-bg-color);
    z-index: var(--nav-z-index);

    @include media-md {
      width: 100vw;
      height: 60px;
      top: auto;
      bottom: 0;
    }

    .btn-home {
      width: 100%;
      height: var(--header-height);
      display: block;
      position: relative;
      padding-left: 105px;
      border-bottom: 2px solid #0d172e;
      color: var(--text-color-primary);
      font-size: 30px;
      line-height: var(--header-height);
      outline-offset: -2px;

      @include minimizeNav {
        padding-left: 0px;
      }

      @include media-md {
        display: none;
      }

      .logo {
        width: 52px;
        height: 52px;
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);

        @include minimizeNav {
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }

      .name {
        @include minimizeNav {
          display: none;
        }
      }
    }

    .nav {
      @include media-md {
        height: 100%;
      }

      ul {
        height: calc(100vh - var(--header-height));
        list-style-type: none;
        overflow-x: auto;
        overflow-y: hidden;

        @include scrollbar;

        @include media-md {
          height: 100%;
          display: flex;
        }

        li {
          position: relative;

          @include media-md {
            width: 100%;
            min-width: 60px;
          }

          .link {
            width: 100%;
            height: 100px;
            display: block;
            padding-left: 90px;
            border-bottom: 2px solid #0d172e;
            line-height: 100px;
            color: var(--text-color-primary);
            font-size: var(--nav-font-size);
            font-weight: 500;
            transition: background-color var(--hover-transition-time) ease-in-out;
            outline-offset: -1px;

            @include media-md {
              height: 100%;
              padding-left: 0;
              border: 1px solid #0d172e;
              border-top: none;
              border-bottom: none;
            }

            .icon {
              position: absolute;
              top: 50%;
              right: 245px;
              transform: translateY(-50%);

              @include minimizeNav {
                top: 50%;
                right: 0;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
              }
            }

            .title {
              @include minimizeNav {
                display: none;
              }
            }

            &:hover {
              background-color: var(--nav-bg-color-hover);
            }
          }

          .router-link-active {
            background-color: var(--nav-bg-color-hover);

            &::before {
              content: '';
              width: 10px;
              height: calc(100% - 2px);
              position: absolute;
              top: 0;
              left: -15px;
              background-color: var(--nav-bg-bolor-before);
              opacity: 0;
              animation: slide-left .3s ease-out forwards;

              @include media-md {
                width: calc(100% - 2px);
                height: 5px;
                top: auto;
                bottom: 0;
                left: 1px;
                animation: slide-bottom .3s ease-out forwards;
              }
            }
          }
        }
      }
    }
  }

  .nav-min {
    .wrapper {
      .btn-home {
        padding-left: 0px;

        .logo {
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .name {
          display: none;
        }
      }

      .nav {
        ul {
          li {
            .link {
              .icon {
                top: 50%;
                right: 0;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
              }

              .title {
                display: none;
              }
            }
          }
        }
      }
    }
  }

@keyframes slide-left {
  from {
    left: -15px;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes slide-bottom {
  from {
    bottom: -15px;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
