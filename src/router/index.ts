import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import  Home from '../pages/home/Home.vue';
import Events from '../pages/events/Events.vue';
import Conferences from '../pages/conferences/Conferences.vue'
import Conference from '../pages/conferences/Conference.vue'
import Contacts from '../pages/conferences/conference/Contacts.vue'
import ContactScanner from '../pages/conferences/conference/ContactScanner.vue'


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
    {
      path: '/conferences/:confId',
      component: Conference,
      meta: {
        title: 'Conference',
        icon: 'mdi-nature-people'
      },
      children: [
        {path: '', redirect: 'info'},
        {
          path: 'info',
          component: ContactScanner,
          meta: {
            title: 'Information'
          }
        },
        {
          path: 'schedule',
          meta: {
            title: 'Schedule'
          }
        },
        {
          path: 'contacts',
          component: Contacts,
          meta: {
            title: 'Contacts'
          }
        },
      ]
    },
    {path: '*', redirect: '/home'}
  ],
});

export default router