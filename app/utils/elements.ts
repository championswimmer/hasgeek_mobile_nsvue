import {CardView} from 'nativescript-cardview'
import * as Vue from "nativescript-vue"
import {PullToRefresh} from 'nativescript-pulltorefresh'
import {RadSideDrawer} from 'nativescript-ui-sidedrawer'
import {BottomNavigation, BottomNavigationTab} from 'nativescript-bottom-navigation'
import {Fab} from 'nativescript-floatingactionbutton'
import {ActivityIndicator} from 'tns-core-modules/ui/activity-indicator'

export function registerRequiredElements() {
  Vue.registerElement('RadSideDrawer', () => RadSideDrawer)
  Vue.registerElement('CardView', () => CardView)
  Vue.registerElement('PullToRefresh', () => PullToRefresh)
  Vue.registerElement('BottomNavigation', () => BottomNavigation)
  Vue.registerElement('BottomNavigationTab', () => BottomNavigationTab)
  Vue.registerElement('Fab', () => Fab)
  // Vue.registerElement('ActivityIndicator', () => ActivityIndicator)
}