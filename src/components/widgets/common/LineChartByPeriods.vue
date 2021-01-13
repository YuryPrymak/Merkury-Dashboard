<template>
  <div class="widget-line-chart-by-periods">
    <widget-header-choice-period
      :header-data="headerData"
      @change-period="changePeriod"
    ></widget-header-choice-period>
    <line-chart :chart-data="chartData" class="line-chart"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart.vue';
import WidgetHeaderChoicePeriod from '@/components/widgets/headers/ChoicePeriod.vue';

export default {
  name: 'LineChartByPeriods',
  props: ['widgetData'],
  components: {
    WidgetHeaderChoicePeriod,
    LineChart
  },
  computed: {
    headerData() {
      return {
        title: this.widgetData.title,
        displayedPeriod: this.widgetData.displayedPeriod,
        timePeriods: Object.keys(this.widgetData.data)
      };
    },
    chartData() {
      return {
        labels: this.widgetData.data[this.widgetData.displayedPeriod].labels,
        datasets: [
          {
            data: this.widgetData.data[this.widgetData.displayedPeriod].data,
            backgroundColor: 'transparent',
            borderColor: '#5584ff',
            borderWidth: 5
          }
        ]
      };
    }
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

  .widget-line-chart-by-periods {
    .line-chart {
      margin: 0 30px;

      @include media-sm {
        margin: 5px;
      }
    }
  }
</style>
