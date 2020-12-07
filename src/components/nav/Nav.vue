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

  .wrapper {
    width: var(--nav-width);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--nav-bg-color);

    .btn-home {
      width: 100%;
      height: var(--header-height);
      display: block;
      position: relative;
      padding-left: 105px;
      color: var(--text-color-primary);
      font-size: 30px;
      line-height: var(--header-height);

      .logo {
        width: 52px;
        height: 52px;
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
      }
    }

    .nav {
      ul {
        height: calc(100vh - var(--header-height));
        overflow-y: auto;

        @include scrollbar;

        li {
          position: relative;

          .link {
            width: 100%;
            height: 100px;
            display: block;
            padding-left: 90px;
            border: 2px solid #0d172e;
            border-left: none;
            border-right: 0;
            line-height: 100px;
            color: var(--text-color-primary);
            font-size: var(--nav-font-size);
            font-weight: 500;
            transition: background-color var(--hover-transition-time) ease-in-out;

            .icon {
              position: absolute;
              top: 50%;
              right: 245px;
              transform: translateY(-50%);
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
              height: calc(100% - 4px);
              position: absolute;
              top: 2px;
              left: -15px;
              background-color: #5584ff;
              opacity: 0;
              animation: slide .3s ease-out forwards;
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

@keyframes slide {
  from {
    left: -15px;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
}
</style>
