<template>
  <div class="workflow-wrapper">
    <ul class="workflow">
      <li class="task-category" :class="{'empty': tasksToDo.length === 0}">
        <div class="category-info">
          <p class="category-title">
            {{ taskCategoriesTitle.toDo }}
            <span class="number-of-tasks">({{ tasksToDo.length }})</span>
          </p>
          <button @click="addNewTask" class="btn-add-new-task">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M11.458 4.583c-1.898 0-3.621 0.772-4.861 2.014s-2.014 2.963-2.014 4.861v32.083c0 1.898 0.772 3.621 2.014 4.861s2.963 2.014 4.861 2.014h32.083c1.898 0 3.621-0.772 4.861-2.014s2.014-2.963 2.014-4.861v-32.083c0-1.898-0.772-3.621-2.014-4.861s-2.963-2.014-4.861-2.014zM11.458 9.167h32.083c0.633 0 1.203 0.254 1.62 0.671s0.671 0.988 0.671 1.62v32.083c0 0.633-0.254 1.203-0.671 1.62s-0.988 0.671-1.62 0.671h-32.083c-0.633 0-1.203-0.254-1.62-0.671s-0.671-0.988-0.671-1.62v-32.083c0-0.633 0.254-1.203 0.671-1.62s0.988-0.671 1.62-0.671zM18.333 29.792h6.875v6.875c0 1.265 1.027 2.292 2.292 2.292s2.292-1.027 2.292-2.292v-6.875h6.875c1.265 0 2.292-1.027 2.292-2.292s-1.027-2.292-2.292-2.292h-6.875v-6.875c0-1.265-1.027-2.292-2.292-2.292s-2.292 1.027-2.292 2.292v6.875h-6.875c-1.265 0-2.292 1.027-2.292 2.292s1.027 2.292 2.292 2.292z"></path>
            </svg>
          </button>
          <div class="arrow-icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M13.428 9.453l4.941-4.834 22.881 22.881-22.881 22.881-4.941-4.834 18.154-18.047z"></path>
            </svg>
          </div>
        </div>
        <p v-show="tasksToDo.length === 0" class="list-is-empty">List Is Empty</p>
        <draggable
          tag="ul"
          v-bind="{handle: '.handle', animation: 100, }"
          :emptyInsertThreshold="100"
          group="tasks"
          v-model="tasksToDo"
          class="task-list"
        >
          <transition-group name="task-list">
            <workflow-task-card
              v-for="tasks in tasksToDo"
              :key="tasks.id"
              :task-data="tasks"
              :tasks-category="'toDo'"
              @remove-task="removeTask"
              class="task-card"
            >
            </workflow-task-card>
          </transition-group>
        </draggable>
      </li>
      <li class="task-category" :class="{'empty': tasksInProgress.length === 0}">
        <div class="category-info">
          <p class="category-title">
            {{ taskCategoriesTitle.inProgress }}
            <span class="number-of-tasks">({{ tasksInProgress.length }})</span>
          </p>
          <div class="arrow-icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M13.428 9.453l4.941-4.834 22.881 22.881-22.881 22.881-4.941-4.834 18.154-18.047z"></path>
            </svg>
          </div>
        </div>
        <p v-show="tasksInProgress.length === 0" class="list-is-empty">List Is Empty</p>
        <draggable
          tag="ul"
          v-bind="{handle: '.handle', animation: 100, }"
          :emptyInsertThreshold="100"
          group="tasks"
          v-model="tasksInProgress"
          class="task-list"
        >
          <transition-group name="task-list">
            <workflow-task-card
              v-for="tasks in tasksInProgress"
              :key="tasks.id"
              :task-data="tasks"
              :tasks-category="'inProgress'"
              @remove-task="removeTask"
              class="task-card"
            >
            </workflow-task-card>
          </transition-group>
        </draggable>
      </li>
      <li class="task-category" :class="{'empty': tasksCompleted.length === 0}">
        <div class="category-info">
          <p class="category-title">
            {{ taskCategoriesTitle.completed }}
            <span class="number-of-tasks">({{ tasksCompleted.length }})</span>
          </p>
          <div class="arrow-icon">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M13.428 9.453l4.941-4.834 22.881 22.881-22.881 22.881-4.941-4.834 18.154-18.047z"></path>
            </svg>
          </div>
        </div>
        <p v-show="tasksCompleted.length === 0" class="list-is-empty">List Is Empty</p>
        <draggable
          tag="ul"
          v-bind="{handle: '.handle', animation: 100, }"
          :emptyInsertThreshold="100"
          group="tasks"
          v-model="tasksCompleted"
          class="task-list"
        >
          <transition-group name="task-list">
            <workflow-task-card
              v-for="tasks in tasksCompleted"
              :key="tasks.id"
              :task-data="tasks"
              :tasks-category="'completed'"
              @remove-task="removeTask"
              class="task-card"
            >
            </workflow-task-card>
          </transition-group>
        </draggable>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import draggable from 'vuedraggable';
import workflowTaskCard from '../components/workflow/WorkflowTaskCard.vue';

export default {
  name: 'Workflow',
  components: {
    workflowTaskCard,
    draggable
  },
  data() {
    return {
      taskCategoriesTitle: {
        toDo: 'To Do',
        inProgress: 'In Progress',
        completed: 'Completed'
      }
    };
  },
  computed: {
    ...mapGetters('workflow', {
      toDo: 'toDo',
      inProgress: 'inProgress',
      completed: 'completed'
    }),
    tasksToDo: {
      get() {
        return this.toDo;
      },
      set(value) {
        this.updateToDo(value);
      }
    },
    tasksInProgress: {
      get() {
        return this.inProgress;
      },
      set(value) {
        this.updateInProgress(value);
      }
    },
    tasksCompleted: {
      get() {
        return this.completed;
      },
      set(value) {
        this.updateCompleted(value);
      }
    }
  },
  methods: {
    ...mapActions('workflow', {
      updateToDo: 'updateToDo',
      updateInProgress: 'updateInProgress',
      updateCompleted: 'updateCompleted',
      removeTask: 'removeTask'
    }),
    addNewTask() {
      // TO DO: create model window for adding new task
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';
@import '@/assets/scss/_media-queries.scss';

  .workflow-wrapper {
    padding: 40px;
    overflow: hidden;

    @include media-xl {
      padding: 40px 30px;
    }

    @include media-lg {
      padding: 20px;
    }

    @include media-md {
      padding: 20px 10px 80px 10px;
    }

    .workflow {
      --list-margin: 20px;
      --category-info-height: 50px;
      --category-info-margin-bottom: 30px;

      @include media-xl {
        --category-info-margin-bottom: 5px;
      }

      display: flex;
      position: relative;
      margin: 0 calc(var(--list-margin) * -1);
      list-style-type: none;

      @include media-xl {
        flex-direction: column;
      }

      .task-category {
        width: calc(100% / 3 - (var(--list-margin) * 2));
        height:
          calc(100vh
            - var(--category-info-height)
            - var(--category-info-margin-bottom)
            - var(--header-height));
        position: relative;
        margin: 0 var(--list-margin);
        overflow: hidden;

        @include media-xl {
          width: calc(100% - (var(--list-margin) * 2));
          height:
            calc(390px
              + var(--category-info-height)
              + var(--category-info-margin-bottom));
        }

        .category-info {
          height: var(--category-info-height);
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: var(--category-info-margin-bottom);

          @include media-xl {
            justify-content: center;
          }

          .category-title {
            font-size: 32px;
            font-weight: 500;
            line-height: var(--category-info-height);
            color: var(--widget-elems-color-3);

            .number-of-tasks {
              color: var(--widget-elems-color);
            }
          }

          .btn-add-new-task {
            width: 35px;
            height: 35px;
            margin-left: 10px;
            background-color: transparent;

            &:hover {
              svg {
                fill: var(--controls-bg-color-hover);
              }
            }

            svg {
              width: 100%;
              height: 100%;
              fill: var(--widget-elems-color);
              transition: fill var(--hover-transition-time) ease-in-out;
            }
          }

          .arrow-icon {
            width: 30px;
            height: 40px;
            position: absolute;
            top: 50%;
            right: -5px;
            transform: translateY(-50%);

            @include media-xl {
              display: none;
            }

            svg {
              width: 100%;
              height: 100%;
              fill: var(--widget-elems-color);
            }
          }
        }

        .list-is-empty {
          width: 100%;
          position: absolute;
          top: 30%;
          left: 50%;
          color: var(--widget-elems-color);
          text-align: center;
          font-size: 54px;
          font-weight: 700;
          opacity: .2;
          transform: translateX(-50%) translateY(-50%);
        }

        .task-list {
          height:
            calc(100vh
              - 80px
              - var(--category-info-height)
              - var(--category-info-margin-bottom)
              - var(--header-height));
          padding-right: 3px;
          position: relative;
          overflow: auto;
          list-style-type: none;

          @include scrollbar;

          @include media-xl {
            height:
              calc(390px
                - 80px
                + var(--category-info-height)
                + var(--category-info-margin-bottom));
          }

          .task-card {
            background-color: var(--task-card-bg-color);
            margin-bottom: 15px;
            transition: all .3s;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }

      .empty {
        border: 1px solid #d4d9e3;
      }
    }
  }

  .task-list-enter-active,
  .task-list-leave-active {
    position: absolute;
    transition: all .3s;
  }

  .task-list-enter,
  .task-list-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
