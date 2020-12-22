<template>
  <div class="wrapper">
    <ul class="widgets">
      <li class="widget widget-progress">
        <widget-progress
          :widget-data="widgetProgressData"
        ></widget-progress>
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

import WidgetProgress from '@/components/widgets/home/Progress.vue';
import WidgetTasks from '@/components/widgets/home/tasks/WidgetTasks.vue';
import WidgetMessages from '@/components/widgets/home/messages/WidgetMessages.vue';
import WidgetActivity from '@/components/widgets/home/activity/WidgetActivity.vue';

export default {
  name: 'Home',
  components: {
    WidgetProgress,
    WidgetTasks,
    WidgetMessages,
    WidgetActivity
  },
  computed: {
    ...mapGetters('widgetProgress', { widgetProgressData: 'data' }),
    ...mapGetters('widgetTasks', { widgetTasksData: 'data' }),
    ...mapGetters('widgetMessages', { widgetMessagesData: 'data' }),
    ...mapGetters('widgetActivity', { widgetActivityData: 'data' })
  },
  methods: {
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

      .widget-tasks-wrapper,
      .widget-messages-wrapper,
      .widget-activity-wrapper {
        max-width: calc(100% / 12 * 4 - (var(--widget-margin) * 2));
      }
    }
  }
</style>
