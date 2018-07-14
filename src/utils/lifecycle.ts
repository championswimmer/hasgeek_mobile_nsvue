import * as application from 'tns-core-modules/application'
import {AndroidApplication} from 'tns-core-modules/application'
import {AndroidActivityEventData} from 'tns-core-modules/application'
import {exit} from 'nativescript-exit'

const exitOnDestroy = (data: AndroidActivityEventData) => exit()

export function registerExitOnDestroy() {
  application.android.on(
    AndroidApplication.activityDestroyedEvent,
    exitOnDestroy
  )
}

export function unregisterExitOnDestroy() {
  application.android.off(AndroidApplication.activityDestroyedEvent)
}