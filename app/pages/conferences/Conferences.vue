<template >
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <PullToRefresh id="refresh" @refresh="reloadConferences">
      <ListView id="conference-list"
                separatorColor="transparent"
                ref="confList"
                for="conference in conferences">
        <v-template>
          <ConferenceCard :conference="conference"></ConferenceCard>
        </v-template>
      </ListView>
    </PullToRefresh>

  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import ConferenceCard from '../../components/cards/ConferenceCard'
  import hgapi from '@/store/modules/HGAPIModule'
  import * as HG from '@/models/HasGeekAPI'
  import {PullToRefresh} from 'nativescript-pulltorefresh'
  import {ListView} from 'tns-core-modules/ui/list-view'
  @Component({
    components: {ConferenceCard}
  })
  export default class Conferences extends Vue {
    get conferences(): HG.Conference[] {
      return hgapi.conferences
    }
    async reloadConferences(pullEvent?: {object: PullToRefresh}) {
      await hgapi.refreshConferences()
      if (pullEvent) {
        pullEvent.object.refreshing = false
      }
    }
    created () {
      if (!this.conferences || this.conferences.length == 0) {
        hgapi.loadConferences()
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  #conference-list {
    height: 100%;
    separator-color: transparent;
  }
  #refresh {
    color: $hg-orange;
  }
</style>