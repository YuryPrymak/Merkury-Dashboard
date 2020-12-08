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
      <li class="widget widget-tasks-wrapper">
        <widget-tasks
          :widget-data="widgetTasksData"
          @remove-task="widgetTasksRemoveTask"
        ></widget-tasks>
      </li>
      <li class="widget widget-messages-wrapper">
        <widget-messages
          :widget-data="widgetMessagesData"
        ></widget-messages>
      </li>
      <li class="widget widget-activity-wrapper">
        <widget-activity
          :widget-data="widgetActivityData"
        ></widget-activity>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import WidgetSales from '@/components/widgets/home/WidgetType1.vue';
import WidgetUserActivity from '@/components/widgets/home/WidgetType2.vue';
import WidgetTasks from '@/components/widgets/home/tasks/WidgetTasks.vue';
import WidgetMessages from '@/components/widgets/home/messages/WidgetMessages.vue';
import WidgetActivity from '@/components/widgets/home/activity/WidgetActivity.vue';

export default {
  name: 'Home',
  components: {
    WidgetSales,
    WidgetUserActivity,
    WidgetTasks,
    WidgetMessages,
    WidgetActivity
  },
  computed: {
    ...mapGetters('widgetSales', { widgetSalesData: 'data' }),
    ...mapGetters('widgetUserActivity', { widgetUserActivityData: 'data' }),
    ...mapGetters('widgetTasks', { widgetTasksData: 'data' }),
    ...mapGetters('widgetMessages', { widgetMessagesData: 'data' }),
    ...mapGetters('widgetActivity', { widgetActivityData: 'data' })
  },
  methods: {
    ...mapActions('widgetSales', { widgetSalesChangeDisplayedPeriod: 'changeDisplayedPeriod' }),
    ...mapActions('widgetUserActivity', { widgetUserActivityChangeDisplayedPeriod: 'changeDisplayedPeriod' }),
    ...mapActions('widgetTasks', { widgetTasksRemoveTask: 'removeTask' })
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

      .widget-tasks-wrapper,
      .widget-messages-wrapper,
      .widget-activity-wrapper {
        max-width: calc(100% / 12 * 4 - (var(--widget-margin) * 2));
      }
    }
  }
</style>
