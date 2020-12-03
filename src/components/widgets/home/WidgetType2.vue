<template>
  <div class="widget-type-2">
    <widget-header-type-1
      :header-data="headerData"
      @change-period="changePeriod"
    ></widget-header-type-1>
    <line-chart :chart-data="chartData" class="line-chart"></line-chart>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart.vue';
import WidgetHeaderType1 from '@/components/widgets/headers/HeaderType1.vue';

export default {
  name: 'WidgetType2',
  props: ['widgetData'],
  components: {
    WidgetHeaderType1,
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

  .widget-type-2 {
    .line-chart {
      margin: 30px;
    }
  }
</style>
