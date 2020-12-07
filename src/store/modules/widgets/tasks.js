export default {
  namespaced: true,
  state: {
    title: 'Tasks',
    data: [
      {
        title: 'New Website',
        time: '5 days left',
        timeIsUp: false,
        id: 35383
      },
      {
        title: 'Free business template',
        time: '1 day delays',
        timeIsUp: true,
        id: 98855
      },
      {
        title: 'New logo',
        time: '10 days left',
        timeIsUp: false,
        id: 57385
      },
      {
        title: 'Optimize site',
        time: '1 day left',
        timeIsUp: false,
        id: 97530
      },
      {
        title: 'Check statistics',
        time: '3 days delays',
        timeIsUp: true,
        id: 29538
      }
    ]
  },
  getters: {
    data(state) {
      return state;
    }
  },
  mutations: {
    removeTask(state, payload) {
      const index = state.data.map(task => task.id).indexOf(payload);
      state.data.splice(index, 1);
    }
  },
  actions: {
    removeTask(store, payload) {
      store.commit('removeTask', payload);
    }
  }
};
