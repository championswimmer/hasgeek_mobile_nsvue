import Vue from 'nativescript-vue';
import Vuex, {Module} from 'vuex'

import counter from './modules/Counter2';
import hgapi from './modules/HGAPIModule'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
    hgapi
  },
});

Vue.prototype.$store = store;

export default store