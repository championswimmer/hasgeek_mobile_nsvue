import Vue from 'nativescript-vue'
import { isAndroid, isIOS } from 'tns-core-modules/platform';
import * as application from 'tns-core-modules/application'
import router from './router'
import store from './store/index'
import {sync} from 'vuex-router-sync'

import './styles.scss';
import {Store} from 'vuex'
import App from './App.vue'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
import {
  AndroidActivityBackPressedEventData,
  AndroidApplication,
  ApplicationEventData
} from 'tns-core-modules/application'
import {exit} from 'nativescript-exit'
import {registerRequiredElements} from '@/utils/elements'

// Prints all icon classes loaded
// TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'mdi': './material-design-icons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);

Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isIOS = isIOS;

registerRequiredElements()

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

/*
 * Go back if in a nested route. If top level route, just do what android does
 */
if (application.android) {
  application.android.on(
    AndroidApplication.activityBackPressedEvent,
    (data: AndroidActivityBackPressedEventData) => {
      if (router.currentRoute.path.split('/').length > 2) {
        router.back()
        data.cancel = true
      }
    }
  )
}