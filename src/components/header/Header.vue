<template>
  <header class="header">
    header
  </header>
</template>

<script>

export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .header {
    width: calc(100% - var(--nav-width));
    height: var(--header-height);
    position: fixed;
    top: 0;
    right: 0;
  }
</style>
