<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <PullToRefresh id="refresh" @refresh="reloadEvents">
      <ListView rowHeight="200" id="event-list" separatorColor="transparent" ref="eventList" for="event in events">
        <v-template>
          <EventCard @tap="openEvent(event)" :event="event"></EventCard>
        </v-template>
      </ListView>
    </PullToRefresh>

  </StackLayout>
</template>
<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import {Event} from '@/models/HasGeekAPI'
  import EventCard from '@/components/cards/EventCard'
  import hgapi from '@/store/modules/HGAPIModule'
  import {PullToRefresh} from 'nativescript-pulltorefresh'
  import {openWebView} from 'nativescript-awesome-webview'
  @Component({
    components: {EventCard}
  })
  export default class Events extends Vue {
    openEvent(event: Event) {
      openWebView({url: event.url})
    }
    get events(): Event[] {
      return hgapi.events
    }
    async reloadEvents(pullEvent?: {object: PullToRefresh}) {
      await hgapi.refreshEvents()
      if (pullEvent) {
        pullEvent.object.refreshing = false
      }
    }
    async created() {
      if (!this.events || this.events.length == 0) {
        await hgapi.loadEvents()
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  #event-list {
    height: 100%;
    separator-color: transparent;
  }
  #refresh {
    color: $hg-orange;
  }
</style>