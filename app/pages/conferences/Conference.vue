<template>
  <GridLayout id="conference-component" xmlns="http://schemas.nativescript.org/tns.xsd" rows="*, auto">
    <router-view></router-view>
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
  import {OnTabSelectedEventData} from 'nativescript-bottom-navigation'
  import * as HG from '@/models/HasGeekAPI'
  import funnelSpace from '@/store/modules/TalkFunnelSpace'

  @Component({})
  export default class Conference extends Vue {
    confId = ''
    conference: HG.Conference = null
    async created() {
      this.confId = this.$route.params['confId']
      console.log(this.confId)
      this.conference = await HG.Conference.findOne(this.confId) as HG.Conference
      console.log(this.conference.funnel)
      await funnelSpace.fetchTalkFunnelSpace(this.conference.funnel)
    }

    getBottomBarPage(index: number) {
      switch(index) {
        case 0: return 'info'
        case 1: return 'schedule'
        case 2: return 'contacts'
        default: return 'info'
      }
    }
    onTabSelected(event: OnTabSelectedEventData) {
      console.log(this.$route.params['confId'])
      console.log(event.newIndex)
      this.$router.replace(`/conferences/${this.confId}/${this.getBottomBarPage(event.newIndex)}`)
    }
  }
</script>
<style lang="scss" scoped>

</style>