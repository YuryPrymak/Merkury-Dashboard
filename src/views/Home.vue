<template>
  <div class="wrapper">
    <widget-sales class="widget-sales" :widget-data="widgetSalesData"></widget-sales>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WidgetSales from '@/components/widgets/home/WidgetType1.vue';

export default {
  name: 'Home',
  components: {
    WidgetSales
  },
  computed: {
    ...mapGetters([
      'widgetSalesData'
    ])
  }
};
</script>

<style scoped lang="scss">
  .wrapper {
    padding: 45px;

    .widget-sales {
      max-width: 100%;
    }
  }
</style>
