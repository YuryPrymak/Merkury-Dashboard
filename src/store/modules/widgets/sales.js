export default {
  namespaced: true,
  state: {
    title: 'Your Sales',
    displayedPeriod: 'year',
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
