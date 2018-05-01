import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import  Home from '../pages/Home/Home.vue';
import Events from '../pages/Events/Events.vue';
import Conferences from '../pages/Conferences/Conferences.vue'

const router = new VueRouter(<RouterOptions>{
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
        icon: 'mdi-home'
      },
    },
    {
      path: '/events',
      component: Events,
      meta: {
        title: 'Events',
        icon: 'mdi-date-range'
      }
    },
    {
      path: '/conferences',
      component: Conferences,
      meta: {
        title: 'Conferences',
        icon: 'mdi-nature-people'
      }
    },
    {path: '*', redirect: '/home'}
  ],
});

export default router