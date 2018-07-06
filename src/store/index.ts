import Vue from 'nativescript-vue';
import Vuex, {Module} from 'vuex'

import {createConnection} from 'typeorm/browser'

import * as HG from '@/models/HasGeekAPI'
import counter from './modules/Counter2';
import hgapi from './modules/HGAPIModule'

Vue.use(Vuex);

createConnection({
  database: 'hasgeek.db',
  type: 'nativescript',
  logging: true,
  entities: [
    HG.Event, HG.Conference
  ]
}).then((connection) => connection.synchronize(false))
  .catch(console.error)

const store = new Vuex.Store({
  state: {},
  modules: {
    counter,
    hgapi
  }
});
Vue.prototype.$store = store;

export default store