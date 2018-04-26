<template xmlns="http://schemas.nativescript.org/tns.xsd">
  <ListView ref="eventList" for="event in events">
    <v-template>
      <Label :text="event.title"></Label>
    </v-template>
  </ListView>
</template>
<script lang="ts">
  import {getJSON} from 'tns-core-modules/http'

  export default {
    data() {
      return {
        wow: 'OMGWOW',
        events: [{title:'Loading . . .'}]
      }
    },
    methods: {
      loadEvents() {
      }
    },
    mounted() {
      getJSON('https://hasgeek.github.io/events/api/events.json').then((response: any) => {
        this.events = response.events
        console.log(this.events)
        console.log(this.$refs.eventList)
        // this.$refs.eventList.refresh()
      })
    }
  }
</script>