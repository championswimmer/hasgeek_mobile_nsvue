import Vue from 'nativescript-vue';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { isAndroid, isIOS } from 'tns-core-modules/platform';

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.registerElement('RadSideDrawer', () => RadSideDrawer)

import router from './router';

import store from './store';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
