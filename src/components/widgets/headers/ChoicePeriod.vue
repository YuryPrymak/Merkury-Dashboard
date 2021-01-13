<template>
  <div class="widget-header">
    <h1 class="title">{{ headerData.title }}</h1>
    <select-period
      :select-data="{ displayedPeriod: headerData.displayedPeriod, timePeriods: headerData.timePeriods }"
      @change-period="changePeriod"
      class="select-period"
    ></select-period>
  </div>
</template>

<script>
import SelectPeriod from '@/components/SelectPeriod.vue';

export default {
  name: 'ChoicePeriod',
  props: ['headerData'],
  components: {
    SelectPeriod
  },
  methods: {
    changePeriod(period) {
      this.$emit('change-period', period);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_media-queries.scss';

  .widget-header {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 35px;
    background-color: var(--widget-bg-color);

    @include media-xl {
      padding: 0 15px;
    }

    @include media-sm {
      justify-content: center;
      align-items: flex-start;
      padding: 5px 15px;
    }

    .title {
      margin-right: 235px;
      color: var(--widget-elems-color);
      font-size: 36px;
      font-weight: 700;

      @include media-sm {
        margin-right: 0;
      }
    }

    .select-period {
      width: 230px;
      position: absolute;
      top: 30px;
      right: 35px;

      @include media-xl {
        right: 15px;
      }

      @include media-sm {
        top: 55px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
