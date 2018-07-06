<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="event-card" margin="10" elevation="5" radius="1">
    <StackLayout class="event-card-contents">
      <Label class="title" textWrap="true" :text="event.title"></Label>
      <StackLayout class="details" orientation="horizontal">
        <Label width="50%" class="date" :text="new Date(event.start_time).toLocaleDateString('IN')"></Label>
        <Label width="50%" class="city" :text="event.city"></Label>
      </StackLayout>
      <Label class="blurb" :text="event.blurb" textWrap="true"></Label>

    </StackLayout>
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