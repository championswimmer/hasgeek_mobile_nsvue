<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="conference-card" margin="10" elevation="5" radius="1">
    <StackLayout class="conference-card-contents">
      <Label :style="{backgroundColor: conference.color.primary.toString()}"
             class="title" textWrap="true" :text="conference.title"></Label>
      <StackLayout class="details" orientation="horizontal">
        <Label width="50%" class="date" :text="new Date(conference.start_time).toLocaleDateString('IN')"></Label>
        <Label width="50%" class="city" :text="conference.city"></Label>
      </StackLayout>
      <Label class="blurb" :text="conference.blurb" textWrap="true"></Label>

    </StackLayout>
  </CardView>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import * as HG from '../../models/HasGeekAPI'

@Component
export default class ConferenceCard extends Vue {
  @Prop(Object) conference: HG.Conference
}
</script>

<style scoped lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  .conference-card {
    padding: 0;
    background-color: #fff;
  }
  .conference-card-contents {
    padding: 0;
    .title {
      padding: 10;
      color: white;
      font-size: 20pt;
      font-weight: 600;
      height: 60;
    }
    .details {
      padding: 10;
      font-size: 14pt;
    }
    .blurb {
      padding: 10;
      color: $grey-dark;
      font-size: 14pt;
      min-height: 100;
    }
  }
</style>