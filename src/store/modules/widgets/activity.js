export default {
  namespaced: true,
  state: {
    title: 'Activity',
    data: [
      {
        userName: 'James Smith',
        userId: 38392,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: 'Just now',
        text: 'leave a comment'
      },
      {
        userName: 'Alex Clooney',
        userId: 34851,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '5 minutes ago',
        text: 'add new project'
      },
      {
        userName: 'Sarah Parker',
        userId: 38512,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '2 hours ago',
        text: 'completed tasks'
      },
      {
        userName: 'George Brown',
        userId: 28764,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '5 hours ago',
        text: 'finish website design'
      },
      {
        userName: 'Alisa Jones',
        userId: 57492,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '1 day ago',
        text: 'create new task'
      }
    ]
  },
  getters: {
    data(state) {
      return state;
    }
  },
  mutations: {},
  actions: {}
};
