import Vue from 'nativescript-vue';
import Vuex, {Module} from 'vuex';

import {createConnection} from 'typeorm/browser'

import * as HG from '@/models/HasGeekAPI'
import * as TF from '@/models/TalkFunnelAPI'
import hgapi from './modules/HGAPIModule'

Vue.use(Vuex);

createConnection({
  database: 'hasgeek.db',
  type: 'nativescript',
  logging: true,
  entities: [
    HG.Event, HG.Conference,
    TF.Space, TF.Venue, TF.Room, TF.Proposal
  ]
}).then((connection) => connection.synchronize(false))
  .catch(console.error)

const store = new Vuex.Store({
  state: {},
  modules: {
    hgapi,
  }
});

export default store

