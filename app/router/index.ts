import Vue from 'nativescript-vue'
import VueRouter, {RouterOptions} from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/home/Home.vue';
import Events from '../pages/events/Events.vue';
import Conferences from '../pages/conferences/Conferences.vue'
import Conference from '../pages/conferences/Conference.vue'
import Contacts from '../pages/conferences/conference/Contacts.vue'
import Info from '../pages/conferences/conference/Info.vue'
import Schedule from '../pages/conferences/conference/Schedule.vue'


const router = new VueRouter(<RouterOptions>{
  routes: [
    {
      path: '/home',
      name:'home',
      component: Home,
      meta: {
        title: 'Home',
        icon: 'mdi-home'
      },
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        title: 'Events',
        icon: 'mdi-calendar-multiselect'
      }
    },
    {
      path: '/conferences',
      name: 'conferences',
      component: Conferences,
      meta: {
        title: 'Conferences',
        icon: 'mdi-account-group'
      }
    },
    {
      path: '/conferences/:confId',
      component: Conference,
      meta: {
        title: 'Conference',
        icon: 'mdi-account-group'
      },
      children: [
        {
          path: 'info',
          name: 'conferences_confId_info',
          component: Info,
          meta: {
            title: 'Information'
          }
        },
        {
          path: 'schedule',
          name: 'conferences_confId_schedule',
          component: Schedule,
          meta: {
            title: 'Schedule'
          }
        },
        {
          path: 'contacts',
          name: 'conferences_confId_contacts',
          component: Contacts,
          meta: {
            title: 'Contacts'
          }
        },
        // { path: '*', redirect: 'info'}
      ]
    },
    {path: '*', redirect: '/home'}
  ],
});

export default router