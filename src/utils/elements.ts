import {CardView} from 'nativescript-cardview'
import Vue from "nativescript-vue"
import {PullToRefresh} from 'nativescript-pulltorefresh'
import {RadSideDrawer} from 'nativescript-ui-sidedrawer'
import {BottomNavigation, BottomNavigationTab} from 'nativescript-bottom-navigation'

export function registerRequiredElements() {
  Vue.registerElement('RadSideDrawer', () => RadSideDrawer)
  Vue.registerElement('CardView', () => CardView)
  Vue.registerElement('PullToRefresh', () => PullToRefresh)
  Vue.registerElement('BottomNavigation', () => BottomNavigation)
  Vue.registerElement('BottomNavigationTab', () => BottomNavigationTab)
}