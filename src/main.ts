import Vue from 'nativescript-vue'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import App from './App.vue'

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

Vue.registerElement('RadSideDrawer', () => RadSideDrawer)
import router from './router'
import * as store from './store'

import './styles.scss';
import {Store} from 'vuex'

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({
  router,
  store: <Store<any>>store,
  render: h => h(App)
}).$start();
