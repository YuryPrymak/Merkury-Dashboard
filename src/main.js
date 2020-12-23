import Vue from 'vue';
import VueClosable from 'vue-closable';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueClosable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    this.checkNavState();
  },
  methods: {
    checkNavState() {
      const cookieName = 'navState';
      const matches = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=([^;]*)`));
      const navState = matches ? decodeURIComponent(matches[1]) : false;

      this.$store.dispatch('navigation/setNavState', { status: navState });
    }
  },
  render: (h) => h(App)
}).$mount('#app');
