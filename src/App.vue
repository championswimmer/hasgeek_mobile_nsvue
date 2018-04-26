<template>
  <Page class="page" xmlns="http://schemas.nativescript.org/tns.xsd">
    <ActionBar android.systemIcon="ic_menu_back" class="action-bar" title="Home">
      <NavigationButton
          v-if="$isAndroid"
          text="Go Back"
          icon="res://ic_menu_white_24dp"
          @tap="$refs.drawer.nativeView.showDrawer()"/>
      <ActionItem
          v-else
          text="Menu"
          ios.position="left"
          icon="res://ic_menu"
          @tap="$refs.drawer.nativeView.showDrawer()"/>
    </ActionBar>

    <RadSideDrawer id="drawer" ref="drawer" showOverNavigation="true">
      <StackLayout class="drawer-content" background="white" ~drawerContent>
        <StackLayout class="sidedrawer-header" background="#E27834"></StackLayout>
        <ListView for="item in topNavItems">
          <v-template>
            <StackLayout @tap="goToPage(item.page)" orientation="horizontal" class="sidedrawer-list-group">
              <Label class="mdi" >{{fonticon(item.icon)}}</Label>
              <Label :text="item.text"></Label>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
      <StackLayout ~mainContent>
        <router-view/>
      </StackLayout>
    </RadSideDrawer>

  </Page>
</template>
<script>
  import {fonticon} from 'nativescript-fonticon'
  export default {
    data() {return {
      topNavItems: [
        {icon: 'mdi-date-range', text: 'Events', page: 'events'},
        {icon: 'mdi-nature-people', text: 'Conferences', page: 'conferences'}
      ]
    }},
    methods: {
      fonticon(icName) {
        try {return fonticon(icName)}
        catch (e) {return ''}
      },
      goToPage(page) {
        this.$router.push(page)
        this.$refs.drawer.nativeView.closeDrawer()
      }
    },
    mounted () {
      // Add shadow to iOS Drawer
      let _drawer = this.$refs.drawer
      if(_drawer._nativeView.ios)  {
        const ios = _drawer._nativeView.ios
        // .. but if the menu is drawn 'above' the hostview, do this:
        ios.defaultSideDrawer.style.shadowMode = 2; // TKSideDrawerShadowMode.SideDrawer;
        // if you have shadowMode = 2, then you can add a little dim to the lower layer to add some depth. Keep it subtle though:
        ios.defaultSideDrawer.style.dimOpacity = 0.12;

        // then tweak the shadow to your liking:
        ios.defaultSideDrawer.style.shadowOpacity = 0.75; // 0-1, higher is darker
        ios.defaultSideDrawer.style.shadowRadius = 5; // higher is more spread

      }
    }

  }
</script>
<style lang="scss">
  #drawer > StackLayout {
    height: 100%;
  }
  .sidedrawer-list-group {
  }
  #drawer Label {
    padding-left: 20;
    padding-top: 10;
  }
</style>