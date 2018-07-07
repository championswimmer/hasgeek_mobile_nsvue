import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { PullToRefresh } from 'nativescript-pulltorefresh'
import { CardView } from 'nativescript-cardview'
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import * as application from 'tns-core-modules/application'
import router from './router'
import store from './store/index'
import {sync} from 'vuex-router-sync'

import './styles.scss';
import {Store} from 'vuex'
import App from './App.vue'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import {ApplicationEventData} from 'tns-core-modules/application'
import {exit} from 'nativescript-exit'

// Prints all icon classes loaded
// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'mdi': './material-design-icons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.registerElement('RadSideDrawer', () => RadSideDrawer)
Vue.registerElement('CardView', () => CardView)
Vue.registerElement('PullToRefresh', () => PullToRefresh)

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;
sync(store, router)
router.replace('/home');

new Vue({
  router,
  store,
  render: h => h(App)
}).$start();

/*
 * Force an exit, instead of trying to remount
 * FIXME: On upgrade to nativescript-vue 2.x this wont be necessary
 */
application.on(application.exitEvent, (args: ApplicationEventData) => {
  exit()
})