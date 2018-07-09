<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="event-card" margin="10" elevation="5" radius="1">
    <GridLayout columns="*,*" rows="auto,auto,auto" class="event-card-contents">
      <Label row="0" col="0" colSpan="2" class="title" textWrap="true" :text="event.title"></Label>
      <Label row="1" col="0" class="details date" :text="new Date(event.start_time).toLocaleDateString('IN')"></Label>
      <Label row="1" col="1" class="details city" :text="event.city"></Label>
      <Label row="2" col="0" colSpan="2" class="blurb" :text="event.blurb" textWrap="true"></Label>
    </GridLayout>
  </CardView>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import * as HG from '../../models/HasGeekAPI'

@Component
export default class EventCard extends Vue {
  @Prop(Object) event: HG.Event
}
</script>

<style scoped lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  .event-card {
    background-color: #fff;
  }
  .event-card-contents {
    padding: 10;
    height: auto;
    .title {
      padding: 5;
      color: $hg-purple;
      font-size: 20pt;
      font-weight: 600;
      height: auto;
    }
    .details {
      padding: 5;
      font-size: 14pt;
    }
    .blurb {
      padding: 5;
      color: $grey-dark;
      font-size: 14pt;
      height: auto;
    }
  }
</style>

<style scoped ios>
  .event-card-contents Label {
    min-height: 30;
  }
</style>