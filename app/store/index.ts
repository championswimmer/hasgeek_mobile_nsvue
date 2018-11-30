import Vue from 'nativescript-vue';
import Vuex, {Module} from 'vuex';

import { createConnection, Logger } from 'typeorm/browser'

import * as HG from '@/models/HasGeekAPI'
import * as TF from '@/models/TalkFunnelAPI'

Vue.use(Vuex);

createConnection({
  database: 'hasgeek.db',
  type: 'nativescript',
  logging: true,
  entities: [
    HG.Event, HG.Conference,
    TF.Space, TF.Venue, TF.Room,
    TF.Proposal, TF.Slot,
    TF.Schedule
  ]
}).then((connection) => connection.synchronize(true))
  .catch(console.error)

const store = new Vuex.Store({});

export default store

