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
    <tasks
      :widget-data="widgetTasksData"
      class="widget widget-tasks">
    </tasks>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import WidgetSales from '@/components/widgets/home/WidgetType1.vue';
import UserActivity from '@/components/widgets/home/WidgetType2.vue';
import Tasks from '@/components/widgets/home/tasks/WidgetTasks.vue';

export default {
  name: 'Home',
  components: {
    WidgetSales,
    UserActivity,
    Tasks
  },
  computed: {
    ...mapGetters([
      'widgetSalesData',
      'widgetUserActivityData',
      'widgetTasksData'
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

      display: none;
    }

    .widget-user-activity {
      max-width: 60%;

      display: none;
    }

    .widget-tasks {
      max-width: 500px;
    }
  }
</style>
