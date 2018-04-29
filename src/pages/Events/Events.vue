<template xmlns="http://schemas.nativescript.org/tns.xsd">
  <ListView ref="eventList" for="event in events">
    <v-template>
      <Label :text="event.title"></Label>
    </v-template>
  </ListView>
</template>
<script lang="ts">
  import {getJSON} from 'tns-core-modules/http'
  import Vue, {ComponentOptions} from 'vue'
  import {EventsEntity} from '../../models/HasGeekAPI'
  import store from '../../store'
  interface IEvent extends Vue {
    events: Array<EventsEntity>
    loadEvents(): never
  }

  export default <ComponentOptions<IEvent>>{
    data() {
      return {
        wow: 'OMGWOW'
      }
    },
    computed: {
      events () {
        return store.state.hgapi.events
      }
    },
    methods: {
      loadEvents() {
        store.dispatch('fetchEvents')
      }
    },
    mounted(this: IEvent) {
      this.loadEvents()
    }
  }
</script>