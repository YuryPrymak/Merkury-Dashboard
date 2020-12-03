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
      },
      userActivity: {
        displayedPeriod: 'year',
        title: 'User Activity',
        data: {
          year: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            data: [45152, 44985, 44900, 45085, 45185, 45245, 45159, 45340, 45428, 45503, 45559, 45610]
          },
          '6 months': {
            labels: ['Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            data: [25156, 26201, 26549, 27248, 27516, 27335]
          },
          month: {
            labels: ['1.03', '2.03', '3.03', '4.03', '5.03', '6.03', '7.03', '8.03', '9.03',
              '10.03', '11.03', '12.03', '13.03', '14.03', '15.03', '16.03', '17.03', '18.03',
              '19.03', '20.03', '21.03', '22.03', '23.03', '24.03', '25.03', '26.03', '27.03',
              '28.03', '29.03', '30.03', '31.03'],
            data: [6110, 6090, 6100, 6125, 6130, 6118, 6102, 6095, 6084, 6098, 6070, 6059,
              6071, 6078, 6085, 6090, 6093, 6101, 6110, 6115, 6105, 6120, 6125, 6130, 6118,
              6120, 6115, 6123, 6130, 6135
            ]
          },
          week: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            data: [1534, 1487, 1455, 1496, 1470, 1534, 1512]
          },
          day: {
            labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am',
              '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm',
              '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
            ],
            data: [153, 186, 159, 147, 135, 140, 158, 176, 211, 203, 228, 254,
              263, 280, 285, 265, 250, 209, 218, 199, 180, 172, 176, 161
            ]
          }
        }
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
    },
    widgetUserActivityData(state) {
      return state.widgets.userActivity;
    }
  },
  mutations: {
    navToggle(state) {
      state.user.navMin = !state.user.navMin;
    },
    widgetSalesChangeDisplayedPeriod(state, payload) {
      state.widgets.sales.displayedPeriod = payload;
    },
    widgetUserActivityChangeDisplayedPeriod(state, payload) {
      state.widgets.userActivity.displayedPeriod = payload;
    }
  },
  actions: {
    navToggle(store) {
      store.commit('navToggle');
    },
    widgetSalesChangeDisplayedPeriod(store, payload) {
      store.commit('widgetSalesChangeDisplayedPeriod', payload);
    },
    widgetUserActivityChangeDisplayedPeriod(store, payload) {
      store.commit('widgetUserActivityChangeDisplayedPeriod', payload);
    }
  },
  modules: {
  },
});
