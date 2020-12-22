import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Workflow from '@/views/Workflow.vue';
import Statistics from '@/views/Statistics.vue';
import Users from '@/views/Users.vue';
import Settings from '@/views/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: Workflow
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
