import { handleOpenURL, AppURL } from 'nativescript-urlhandler'
import * as application from 'tns-core-modules/application';
import {isAndroid, isIOS, platformNames} from 'tns-core-modules/platform'
import * as toast from 'nativescript-toast'
import {parseTokenHash} from '@/utils/parsers'

export function registerLoginHandler () {

  handleOpenURL((appUrl: AppURL) => {

    // Close the WebView
    if (isIOS) {
      // Only for IOS
      const controller = application.ios.nativeApp.windows[0].rootViewController;
      controller.dismissViewControllerAnimatedCompletion(true, () => {});
    }
    // For Android, it is automatically closed because of activity intent

    toast.makeText(JSON.stringify(parseTokenHash(appUrl.path))).show()

  })
}