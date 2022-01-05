<script>
import { Doughnut, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'DoughnutChart',
  props: ['chartData'],
  extends: Doughnut,
  mixins: [reactiveProp],
  data() {
    return {
      chartOptions: {
        cutoutPercentage: 60,
        width: 100,
        maintainAspectRatio: false,
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        point: {
          pointRadius: 25
        },
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            boxWidth: 10,
            fontFamily: "'Roboto', sans-serif",
            fontSize: 20,
            fontColor: '#8492af'
          }
        }
      }
    };
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions);
  }
};
</script>
