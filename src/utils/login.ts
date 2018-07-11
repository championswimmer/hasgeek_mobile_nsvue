import { handleOpenURL, AppURL } from 'nativescript-urlhandler'
import * as application from 'tns-core-modules/application';
import { isAndroid, isIOS } from 'tns-core-modules/platform';

export function registerLoginHandler () {

  handleOpenURL((appUrl: AppURL) => {
    console.log(appUrl)

    // Close the WebView
    if (isIOS) {
      // Only for IOS
      const controller = application.ios.nativeApp.windows[0].rootViewController;
      controller.dismissViewControllerAnimatedCompletion(true, () => {
        console.log('Login completed, Closing Safari')
      });
    }

    if (isAndroid) {
      // TODO: Close the webview in android too
    }
  })
}