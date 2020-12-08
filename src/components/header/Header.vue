<template>
  <header class="header">
    <button
      @click="navToggle"
      class="btn-nav-toggle"
      :class="navState"
    >
      <svg>
        <rect id="rect-1" width="100%" height="20%" y="0%"/>
        <rect id="rect-2" width="100%" height="20%" y="40%"/>
        <rect id="rect-3" width="100%" height="20%" y="80%"/>
      </svg>
    </button>
    <button class="btn-messages">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
        <path d="M49.5 5.5c3.038 0 5.5 2.462 5.5 5.5v0 33c0 3.038-2.462 5.5-5.5 5.5v0h-44c-3.038 0-5.5-2.462-5.5-5.5v0-33c0-3.025 2.475-5.5 5.5-5.5h44zM37.483 30.525l17.517 13.475v-5.5l-14.080-10.725 14.080-11.275v-5.5l-27.5 22-27.5-22v5.5l14.080 11.275-14.080 10.725v5.5l17.518-13.475 9.982 7.975 9.983-7.975z">
        </path>
      </svg>
      <span class="counter">3</span>
    </button>
    <button class="btn-notifications">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
        <path d="M46.429 43.447v3.137h-37.857v-3.137c0 0-0.81-1.734 3.584-5.894 4.39-4.158 3.812-14.905 3.812-22.184s10.223-7.434 10.223-7.434h0.351c0 0.003 0-0.050 0-1.182 0-0.727-2.441-3.36-2.441-3.36l-0.036-1.593h6.892l-0.046 1.653c0 0-2.645 2.631-2.645 3.407 0 0.749 0 1 0 1.074h0.545c0 0 10.223 0.155 10.223 7.434s-0.577 18.028 3.814 22.187 3.582 5.892 3.582 5.892zM31.818 48.245c0 2.38-1.928 4.955-4.307 4.955s-4.307-2.575-4.307-4.955c0 0.053 8.614-0.055 8.614 0z">
        </path>
      </svg>
      <span class="counter">3</span>
    </button>
    <button
      @click="settingsMenuToggle"
      ref="btnSettingsMenuToggle"
      class="btn-user-settings"
      :class="userSettingsMenuState"
    >
      <img src="@/assets/img/header/default-user-photo.png" alt="Person" class="user-photo">
    </button>
    <ul
      v-show="showSettingsMenu"
      v-closable="{
        handler: 'closeSettingsMenu',
        exclude: ['btnSettingsMenuToggle']
      }"
      class="settings"
    >
      <li><a href="#" class="settings-btn">LogOut</a></li>
    </ul>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      showSettingsMenu: false
    };
  },
  computed: {
    ...mapGetters('navigation', { minimizedNavigation: 'minimizedNavigation' }),
    navState() {
      return {
        'btn-nav-toggle-close': !this.minimizedNavigation,
        'btn-nav-toggle-open': this.minimizedNavigation
      };
    },
    userSettingsMenuState() {
      return {
        'btn-user-settings-close': this.showSettingsMenu,
        'btn-user-settings-open': !this.showSettingsMenu
      };
    }
  },
  methods: {
    ...mapActions('navigation', { navToggle: 'navToggle' }),
    settingsMenuToggle() {
      this.showSettingsMenu = !this.showSettingsMenu;
    },
    closeSettingsMenu() {
      this.showSettingsMenu = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables.scss';

  .header {
    width: calc(100% - var(--nav-width));
    height: var(--header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0 45px;
    border-bottom: 1px solid #d4d9e3;
    background-color: var(--header-bg-color);
    z-index: var(--header-z-index);

    .btn-nav-toggle {
      width: 25px;
      height: 20px;
      position: relative;
      margin-right: auto;
      background-color: transparent;
      box-sizing: content-box;
      overflow: hidden;

      &:hover {
        svg {
          fill: var(--controls-bg-color-hover);
        }
      }

      svg {
        width: 100%;
        height: 100%;
        fill: var(--controls-bg-color);
        transition: fill var(--hover-transition-time) ease-in-out;
      }
    }

    .btn-nav-toggle-open,
    .btn-nav-toggle-close {
      &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        border-style: solid;
        transform: translateY(-50%);
      }
    }

    .btn-nav-toggle-close {
      padding-left: 12px;

      &::before {
        left: 0;
        border-width: 6px 6px 6px 0;
        border-color: transparent var(--controls-bg-color-hover) transparent transparent;
      }
    }

    .btn-nav-toggle-open {
      padding-right: 12px;

      &::before {
        right: 0;
        border-width: 6px 0 6px 6px;
        border-color: transparent transparent transparent var(--controls-bg-color-hover);
      }
    }

    .btn-messages,
    .btn-notifications {
      margin: 0 10px;
      position: relative;
      background-color: transparent;

      &:hover {
        svg {
          fill: var(--controls-bg-color-hover);
        }
      }

      svg {
        width: 100%;
        height: 100%;
        fill: var(--controls-bg-color);
        transition: fill var(--hover-transition-time) ease-in-out;
      }

      .counter {
        width: 20px;
        height: 20px;
        position: absolute;
        top: -3px;
        right: -5px;
        border-radius: 50%;
        border: 2px solid #fff;
        line-height: 16px;
        background-color: var(--controls-bg-color-hover);
        color: var(--text-color-primary);
        font-size: 12px;
        font-weight: 500;
      }
    }

    .btn-messages {
      width: 40px;
      height: 30px;
    }

    .btn-notifications {
      width: 30px;
      height: 40px;
    }

    .btn-user-settings {
      width: 80px;
      height: 50px;
      position: relative;
      margin-left: 10px;
      background-color: transparent;
      text-align: left;

      .user-photo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    .btn-user-settings-close,
    .btn-user-settings-open {
      &::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        right: 0;
        border-style: solid;
        transform: translateY(-50%);
        transition: border-color var(--hover-transition-time) ease-in-out;
      }
    }

    .btn-user-settings-open {
      &:hover {
        &::after {
          border-color: var(--controls-bg-color-hover) transparent transparent transparent;
        }
      }

      &::after {
        border-width: 6px 6px 0 6px;
        border-color: var(--controls-bg-color) transparent transparent transparent;
      }
    }

    .btn-user-settings-close {
      &:hover {
        &::after {
          border-color: transparent transparent var(--controls-bg-color-hover) transparent;
        }
      }

      &::after {
        border-width: 0 6px 6px 6px;
        border-color: transparent transparent var(--controls-bg-color) transparent;
      }
    }

    .settings {
      width: 120px;
      position: absolute;
      top: 90px;
      right: 45px;
      padding: 5px 0;
      list-style-type: none;
      background-color: var(--controls-bg-color);
      box-shadow: 0px 0px 2px 1px var(--controls-bg-color);

      .settings-btn {
        height: 30px;
        display: block;
        padding: 0 5px;
        line-height: 30px;
        color: var(--text-color-primary);
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        transition: background-color var(--hover-transition-time) ease-in-out;

        &:hover {
          background-color: var(--controls-bg-color-hover);
        }
      }
    }
  }
</style>
