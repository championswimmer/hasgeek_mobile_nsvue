import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import Home from '../components/Home.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Counter from '../components/Counter.vue';
import Events from '../components/pages/Events.vue';

const router = new VueRouter(<RouterOptions>{
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/events',
      component: Events,
      meta: {
        title: 'Events'
      }
    },
    {
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

export default router