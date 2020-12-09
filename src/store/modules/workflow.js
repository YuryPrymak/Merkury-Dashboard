export default {
  namespaced: true,
  state: {
    toDo: [
      {
        text: 'New Landing Page',
        time: '5 days left',
        id: 58693
      },
      {
        text: 'Create new logo',
        time: '5 days left',
        id: 47602
      },
      {
        text: 'Check mail',
        time: '5 days left',
        id: 86345
      },
      {
        text: 'Finish project',
        time: '5 days left',
        id: 97500
      },
      {
        text: 'Create new widget',
        time: '5 days left',
        id: 11256
      },
      {
        text: 'Check statistics',
        time: '5 days left',
        id: 65435
      }
    ],
    inProgress: [
      {
        text: 'Business plan',
        time: '5 days left',
        id: 35664
      },
      {
        text: 'Finish logo for App',
        time: '5 days left',
        id: 63336
      },
      {
        text: 'Check mail',
        time: '5 days left',
        id: 57773
      }
    ],
    completed: [
      {
        text: 'Create Home page',
        time: '5 days left',
        id: 75933
      },
      {
        text: 'Create Contact page',
        time: '5 days left',
        id: 45625
      },
      {
        text: 'SEO',
        time: '5 days left',
        id: 67325
      },
      {
        text: 'Check pull requests',
        time: '5 days left',
        id: 64426
      }
    ]
  },
  getters: {
    toDo(state) {
      return state.toDo;
    },
    inProgress(state) {
      return state.inProgress;
    },
    completed(state) {
      return state.completed;
    }
  },
  mutations: {
    updateToDo(state, payload) {
      state.toDo = payload;
    },
    updateInProgress(state, payload) {
      state.inProgress = payload;
    },
    updateCompleted(state, payload) {
      state.completed = payload;
    },
    removeTask(state, payload) {
      const index = state[payload.category].map(task => task.id).indexOf(payload.id);
      state[payload.category].splice(index, 1);
    }
  },
  actions: {
    updateToDo(store, payload) {
      store.commit('updateToDo', payload);
    },
    updateInProgress(store, payload) {
      store.commit('updateInProgress', payload);
    },
    updateCompleted(store, payload) {
      store.commit('updateCompleted', payload);
    },
    removeTask(store, payload) {
      store.commit('removeTask', payload);
    }
  }
};
