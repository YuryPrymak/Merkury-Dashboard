<template>
  <radial-progress-bar
    :diameter="250"
    :innerStrokeWidth="20"
    :strokeWidth="20"
    :animateSpeed="700"
    timingFunc="ease-in-out"
    innerStrokeColor="#dadee7"
    :stopColor="data.color"
    :startColor="data.color"
    :total-steps="data.goal"
    :completed-steps="currentValue"
  >
    <p class="title">{{ data.title }}</p>
    <p class="percent" :style="percentValueColor">{{ data.percent }}%</p>
    <p class="value">{{ data.current }}{{ data.sign }} / {{ data.goal }}{{ data.sign }}</p>
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default {
  name: 'Radial',
  props: ['data'],
  components: {
    RadialProgressBar
  },
  data() {
    return {
      currentValue: 0,
      percentValueColor: {
        color: this.data.color
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.currentValue = this.data.current;
    }, 200);
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .title {
    color: var(--widget-elems-color);
    font-size: 20px;
    font-weight: 700;
  }

  .percent {
    font-size: 26px;
    font-weight: 700;
  }

  .value {
    color: var(--widget-elems-color);
    font-size: 16px;
    font-weight: 500;
  }
</style>
