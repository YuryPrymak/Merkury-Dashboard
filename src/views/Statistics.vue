<template>
  <div class="wrapper">
    <ul class="widgets">
      <li class="widget widget-sales-wrapper">
        <widget-sales
          :widget-data="widgetSalesData"
          @change-period="widgetSalesChangeDisplayedPeriod"
        ></widget-sales>
      </li>
      <li class="widget widget-user-activity-wrapper">
        <widget-user-activity
          :widget-data="widgetUserActivityData"
          @change-period="widgetUserActivityChangeDisplayedPeriod"
        ></widget-user-activity>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import WidgetSales from '@/components/widgets/common/DoughnutChartByPeriods.vue';
import WidgetUserActivity from '@/components/widgets/common/LineChartByPeriods.vue';

export default {
  name: 'Statistics',
  components: {
    WidgetSales,
    WidgetUserActivity
  },
  computed: {
    ...mapGetters('widgetSales', { widgetSalesData: 'data' }),
    ...mapGetters('widgetUserActivity', { widgetUserActivityData: 'data' })
  },
  methods: {
    ...mapActions('widgetSales', { widgetSalesChangeDisplayedPeriod: 'changeDisplayedPeriod' }),
    ...mapActions('widgetUserActivity', { widgetUserActivityChangeDisplayedPeriod: 'changeDisplayedPeriod' })
  }
};
</script>

<style scoped lang="scss">
  .wrapper {
    padding: 40px;

    .widgets {
      --widget-margin: 20px;

      width: calc(100% + (var(--widget-margin) * 2));
      display: flex;
      flex-wrap: wrap;
      margin: calc(var(--widget-margin) * -1);

      .widget {
        width: 100%;
        margin: var(--widget-margin);
        list-style-type: none;
        background-color: var(--widget-bg-color);
        border: 1px solid #d4d9e3;
      }

      .widget-sales-wrapper {
        max-width: calc(100% / 12 * 5 - (var(--widget-margin) * 2));
      }

      .widget-user-activity-wrapper {
        max-width: calc(100% / 12 * 7 - (var(--widget-margin) * 2));
      }
    }
  }
</style>
