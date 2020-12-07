<template>
  <div class="widget-messages">
    <widget-header-type-2 :header-data="headerData"></widget-header-type-2>
    <p v-show="isHaveMessages" class="label">No Messages</p>
    <ul class="messages">
      <message-card
        v-for="data in widgetData.data"
        :key="data.title"
        :message-data="data"
        class="message"
      ></message-card>
    </ul>
  </div>
</template>

<script>
import WidgetHeaderType2 from '@/components/widgets/headers/HeaderType2.vue';
import MessageCard from '@/components/widgets/home/messages/MessageCard.vue';

export default {
  name: 'Messages',
  props: ['widgetData'],
  components: {
    WidgetHeaderType2,
    MessageCard
  },
  computed: {
    headerData() {
      return {
        title: this.widgetData.title,
        counterInfo: this.widgetData.data.filter(info => info.haveNewMessages === true).length,
        counterWarning: 0
      };
    },
    isHaveMessages() {
      return !this.widgetData.data.length;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_mixins.scss';

  .widget-messages {
    position: relative;

    .label {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #8492af;
      text-align: center;
      font-size: 54px;
      font-weight: 700;
      opacity: .2;
      transform: translateX(-50%) translateY(-50%);
    }

    .messages {
      height: 440px;
      position: relative;
      overflow: auto;

      @include scrollbar;
    }
  }
</style>
