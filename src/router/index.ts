import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import {default as Home} from '../pages/Home/Home.vue';
import Events from '../pages/Events/Events.vue';

const router = new VueRouter(<RouterOptions>{
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home'
      },
    },
    {
      path: '/events',
      component: Events,
    },
    {path: '*', redirect: '/home'}
  ],
});

router.replace('/home');

export default router