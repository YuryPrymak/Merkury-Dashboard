<template>
  <div id="app">
    <app-nav></app-nav>
    <app-header></app-header>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/header/Header.vue';
import AppNav from '@/components/nav/Nav.vue';

export default {
  components: {
    AppHeader,
    AppNav
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f6f7fa;
  }

  .main {
    width: calc(100vw - var(--nav-width));
    margin: var(--header-height) 0 0 var(--nav-width);
  }
</style>
