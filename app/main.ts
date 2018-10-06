import Vue from 'nativescript-vue'
import {isAndroid, isIOS} from 'tns-core-modules/platform'
import * as application from 'tns-core-modules/application'
import {
  AndroidActivityBackPressedEventData,
  AndroidActivityEventData,
  AndroidApplication,
  ApplicationEventData
} from 'tns-core-modules/application'
import {sync} from 'vuex-router-sync'

import 'nativescript-platform-css'
import './styles.scss'
import App from './App.vue'
import { fonticon, TNSFontIcon } from 'nativescript-fonticon'
import {exit} from 'nativescript-exit'

import router from '@/router'
import store from '@/store/index'
import {registerRequiredElements} from '@/utils/elements'
import {registerLoginHandler} from '@/utils/login'
import {registerExitOnDestroy} from '@/utils/app-lifecycle'

// Prints all icon classes loaded
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'mdi': './assets/material-design-icons.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

Vue.prototype.$isAndroid = isAndroid
Vue.prototype.$isIOS = isIOS

// Login call back url 'talkfunnel://xxxx' type
registerLoginHandler()

// Register custom elements as Vue components
registerRequiredElements()

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false
sync(store, router)
router.replace('/home')


new Vue({
  router,
  store,
  render: h => h('frame', [h(App)])
}).$start()

/*
 * Force an exit, instead of trying to remount
 * FIXME: On upgrade to nativescript-vue 2.x this wont be necessary
 */
application.on(application.exitEvent, (args: ApplicationEventData) => exit())

/*
 * Go back if in a nested route. If top level route, just do what android does
 */
if (application.android) {

  /*
   * Force exit even when stopped
   * FIXME: On upgrade to nativescript-vue 2.x this wont be necessary
   */
  registerExitOnDestroy()

  application.android.on(
    'activityBackPressed',
    (data: AndroidActivityBackPressedEventData) => {
      if (router.currentRoute.path.split('/').length > 2) {
        router.back()
        data.cancel = true
      } else {
        exit()
      }
    }
  )
}
