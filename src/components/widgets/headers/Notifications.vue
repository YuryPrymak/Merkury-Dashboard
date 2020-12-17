<template>
  <div class="widget-header">
    <h1 class="title">{{ headerData.title }}</h1>
    <div v-show="showCounterInfo" class="counter counter-info">{{ counterInfoValue }}</div>
    <div v-show="showCounterWarning" class="counter counter-warning">{{ counterWarningValue }}</div>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  props: ['headerData'],
  computed: {
    showCounterInfo() {
      return +this.headerData.counterInfo > 0 ? true : false;
    },
    showCounterWarning() {
      return +this.headerData.counterWarning > 0 ? true : false;
    },
    counterInfoValue() {
      return this.headerData.counterInfo < 99 ? this.headerData.counterInfo : '...';
    },
    counterWarningValue() {
      return this.headerData.counterWarning < 99 ? this.headerData.counterWarning : '...';
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .widget-header {
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #dadee7;

    .title {
      color: var(--widget-elems-color-3);
      font-size: 24px;
      font-weight: 500;
      margin-right: auto;
    }

    .counter {
      width: 45px;
      height: 45px;
      flex-shrink: 0;
      border-radius: 50%;
      color: var(--widget-elems-color-4);
      text-align: center;
      line-height: 45px;
      font-size: 24px;
      font-weight: 500;
    }

    .counter-info {
      margin-right: 10px;
      background-color: #5384ff;
    }

    .counter-warning {
      background-color: #f83c7b;
    }
  }
</style>
