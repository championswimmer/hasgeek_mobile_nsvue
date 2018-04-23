<template>
  <Page class="page">
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
              @tap="$refs.drawer.nativeView.showDrawer()" />
    </ActionBar>

    <RadSideDrawer id="drawer" ref="drawer" showOverNavigation="true">
      <StackLayout class="drawer-content"  background="white" ~drawerContent>
        <StackLayout class="sidedrawer-header" background="#E27834"></StackLayout>
        <StackLayout >
          <Label class="sidedrawer-list-item" @tap="$router.push('/home/events')" >Events</Label>
          <Label class="sidedrawer-list-item">Conferences</Label>
          <Label class="sidedrawer-list-item">Talkfunnel</Label>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <router-view></router-view>
      </StackLayout>
    </RadSideDrawer>

  </Page>
</template>
<script ios>
  export default {

    mounted: function () {
      // Add shadow to iOS Drawer
      if(this.$refs.drawer._nativeView.ios)  {
        const ios = this.$refs.drawer._nativeView.ios
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
<style scoped lang="scss">
  #drawer > StackLayout {
    height: 100%;
  }
  .sidedrawer-list-item {
    padding-left: 10;
  }
  #drawer Label {
    padding-left: 20;
    padding-top: 10;
  }

</style>