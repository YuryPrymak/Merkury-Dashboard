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
    ],
    widgets: {
      sales: {
        displayedPeriod: 'year',
        title: 'Your Sales',
        totalValueLabel: 'Sales',
        totalNumberOfSales: {
          year: '8,487',
          '6 months': '4,991',
          month: '1,546',
          week: '595',
          day: '121'
        },
        data: [
          {
            title: 'Websites',
            color: '#5584ff',
            values: {
              year: 2541,
              '6 months': 1681,
              month: 351,
              week: 148,
              day: 35
            }
          },
          {
            title: 'Logo',
            color: '#4b74e0',
            values: {
              year: 593,
              '6 months': 347,
              month: 109,
              week: 54,
              day: 9
            }
          },
          {
            title: 'Social Media',
            color: '#4164c2',
            values: {
              year: 4075,
              '6 months': 2189,
              month: 815,
              week: 280,
              day: 44
            }
          },
          {
            title: 'Adwords',
            color: '#3755a4',
            values: {
              year: 730,
              '6 months': 455,
              month: 179,
              week: 78,
              day: 21
            }
          },
          {
            title: 'E-Commerce',
            color: '#2f399e',
            values: {
              year: 548,
              '6 months': 319,
              month: 92,
              week: 35,
              day: 12
            }
          }
        ]
      }
    }
  },
  getters: {
    nav(state) {
      return state.nav;
    },
    navMin(state) {
      return state.user.navMin;
    },
    widgetSalesData(state) {
      return state.widgets.sales;
    }
  },
  mutations: {
    navToggle(state) {
      state.user.navMin = !state.user.navMin;
    },
    widgetSalesChangeDisplayedPeriod(state, payload) {
      state.widgets.sales.displayedPeriod = payload;
    }
  },
  actions: {
    navToggle(store) {
      store.commit('navToggle');
    },
    widgetSalesChangeDisplayedPeriod(store, payload) {
      store.commit('widgetSalesChangeDisplayedPeriod', payload);
    }
  },
  modules: {
  },
});
