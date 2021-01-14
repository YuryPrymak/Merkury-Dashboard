<template>
  <div class="widget-tasks">
    <widget-header-notifications :header-data="headerData"></widget-header-notifications>
    <p v-show="isHaveTasks" class="label">No Tasks</p>
    <transition-group tag="ul" name="tasks-list" class="tasks">
      <task-card
        v-for="data in widgetData.data"
        :key="data.title"
        :task-data="data"
        @remove-task="removeTask"
        class="task"
      ></task-card>
    </transition-group>
  </div>
</template>

<script>
import WidgetHeaderNotifications from '@/components/widgets/headers/Notifications.vue';
import TaskCard from '@/components/widgets/home/tasks/TaskCard.vue';

export default {
  name: 'Tasks',
  props: ['widgetData'],
  components: {
    WidgetHeaderNotifications,
    TaskCard
  },
  computed: {
    headerData() {
      return {
        title: this.widgetData.title,
        counterInfo: this.widgetData.data.filter(info => info.timeIsUp === false).length,
        counterWarning: this.widgetData.data.filter(info => info.timeIsUp === true).length
      };
    },
    isHaveTasks() {
      return !this.widgetData.data.length;
    }
  },
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

  .widget-tasks {
    position: relative;

    .label {
      position: absolute;
      top: 50%;
      left: 50%;
      color: var(--widget-elems-color);
      text-align: center;
      font-size: 54px;
      font-weight: 700;
      opacity: .2;
      transform: translateX(-50%) translateY(-50%);
    }

    .tasks {
      height: 440px;
      position: relative;
      overflow: auto;

      @include scrollbar;

      .task {
        transition: all .3s;
      }
    }
  }

  .tasks-list-enter-active,
  .tasks-list-leave-active {
    position: absolute;
    transition: all .3s;
  }

  .tasks-list-enter,
  .tasks-list-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
