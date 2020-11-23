<template>
  <nav class="nav">
    nav
  </nav>
</template>

<script>

export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .nav {
    width: var(--nav-width);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
