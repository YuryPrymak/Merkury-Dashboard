<template>
  <div class="wrapper">
    <widget-sales
      :widget-data="widgetSalesData"
      @change-period="widgetSalesChangeDisplayedPeriod"
      class="widget widget-sales"
    ></widget-sales>
    <user-activity
      :widget-data="widgetUserActivityData"
      @change-period="widgetUserActivityChangeDisplayedPeriod"
      class="widget widget-user-activity">
    </user-activity>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import WidgetSales from '@/components/widgets/home/WidgetType1.vue';
import UserActivity from '@/components/widgets/home/WidgetType2.vue';

export default {
  name: 'Home',
  components: {
    WidgetSales,
    UserActivity
  },
  computed: {
    ...mapGetters([
      'widgetSalesData',
      'widgetUserActivityData'
    ])
  },
  methods: {
    ...mapActions([
      'widgetSalesChangeDisplayedPeriod',
      'widgetUserActivityChangeDisplayedPeriod'
    ]),
  }
};
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 45px;

    .widget {
      width: 100%;
      background-color: var(--widget-bg-color);
      border: 1px solid #d4d9e3;
    }

    .widget-sales {
      max-width: calc(40% - 40px);
      margin-right: 40px;
    }

    .widget-user-activity {
      max-width: 60%;
    }
  }
</style>
