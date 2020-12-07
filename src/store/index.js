import Vue from 'vue';
import Vuex from 'vuex';

import navigation from '@/store/modules/navigation';
import widgetSales from '@/store/modules/widgets/sales';
import widgetUserActivity from '@/store/modules/widgets/user-activity';
import widgetTasks from '@/store/modules/widgets/tasks';
import widgetMessages from '@/store/modules/widgets/messages';
import widgetActivity from '@/store/modules/widgets/activity';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigation,
    widgetSales,
    widgetUserActivity,
    widgetTasks,
    widgetMessages,
    widgetActivity
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
});
