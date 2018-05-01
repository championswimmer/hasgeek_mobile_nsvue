<template xmlns="http://schemas.nativescript.org/tns.xsd">
  <ListView ref="eventList" for="event in events">
    <v-template>
      <Label :text="event.title"></Label>
    </v-template>
  </ListView>
</template>
<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'
  import {EventsEntity} from '@/models/HasGeekAPI'
  import store from '@/store'
  @Component
  export default class Events extends Vue {
    get events(): EventsEntity[] {
      return store.state.hgapi.events
    }
    loadEvents() {
      store.dispatch('fetchAll')
    }
    mounted() {
      this.loadEvents()
    }
  }
</script>