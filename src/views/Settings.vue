<template>
  <div class="wrapper">
    <ul class="settings-list">
      <li class="settings">
        <p class="settings-title">Change Password</p>
        <label for="old-password" class="label">Old Password</label>
        <input
          type="password"
          maxlength="30"
          autocomplete="off"
          id="old-password"
          class="input"
        >
        <label for="new-password" class="label">New Password</label>
        <input
          type="password"
          maxlength="30"
          autocomplete="off"
          id="new-password"
          class="input"
        >
        <label for="confirm-password" class="label">Confirm Password</label>
        <input
          type="password"
          maxlength="30"
          autocomplete="off"
          id="confirm-password"
          class="input"
        >
        <button class="btn-submit">Confirm</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  data() {
    return {

    };
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_media-queries.scss';

  .wrapper {
    padding: 40px;

    @include media-xl {
      padding: 40px 30px;
    }

    @include media-lg {
      padding: 20px;
    }

    @include media-md {
      padding: 20px 10px 80px 10px;
    }

    .settings-list {
      list-style-type: none;

      .settings {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        padding: 20px;
        background-color: var(--widget-bg-color);
        border: 1px solid #d4d9e3;

        @include media-md {
          margin-bottom: 10px;
        }

        &:last-child {
          margin-bottom: 0;
        }

        .settings-title {
          margin-bottom: 30px;
          color: var(--widget-elems-color);
          font-size: 34px;
          font-weight: 700;
        }

        .label {
          margin-bottom: 5px;
          color: var(--widget-elems-color-3);
          font-size: 20px;
          font-weight: 700;
        }

        .input {
          width: 300px;
          height: 30px;
          margin-bottom: 15px;
          padding: 0 10px;
          border: 1px solid #dadee7;
          border-radius: 5px;
          color: var(--widget-elems-color-3);
          font-size: 18px;
          line-height: 30px;
        }

        .btn-submit {
          width: 200px;
          height: 40px;
          border-radius: 20px;
          background-color: var(--controls-bg-color);
          color: var(--text-color-primary);
          font-size: 20px;
          font-weight: 500;
          text-transform: uppercase;
          box-shadow: 0px 0px 2px 1px var(--controls-bg-color);
          transition: all var(--hover-transition-time) ease-in-out;

          &:hover {
            background-color: var(--controls-bg-color-hover);
            box-shadow: 0px 0px 2px 1px var(--controls-bg-color-hover);
          }
        }
      }
    }
  }
</style>
