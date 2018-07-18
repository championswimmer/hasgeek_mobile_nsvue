<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <PullToRefresh id="refresh" @refresh="reloadEvents">
      <ListView id="event-list" separatorColor="transparent" ref="eventList" for="event in events">
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
  import store from '@/store'
  import {PullToRefresh} from 'nativescript-pulltorefresh'
  import {openAdvancedUrl} from 'nativescript-advanced-webview'
  @Component({
    components: {EventCard}
  })
  export default class Events extends Vue {
    openEvent(event: Event) {
      openAdvancedUrl({url: event.url})
    }
    get events(): Event[] {
      return store.state.hgapi.events
    }
    async reloadEvents(pullEvent?: {object: PullToRefresh}) {
      await store.dispatch('refreshEvents')
      if (pullEvent) {
        pullEvent.object.refreshing = false
      }
    }
    async created() {
      if (!this.events || this.events.length == 0) {
        await store.dispatch('loadEvents')
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