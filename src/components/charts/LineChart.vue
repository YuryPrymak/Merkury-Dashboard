<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'LineChart',
  props: ['chartData'],
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {
      chartOptions: {
        width: 100,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              fontColor: '#dadee7',
              fontSize: 18,
              fontFamily: "'Roboto', sans-serif"
            },
            gridLines: {
              color: '#dadee7'
            }
          }],
          yAxes: [{
            ticks: {
              fontColor: '#dadee7',
              fontSize: 18,
              fontFamily: "'Roboto', sans-serif"
            },
            gridLines: {
              color: '#dadee7'
            }
          }]
        }
      }
    };
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions);
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

</style>
