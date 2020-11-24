import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      navMin: false
    },
    nav: [
      {
        url: '/',
        title: 'Home',
        iconPath: 'nav/home.png'
      },
      {
        url: '/workflow',
        title: 'Workflow',
        iconPath: 'nav/workflow.png'
      },
      {
        url: '/statistics',
        title: 'Statistics',
        iconPath: 'nav/statistics.png'
      },
      {
        url: '/calendar',
        title: 'Calendar',
        iconPath: 'nav/calendar.png'
      },
      {
        url: '/users',
        title: 'Users',
        iconPath: 'nav/users.png'
      },
      {
        url: '/settings',
        title: 'Settings',
        iconPath: 'nav/settings.png'
      }
    ]
  },
  getters: {
    nav(state) {
      return state.nav;
    },
    navMin(state) {
      return state.user.navMin;
    }
  },
  mutations: {
    navToggle(state) {
      state.user.navMin = !state.user.navMin;
    }
  },
  actions: {
    navToggle(store) {
      store.commit('navToggle');
    }
  },
  modules: {
  },
});
