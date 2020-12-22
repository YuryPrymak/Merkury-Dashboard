export default {
  namespaced: true,
  state: {
    totalUsers: 10,
    users: [
      {
        userName: 'John Jones',
        userId: 49572,
        userPhoto: 'users/default-user-photo.png',
        time: '5 minutes ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Alex Brown',
        userId: 49548,
        userPhoto: 'users/default-user-photo.png',
        time: 'Online now!',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: true
      },
      {
        userName: 'Alisa Parker',
        userId: 46646,
        userPhoto: 'users/default-user-photo.png',
        time: '1 hour ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Sam Vilson',
        userId: 86578,
        userPhoto: 'users/default-user-photo.png',
        time: 'Online now!',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: true
      },
      {
        userName: 'Sarah Jones',
        userId: 94668,
        userPhoto: 'users/default-user-photo.png',
        time: '2 days ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Davis Thomas',
        userId: 34689,
        userPhoto: 'users/default-user-photo.png',
        time: '7 hours ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Jessica Skott',
        userId: 74753,
        userPhoto: 'users/default-user-photo.png',
        time: '1 day ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Clark Lee',
        userId: 58883,
        userPhoto: 'users/default-user-photo.png',
        time: 'Online now!',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: true
      },
      {
        userName: 'Nelson king',
        userId: 33574,
        userPhoto: 'users/default-user-photo.png',
        time: '10 minutes ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      },
      {
        userName: 'Diaz Colins',
        userId: 74223,
        userPhoto: 'users/default-user-photo.png',
        time: '53 minutes ago',
        email: 'usermail@site.com',
        phone: '(000) 111 222 333',
        online: false
      }
    ]
  },
  getters: {
    users(state) {
      return state.users;
    },
    totalUsers(state) {
      return state.totalUsers;
    }
  },
  mutations: {
  },
  actions: {
  }
};
