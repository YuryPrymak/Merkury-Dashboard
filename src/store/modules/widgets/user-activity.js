export default {
  namespaced: true,
  state: {
    title: 'User Activity',
    displayedPeriod: 'year',
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
  },
  getters: {
    data(state) {
      return state;
    }
  },
  mutations: {
    changeDisplayedPeriod(state, payload) {
      state.displayedPeriod = payload;
    }
  },
  actions: {
    changeDisplayedPeriod(store, payload) {
      store.commit('changeDisplayedPeriod', payload);
    }
  }
};
