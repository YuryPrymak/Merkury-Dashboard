<template>
  <div class="wrapper">
    <widget-sales
      :widget-data="widgetSalesData"
      @change-period="widgetSalesChangeDisplayedPeriod"
      class="widget widget-sales"
    ></widget-sales>
    <widget-user-activity
      :widget-data="widgetUserActivityData"
      @change-period="widgetUserActivityChangeDisplayedPeriod"
      class="widget widget-user-activity">
    </widget-user-activity>
    <widget-tasks
      :widget-data="widgetTasksData"
      @remove-task="widgetTasksRemoveTask"
      class="widget widget-tasks">
    </widget-tasks>
    <widget-messages
      :widget-data="widgetMessagesData"
      class="widget widget-messages">
    </widget-messages>
    <widget-activity
      :widget-data="widgetActivityData"
      class="widget widget-activity">
    </widget-activity>
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
      max-width: 300px;
    }

    .widget-tasks {
      max-width: 300px;
    }

    .widget-messages {
      max-width: 300px;
    }

    .widget-activity {
      max-width: 3d00px;
    }
  }
</style>
