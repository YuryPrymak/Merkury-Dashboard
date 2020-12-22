export default {
  namespaced: true,
  state: {
    data: [
      {
        title: 'Sales',
        current: 3795,
        goal: 10500,
        percent: 36.14,
        color: '#5484ff',
        sign: '$'
      },
      {
        title: 'New Customers',
        current: 739,
        goal: 1000,
        percent: 73.9,
        color: '#aa5fb9',
        sign: ''
      },
      {
        title: 'New Products',
        current: 27,
        goal: 50,
        percent: 54,
        color: '#f83c7b',
        sign: ''
      }
    ]
  },
  getters: {
    data(state) {
      return state.data;
    }
  }
};
