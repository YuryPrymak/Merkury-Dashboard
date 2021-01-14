<template>
  <div
    id="app"
    @click="focus = false"
    @keyup="focus = true"
    :class="{'nav-min': minimizedNavigation, 'focus-visible': focus}"
  >
    <app-nav></app-nav>
    <app-header></app-header>
    <router-view class="main-wrapper"></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/header/Header.vue';
import AppNav from '@/components/nav/Nav.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    AppHeader,
    AppNav
  },
  data() {
    return {
      focus: true
    };
  },
  computed: {
    ...mapGetters('navigation', { minimizedNavigation: 'minimizedNavigation' }),
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_media-queries.scss';

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  :root {
    @include scrollbar;
  }

  body {
    min-width: 370px;
    background-color: var(--main-bg-color);
    font-family: 'Roboto', sans-serif;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .focus-visible {
    *:focus {
      outline: 1px solid #5583FE;
    }
  }

  .main-wrapper {
    max-width: calc(100vw - var(--nav-width));
    margin: var(--header-height) 0 0 var(--nav-width);

    @include media-md {
      max-width: 100vw;
      margin: var(--header-height) 0 0 0px;
    }
  }
</style>
