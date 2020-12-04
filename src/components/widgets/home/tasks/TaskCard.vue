<template>
  <li class="card">
    <div class="icon handle">{{ iconText }}</div>
    <div class="info">
      <p class="title">{{ taskData.title }}</p>
      <p class="time" :class="timeIsUp">
        <span class="icon-time">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
            <path d="M27.5 55c-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5v0c15.188 0 27.5 12.312 27.5 27.5s-12.312 27.5-27.5 27.5v0zM27.5 49.5c12.15 0 22-9.85 22-22s-9.85-22-22-22v0c-12.15 0-22 9.85-22 22s9.85 22 22 22v0zM24.75 28.627v-17.627h5.5v15.373l10.863 10.863-3.878 3.878-12.485-12.485z"></path>
          </svg>
        </span>
        {{ taskData.time }}
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
            @click="widgetTasksRemoveTask(taskData.id)"
            class="btn-remove-card"
          >
            Remove
          </button>
        </li>
      </ul>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskCard',
  props: ['taskData'],
  data() {
    return {
      showCardOptions: false,
    };
  },
  computed: {
    iconText() {
      return this.taskData.title.charAt(0);
    },
    timeIsUp() {
      return {
        'time-is-up': this.taskData.timeIsUp
      };
    }
  },
  methods: {
    ...mapActions([
      'widgetTasksRemoveTask'
    ]),
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

  .card {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 30px;
    border-top: 1px solid #dadee7;
    list-style-type: none;

    &:first-child {
      border-top: none;
    }

    .icon {
      width: 45px;
      height: 45px;
      margin-right: 25px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: #5384ff;
      color: #fff;
      text-align: center;
      line-height: 45px;
      font-size: 24px;
      font-weight: 500;
      cursor: move;
    }

    .info {
      width: 100%;
      margin-right: 25px;

      .title {
        margin-bottom: 8px;
        color: #0e1a35;
        font-size: 20px;
        font-weight: 500;
      }

      .time {
        position: relative;
        padding-left: 25px;
        font-size: 14px;
        color: #8492af;

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
            fill: #8492af;
          }
        }
      }

      .time-is-up {
        color: #f8407e;

        .icon-time {
          svg {
            fill: #f8407e;
          }
        }
      }
    }

    .btn-options {
      width: 45px;
      height: 45px;
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
        fill: #8492af;
        transition: fill var(--hover-transition-time) ease-in-out;
      }
    }

    .card-options {
      width: 120px;
      position: absolute;
      right: 75px;
      top: 50%;
      list-style-type: none;
      background-color: var(--widget-bg-color);
      box-shadow: 0 0 3px 1px #dadee7;
      transform: translateY(-50%);

      .btn-remove-card {
        width: 100%;
        height: 30px;
        background-color: transparent;
        color: #8492af;
        font-size: 20px;
        font-weight: 700;
        transition: background-color var(--hover-transition-time) ease-in-out,
        color var(--hover-transition-time) ease-in-out;
        text-transform: capitalize;

        &:hover {
          background-color: #f0f0f0;
          color: var(--controls-bg-color-hover);
        }
      }
    }
  }
</style>