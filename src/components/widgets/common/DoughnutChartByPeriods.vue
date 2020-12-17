<template>
  <div class="widget-doughnut-chart-by-periods">
    <widget-header-choice-period
      :header-data="headerData"
      @change-period="changePeriod"
    ></widget-header-choice-period>
    <doughnut-chart :chart-data="chartData" class="doughnut-chart"></doughnut-chart>
    <div class="total-number-of-sales">
      <p class="number">{{ totalNumberOfSales }}</p>
      <p class="label">{{ widgetData.totalValueLabel }}</p>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/components/charts/DoughnutChart.vue';
import WidgetHeaderChoicePeriod from '@/components/widgets/headers/ChoicePeriod.vue';

export default {
  name: 'DoughnutChartByPeriods',
  props: ['widgetData'],
  components: {
    WidgetHeaderChoicePeriod,
    DoughnutChart
  },
  computed: {
    totalNumberOfSales() {
      return this.widgetData.totalNumberOfSales[this.widgetData.displayedPeriod];
    },
    headerData() {
      return {
        title: this.widgetData.title,
        displayedPeriod: this.widgetData.displayedPeriod,
        timePeriods: Object.keys(this.widgetData.data[0].values)
      };
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.colors,
            data: this.values
          }
        ]
      };
    },
    labels() {
      return this.widgetData.data.map(info => info.title);
    },
    values() {
      return this.widgetData.data.map(info => info.values[this.widgetData.displayedPeriod]);
    },
    colors() {
      return this.widgetData.data.map(info => info.color);
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

  .widget-doughnut-chart-by-periods {
    position: relative;

    .doughnut-chart {
      margin: 30px;
    }

    .total-number-of-sales {
      position: absolute;
      bottom: 30px;
      right: 30px;
      text-align: center;
      color: var(--widget-elems-color);

      .number {
        font-size: 36px;
        font-weight: 700;
      }

      .label {
        font-size: 20px;
      }
    }
  }
</style>
