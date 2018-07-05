<template >
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <PullToRefresh @refresh="reloadConferences">
      <ListView id="conference-list" ref="confList" for="conference in conferences">
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
  import store from '@/store'
  import * as HG from '@/models/HasGeekAPI'
  import {PullToRefresh} from 'nativescript-pulltorefresh'
  @Component({
    components: {ConferenceCard}
  })
  export default class Conferences extends Vue {
    get conferences(): HG.Conference[] {
      store.state.hgapi.conferences.forEach((conf:any) => console.log(JSON.stringify(conf.color)))
      return store.state.hgapi.conferences
    }
    async reloadConferences(pullEvent?: {object: PullToRefresh}) {
      await store.dispatch('refreshConferences')
      if (pullEvent) {
        pullEvent.object.refreshing = false
      }
    }
    mounted() {
      if (!this.conferences || this.conferences.length == 0) {
        store.dispatch('loadConferences')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  #conference-list {
    height: 100%;
  }
</style>