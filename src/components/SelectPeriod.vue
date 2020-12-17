<template>
  <div class="select">
    <div class="header">
      <p class="label">
        Period: <span class="period">Last {{ selectData.displayedPeriod }}</span>
      </p>
      <button
        @click="listToggle"
        ref="listToggle"
        class="btn-list-toggle"
      >
        <svg class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
          <path d="M16.973 19.658l10.527 10.527 10.527-10.527 3.223 3.223-13.75 13.75-13.75-13.75z"></path>
        </svg>
      </button>
    </div>
    <ul
      v-show="showList"
      v-closable="{
        handler: 'listClose',
        exclude: ['listToggle']
      }"
      class="list"
    >
      <li v-for="period in selectData.timePeriods" :key="period">
        <button
          @click="changePeriod(period)"
          class="btn-period"
          :class="{'active-period' : selectData.displayedPeriod === period}"
        >
          {{ period }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SelectPeriod',
  props: ['selectData'],
  data() {
    return {
      showList: false,
    };
  },
  methods: {
    listToggle() {
      this.showList = !this.showList;
    },
    listClose() {
      this.showList = false;
    },
    changePeriod(period) {
      this.$emit('change-period', period);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .select {
    border: 1px solid #dadee7;
    border-radius: 25px;
    background-color: var(--widget-bg-color);
    font-size: 16px;
    overflow: hidden;

    .header {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px 0 20px;

      .label {
        margin-right: auto;
        color: var(--widget-elems-color);

        .period {
          color: var(--widget-elems-color-2);
          font-weight: 700;
          text-transform: capitalize;
          white-space: nowrap;
        }
      }

      .btn-list-toggle {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        margin-left: 10px;
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
    }

    .list {
      width: 100%;
      padding: 5px 0 20px 0;
      list-style-type: none;
      border-top: 1px solid #dadee7;

      .btn-period {
        width: 100%;
        height: 30px;
        position: relative;
        padding: 0 15px;
        background-color: transparent;
        color: var(--widget-elems-color);
        font-size: 20px;
        font-weight: 700;
        transition: background-color var(--hover-transition-time) ease-in-out,
        color var(--hover-transition-time) ease-in-out;
        text-transform: capitalize;
        text-align: left;

        &:hover {
          background-color: var(--widget-elems-color-hover);
          color: var(--controls-bg-color-hover);
        }
      }

      .active-period {
        color: var(--controls-bg-color-hover);

        &::before {
          content: '';
          width: 3px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--controls-bg-color-hover);
        }
      }
    }
  }
</style>
