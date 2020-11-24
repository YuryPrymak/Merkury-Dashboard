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

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--main-bg-color);
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .main {
    width: calc(100vw - var(--nav-width));
    margin: var(--header-height) 0 0 var(--nav-width);
  }
</style>
