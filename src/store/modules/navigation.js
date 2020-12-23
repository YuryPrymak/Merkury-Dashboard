export default {
  namespaced: true,
  state: {
    minimizedNavigation: false,
    navLinks: [
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
    navLinks(state) {
      return state.navLinks;
    },
    minimizedNavigation(state) {
      return state.minimizedNavigation;
    }
  },
  mutations: {
    navToggle(state) {
      const cookieTime = 7 * 24 * 60 * 60;

      state.minimizedNavigation = !state.minimizedNavigation;
      document.cookie = `navState=${state.minimizedNavigation}; path=/; max-age=${cookieTime}`;
    },
    setNavState(state, payload) {
      payload === 'true' ? state.minimizedNavigation = true : state.minimizedNavigation = false;
    }
  },
  actions: {
    navToggle(store) {
      store.commit('navToggle');
    },
    setNavState(store, payload) {
      store.commit('setNavState', payload.status);
    }
  }
};
