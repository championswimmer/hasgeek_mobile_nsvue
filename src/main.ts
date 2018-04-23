import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import {NavigationButton} from 'tns-core-modules/ui/action-bar'
import { isAndroid, isIOS } from 'tns-core-modules/platform';

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.registerElement('RadSideDrawer', () => RadSideDrawer)
Vue.registerElement('NavigationButton', () => NavigationButton)

import router from './router'

import * as store from './store'

import './styles.scss';
import {Store} from 'vuex'

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
  router,
  store: <Store<any>>store,
}).$start();
