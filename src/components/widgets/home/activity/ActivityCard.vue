<template>
  <li class="card">
    <div class="photo">
      <img :src="require(`@/assets/img/${activityData.userPhoto}`)" alt="Person">
    </div>
    <div class="activity-info">
      <div class="header">
        <p class="name">{{ activityData.userName }}</p>
        <p class="text">{{ activityData.text }}</p>
      </div>
      <p class="time">
        <span class="icon-time">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
            <path d="M27.5 55c-15.188 0-27.5-12.312-27.5-27.5s12.312-27.5 27.5-27.5v0c15.188 0 27.5 12.312 27.5 27.5s-12.312 27.5-27.5 27.5v0zM27.5 49.5c12.15 0 22-9.85 22-22s-9.85-22-22-22v0c-12.15 0-22 9.85-22 22s9.85 22 22 22v0zM24.75 28.627v-17.627h5.5v15.373l10.863 10.863-3.878 3.878-12.485-12.485z"></path>
          </svg>
        </span>
        {{ activityData.time }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ActivityCard',
  props: ['activityData']
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .card {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 30px;
    list-style-type: none;

    &::before,
    &::after {
      content: '';
      width: 1px;
      height: 32px;
      position: absolute;
      left: 53px;
      background-color: #dadee7;
      transform: translateX(-50%);
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    &:first-child::before,
    &:last-child::after  {
      display: none;
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

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;

      .name {
        margin-right: 5px;
        color: var(--widget-elems-color-3);
        font-weight: 500;
      }

      .text {
        color: var(--widget-elems-color);
        font-weight: 400;
      }
    }

    .time {
      position: relative;
      padding-left: 25px;
      color: var(--widget-elems-color);
      font-size: 14px;
      font-weight: 400;

      .icon-time {
        display: block;
        width: 18px;
        height: 18px;
        position: absolute;
        top: -1px;
        left: 0;

        svg {
          width: 100%;
          height: 100%;
          fill: var(--widget-elems-color);
        }
      }
    }
  }
</style>
