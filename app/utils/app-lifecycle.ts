import * as application from 'tns-core-modules/application'
import {AndroidApplication} from 'tns-core-modules/application'
import {AndroidActivityEventData} from 'tns-core-modules/application'
import {exit} from 'nativescript-exit'
import {isAndroid} from 'tns-core-modules/platform'

const exitOnDestroy = (data: AndroidActivityEventData) => exit()

export function registerExitOnDestroy() {
  if (isAndroid) {
    application.android.on(
      AndroidApplication.activityDestroyedEvent,
      exitOnDestroy
    )
  }
}

export function unregisterExitOnDestroy() {
 if (isAndroid) {
   application.android.off(AndroidApplication.activityDestroyedEvent)
 }
}