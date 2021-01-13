<template>
  <div class="widget-progress">
    <p class="title">Progress This Month</p>
    <ul class="progress-bars">
      <li v-for="data in widgetData" :key="data.title" class="progress-bar">
        <radial :data="data"></radial>
      </li>
    </ul>
  </div>
</template>

<script>
import Radial from '@/components/progress-bars/Radial.vue';

export default {
  name: 'Progress',
  props: ['widgetData'],
  components: {
    Radial
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .widget-progress {
    padding: 10px 0;

    .title {
      margin: 10px;
      color: var(--widget-elems-color);
      font-size: 36px;
      font-weight: 700;
      text-align: center;
    }

    .progress-bars {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      list-style-type: none;
    }
  }
</style>
