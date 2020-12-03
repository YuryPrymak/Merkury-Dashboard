<template>
  <div class="widget-header">
    <h1 class="title">{{ headerData.title }}</h1>
    <div class="period-choice">
      <p class="label">Period: <span class="period">Last {{ headerData.displayedPeriod }}</span></p>
      <button
        @click="listOfTimePeriodsToggle"
        ref="btnListOfTimePeriodsToggle"
        class="btn-list-toggle"
      >
        <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
          <path d="M16.973 19.658l10.527 10.527 10.527-10.527 3.223 3.223-13.75 13.75-13.75-13.75z"></path>
        </svg>
      </button>
      <ul
        v-show="showListOfTimePeriods"
        v-closable="{
          handler: 'listOfTimePeriodsClose',
          exclude: ['btnListOfTimePeriodsToggle']
        }"
        class="list-of-time-periods"
      >
        <li v-for="period in headerData.timePeriods" :key="period">
          <button @click="changePeriod(period)" class="btn-period">{{ period}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderType1',
  props: ['headerData'],
  data() {
    return {
      showListOfTimePeriods: false
    };
  },
  methods: {
    listOfTimePeriodsToggle() {
      this.showListOfTimePeriods = !this.showListOfTimePeriods;
    },
    listOfTimePeriodsClose() {
      this.showListOfTimePeriods = false;
    },
    changePeriod(period) {
      this.$emit('change-period', period);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .widget-header {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    background-color: var(--widget-bg-color);

    .title {
      color: #8492af;
      font-size: 36px;
      font-weight: 700;
    }

    .period-choice {
      width: 220px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 0 10px 0 20px;
      border: 1px solid #dadee7;
      border-radius: 25px;
      font-size: 16px;

      .label {
        margin-right: auto;
        color: #8492af;

        .period {
          color: #000;
          font-weight: 700;
          text-transform: capitalize;
          white-space: nowrap;
        }
      }

      .btn-list-toggle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: transparent;

        &:hover {
          .icon {
            fill: var(--controls-bg-color-hover);
          }
        }

        .icon {
          width: 100%;
          height: 100%;
          margin-top: 1px;
          fill: #8492af;
          transition: fill var(--hover-transition-time) ease-in-out;
        }
      }

      .list-of-time-periods {
        width: 100%;
        position: absolute;
        left: 0;
        top: 45px;
        list-style-type: none;
        background-color: var(--widget-bg-color);
        box-shadow: 0 0 3px 1px #dadee7;

        .btn-period {
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
  }
</style>
