import Vue from 'nativescript-vue';
import Vuex, {Module} from 'vuex'

import counter from './modules/Counter2';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter
  },
});

Vue.prototype.$store = store;

export default store