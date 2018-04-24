import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import Home from '../components/Home.vue';
import Events from '../components/pages/Events.vue';

const router = new VueRouter(<RouterOptions>{
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home'
      },
      children: [
        {path: 'events', component: Events},
      ]
    },
    {path: '*', redirect: '/home'}
  ],
});

router.replace('/home');

export default router