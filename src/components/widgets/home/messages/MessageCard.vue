<template>
  <li class="card" :class="unreadMessage">
    <div class="photo">
      <img :src="require(`@/assets/img/${messageData.userPhoto}`)" alt="Person">
    </div>
    <div class="message-info">
      <div class="header">
        <p class="name">{{ messageData.userName }}</p>
        <p class="time">{{ messageData.time }}</p>
      </div>
      <p class="message-text">{{ messageText }}</p>
      <ul class="controls">
        <li>
          <button @click="replyToMessage(messageData.userId)" class="btn btn-reply">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
              <path d="M52.25 45.884c0 0-6.119-26.763-30.25-26.763v-10.956l-19.25 18.076 19.25 18.397v-11.982c13.098-0.003 23.419 1.158 30.25 13.227z"></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MessageCard',
  props: ['messageData'],
  computed: {
    unreadMessage() {
      return {
        'unread-message': this.messageData.haveNewMessages
      };
    },
    messageText() {
      const maxChars = 40;
      const { lastMessage } = this.messageData;
      let text;

      if(lastMessage.length <= maxChars || lastMessage.indexOf(' ', maxChars) === -1) {
        text = lastMessage;
      } else {
        text = `${lastMessage.substr(0, lastMessage.indexOf(' ', maxChars))} (...)`;
      }

      return text;
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    replyToMessage(userId) {
      // TO DO: modal window reply to message
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .card {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-top: 1px solid #dadee7;
    list-style-type: none;

    &:first-child {
      border-top: none;
    }

    .photo {
      width: 45px;
      height: 45px;
      margin-right: 25px;
      flex-shrink: 0;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .message-info {
      .header {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        font-size: 14px;

        .name {
          margin-right: 10px;
          color: var(--widget-elems-color-3);
          font-weight: 500;
        }

        .time {
          color: var(--widget-elems-color);
          font-weight: 400;
        }
      }

      .message-text {
        margin-bottom: 10px;
        color: var(--widget-elems-color-3);
        font-size: 14px;
      }

      .controls {
        display: flex;
        list-style-type: none;

        li {
          .btn {
            width: 22px;
            height: 20px;
            display: block;
            background-color: transparent;

            &:hover {
              svg {
                fill: var(--controls-bg-color-hover);
              }
            }

            svg {
              width: 100%;
              height: 100%;
              fill: var(--widget-elems-color);
              transition: fill var(--hover-transition-time) ease-in-out;
            }
          }
        }
      }
    }
  }

  .unread-message {
    background-color: var(--widget-bg-color-2);
  }
</style>
