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
      return state.minimizedNavigation || false;
    }
  },
  mutations: {
    navToggle(state) {
      state.minimizedNavigation = !state.minimizedNavigation;
    }
  },
  actions: {
    navToggle(store) {
      store.commit('navToggle');
    }
  }
};
