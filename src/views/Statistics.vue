<template>
  <div class="wrapper">
    <ul class="widgets">
      <li class="widget widget-user-activity-wrapper">
        <widget-user-activity
          :widget-data="widgetUserActivityData"
          @change-period="widgetUserActivityChangeDisplayedPeriod"
        ></widget-user-activity>
      </li>
      <li class="widget widget-sales-wrapper">
        <widget-sales
          :widget-data="widgetSalesData"
          @change-period="widgetSalesChangeDisplayedPeriod"
          class="widget-sales"
        ></widget-sales>
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
@import '@/assets/scss/_media-queries.scss';

  .wrapper {
    padding: 40px;

     @include media-xl {
      padding: 40px 30px;
    }

    @include media-lg {
      padding: 20px;
    }

    @include media-md {
      padding: 20px 10px 80px 10px;
    }

    .widgets {
      --widget-margin: 20px;

      @include media-md {
        --widget-margin: 10px;
      }

      width: calc(100% + (var(--widget-margin) * 2));
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: calc(var(--widget-margin) * -1);

      .widget {
        width: 100%;
        margin: var(--widget-margin);
        list-style-type: none;
        background-color: var(--widget-bg-color);
        border: 1px solid #d4d9e3;
      }

      .widget-user-activity-wrapper {
        max-width: calc(100% - (var(--widget-margin) * 2));
      }

      .widget-sales-wrapper {
        max-width: calc(100% / 12 * 6 - (var(--widget-margin) * 2));

        @include media-xl {
          max-width: calc(100% - (var(--widget-margin) * 2));
        }
      }
    }
  }
</style>
