<template>
  <div class="widget-tasks">
    <widget-header-type-2 :header-data="headerData"></widget-header-type-2>
    <p v-show="isHaveTasks" class="label">No Tasks</p>
    <draggable tag="ul" :options="{handle: '.handle', animation: 100}" class="tasks">
      <transition-group name="tasks-list">
        <task-card
          v-for="data in widgetData.data"
          :key="data.title"
          :task-data="data"
          @remove-task="removeTask"
          class="task"
        ></task-card>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import WidgetHeaderType2 from '@/components/widgets/headers/HeaderType2.vue';
import TaskCard from '@/components/widgets/home/tasks/TaskCard.vue';
import draggable from 'vuedraggable';

export default {
  name: 'Tasks',
  props: ['widgetData'],
  components: {
    WidgetHeaderType2,
    TaskCard,
    draggable
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

    .sortable-chosen {
      background: #f0f0f0;
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
