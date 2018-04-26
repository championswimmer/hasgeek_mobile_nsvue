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
  interface IEvent extends Vue {
    events: Array<any>
    loadEvents(): never
  }

  export default <ComponentOptions<IEvent>>{
    data() {
      return {
        wow: 'OMGWOW',
        events: [{title:'Loading . . .'}]
      }
    },
    methods: {
      loadEvents() {
        getJSON('https://hasgeek.github.io/events/api/events.json').then((response: any) => {
          this.events = response.events
          // this.$refs.eventList.refresh()
        })
      }
    },
    mounted() {
      this.loadEvents()
    }
  }
</script>