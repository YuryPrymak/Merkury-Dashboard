<template>
  <div class="widget-activity">
    <widget-header-notifications :header-data="headerData"></widget-header-notifications>
    <ul class="activity">
      <activity-card
        v-for="data in widgetData.data"
        :key="data.title"
        :activity-data="data"
        class="activity-card"
      ></activity-card>
    </ul>
  </div>
</template>

<script>
import WidgetHeaderNotifications from '@/components/widgets/headers/Notifications.vue';
import ActivityCard from '@/components/widgets/home/activity/ActivityCard.vue';

export default {
  name: 'Activity',
  props: ['widgetData'],
  components: {
    WidgetHeaderNotifications,
    ActivityCard
  },
  computed: {
    headerData() {
      return {
        title: this.widgetData.title,
        counterInfo: this.widgetData.data.length,
        counterWarning: 0
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

  .widget-activity {
    .activity {
      height: 440px;
      position: relative;
      overflow: auto;

      @include scrollbar;
    }
  }
</style>
