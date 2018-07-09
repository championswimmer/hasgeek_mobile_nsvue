<template>
  <GridLayout xmlns="http://schemas.nativescript.org/tns.xsd" rows="*, auto">
    <StackLayout row="0">
      <Label :text="$route.params.id"></Label>
    </StackLayout>
    <BottomNavigation activeColor="#df5e0e"
                      inactiveColor="#816894"
                      backgroundColor="white"
                      keyLineColor="#816894"
                      @tabSelected="onTabSelected($event)"
                      row="1">
      <BottomNavigationTab title="Info" icon="ic_info"></BottomNavigationTab>
      <BottomNavigationTab title="Schedule" icon="ic_schedule"></BottomNavigationTab>
      <BottomNavigationTab title="Contacts" icon="user_group"></BottomNavigationTab>
    </BottomNavigation>
  </GridLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'

  @Component({})
  export default class Conference extends Vue {
    onTabSelected(event: Event) {
      console.log(event)
    }
  }
</script>
<style>

</style>