import Vue = require('nativescript-vue')
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { isAndroid, isIOS } from 'tns-core-modules/platform';

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.registerElement('RadSideDrawer', () => RadSideDrawer)

import router = require('./router')

import store = require('./store')

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
