export default {
  namespaced: true,
  state: {
    title: 'Messages',
    data: [
      {
        userName: 'John Jones',
        userId: 49572,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '5 minutes ago',
        lastMessage: 'Hello! It\'s me again :) I attached new web site design. Please check it.',
        haveNewMessages: true
      },
      {
        userName: 'Sarah Miller',
        userId: 59024,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: 'About 5 hours ago',
        lastMessage: 'Hi! Should i come up with website homepage design by myself?',
        haveNewMessages: true
      },
      {
        userName: 'Mia Jackson',
        userId: 96513,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '1 day ago',
        lastMessage: 'Hello, how are you doing?',
        haveNewMessages: false
      },
      {
        userName: 'Alex Lewis',
        userId: 38462,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: '3 days ago',
        lastMessage: 'I\'ve done my work',
        haveNewMessages: false
      },
      {
        userName: 'Clark Baker',
        userId: 11304,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: 'About 1 week ago',
        lastMessage: 'Hi!',
        haveNewMessages: false
      },
      {
        userName: 'Robert Carter',
        userId: 95777,
        userPhoto: 'widgets/messages/default-user-photo.png',
        time: 'About 1 week ago',
        lastMessage: 'Good morning! Would you like some coffee?',
        haveNewMessages: false
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
