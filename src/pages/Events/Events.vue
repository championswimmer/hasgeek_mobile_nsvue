<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <ListView id="event-list" ref="eventList" for="event in events">
      <v-template>
        <CardView class="event-card" margin="8" elevation="5" radius="1">
          <StackLayout class="event-card-contents">
            <Label class="title" textWrap="true" :text="event.title"></Label>
            <StackLayout class="details" orientation="horizontal">
              <Label width="50%" class="date" :text="new Date(event.start_time).toLocaleDateString('IN')"></Label>
              <Label width="50%" class="city" :text="event.city"></Label>
            </StackLayout>
            <Label class="blurb" :text="event.blurb" textWrap="true"></Label>

          </StackLayout>
        </CardView>
      </v-template>
    </ListView>
  </StackLayout>
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

<style lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  #event-list {
    height: 100%;
  }
  .event-card {
    background-color: #fff;
  }
  .event-card-contents {
    padding: 20;

    .title {
      color: $hg-purple;
      font-size: 20pt;
      font-weight: 600;
    }
    .details {
      padding: 5;
      font-size: 14pt;
    }
    .blurb {
      padding: 5;
      color: $grey-dark;
      font-size: 14pt;
    }
  }
</style>