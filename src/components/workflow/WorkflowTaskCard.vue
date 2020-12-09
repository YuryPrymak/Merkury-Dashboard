<template>
  <li class="task-card">
    <div class="icon handle">{{ iconText }}</div>
    <div class="info">
      <p class="text">{{ taskData.text }}</p>
      <p class="time" :class="taskCompleted">
        <span class="icon-time">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
            <path d="M27.5 55c-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5v0c15.188 0 27.5 12.312 27.5 27.5s-12.312 27.5-27.5 27.5v0zM27.5 49.5c12.15 0 22-9.85 22-22s-9.85-22-22-22v0c-12.15 0-22 9.85-22 22s9.85 22 22 22v0zM24.75 28.627v-17.627h5.5v15.373l10.863 10.863-3.878 3.878-12.485-12.485z"></path>
          </svg>
        </span>
        {{ taskStatus }}
      </p>
    </div>
    <button
      @click="cardOptionsToggle"
      ref="btnOptions"
      class="btn-options"
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
        <path d="M27.503 21.45c-3.341 0-6.053 2.709-6.053 6.050s2.711 6.050 6.053 6.050c3.341 0 6.047-2.709 6.047-6.050s-2.706-6.050-6.047-6.050zM27.503 14.3c3.341 0 6.047-2.711 6.047-6.050s-2.706-6.050-6.047-6.050c-3.341 0-6.053 2.709-6.053 6.050s2.711 6.050 6.053 6.050zM27.503 40.7c-3.341 0-6.053 2.709-6.053 6.050s2.711 6.050 6.053 6.050c3.341 0 6.047-2.709 6.047-6.050s-2.706-6.050-6.047-6.050z"></path>
      </svg>
    </button>
    <ul
        v-show="showCardOptions"
        v-closable="{
          handler: 'closeCardOptions',
          exclude: ['btnOptions']
        }"
        class="card-options"
      >
        <li>
          <button
            @click="removeTask({id: taskData.id, category: tasksCategory})"
            class="btn-remove-card"
          >
            Remove Task
          </button>
        </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'WorkflowTaskCard',
  props: ['taskData', 'tasksCategory'],
  data() {
    return {
      showCardOptions: false
    };
  },
  computed: {
    iconText() {
      return this.taskData.text.charAt(0);
    },
    taskStatus() {
      return this.tasksCategory === 'completed' ? 'Completed' : this.taskData.time;
    },
    taskCompleted() {
      return {
        'task-completed': this.tasksCategory === 'completed'
      };
    }
  },
  methods: {
    removeTask(taskId) {
      this.$emit('remove-task', taskId);
    },
    cardOptionsToggle() {
      this.showCardOptions = !this.showCardOptions;
    },
    closeCardOptions() {
      this.showCardOptions = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .task-card {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 10px 10px 35px;
    border: 1px solid #d4d9e3;

    .icon {
      width: 50px;
      height: 50px;
      margin-right: 25px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: #5384ff;
      color: var(--widget-elems-color-4);
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      font-weight: 500;
      cursor: move;
    }

    .info {
      width: 100%;
      margin-right: 25px;

      .text {
        margin-bottom: 8px;
        color: var(--widget-elems-color-3);
        font-size: 20px;
        font-weight: 500;
      }

      .time {
        position: relative;
        padding-left: 25px;
        font-size: 14px;
        color: var(--widget-elems-color);

        .icon-time {
          display: block;
          width: 18px;
          height: 18px;
          position: absolute;
          top: -1px;
          left: 0;

          svg {
            width: 100%;
            height: 100%;
            fill: var(--widget-elems-color);
          }
        }
      }

      .task-completed {
        color: #00bf1b;

        .icon-time {
          svg {
            fill: #00bf1b;
          }
        }
      }
    }

    .btn-options {
      width: 50px;
      height: 50px;
      margin-left: auto;
      flex-shrink: 0;
      border-radius: 50%;
      background: transparent;

      &:hover {
        svg {
          fill: var(--controls-bg-color-hover);
        }
      }

      svg {
        width: 80%;
        height: 80%;
        margin-top: 3px;
        fill: var(--widget-elems-color);
        transition: fill var(--hover-transition-time) ease-in-out;
      }
    }

    .card-options {
      width: 170px;
      position: absolute;
      right: 10px;
      top: 100px;
      list-style-type: none;
      background-color: var(--widget-bg-color);
      box-shadow: 0 0 3px 1px #dadee7;
      transform: translateY(-50%);

      .btn-remove-card {
        width: 100%;
        height: 30px;
        background-color: transparent;
        color: var(--widget-elems-color);
        font-size: 20px;
        font-weight: 700;
        transition: background-color var(--hover-transition-time) ease-in-out,
        color var(--hover-transition-time) ease-in-out;
        text-transform: capitalize;

        &:hover {
          background-color: var(--widget-elems-color-hover);
          color: var(--controls-bg-color-hover);
        }
      }
    }
  }
</style>
