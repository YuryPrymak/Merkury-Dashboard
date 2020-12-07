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
      class="widget widget-tasks">
    </widget-tasks>
    <widget-messages
      :widget-data="widgetMessagesData"
      class="widget widget-messages">
    </widget-messages>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import WidgetSales from '@/components/widgets/home/WidgetType1.vue';
import WidgetUserActivity from '@/components/widgets/home/WidgetType2.vue';
import WidgetTasks from '@/components/widgets/home/tasks/WidgetTasks.vue';
import WidgetMessages from '@/components/widgets/home/messages/WidgetMessages.vue';

export default {
  name: 'Home',
  components: {
    WidgetSales,
    WidgetUserActivity,
    WidgetTasks,
    WidgetMessages
  },
  computed: {
    ...mapGetters([
      'widgetSalesData',
      'widgetUserActivityData',
      'widgetTasksData',
      'widgetMessagesData'
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

      display: none;
    }

    .widget-messages {
      max-width: 500px;
    }
  }
</style>
