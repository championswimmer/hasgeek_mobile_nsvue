import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import router from './router'
import store from './store/index'

import './styles.scss';
import {Store} from 'vuex'
import App from './App.vue'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';

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

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$start();
