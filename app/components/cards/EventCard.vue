<template>
  <CardView @tap="openUrl()" class="event-card" margin="10" elevation="5" radius="1">
    <StackLayout class="event-card-contents" minHeight="200" xmlns="http://schemas.nativescript.org/tns.xsd">
      <Label height="80" textWrap="true" class="title" :text="event.title"></Label>
      <StackLayout orientation="horizontal">
        <Label width="50%" class="details date" :text="new Date(event.start_time).toLocaleDateString('IN')"></Label>
        <Label width="50%" class="details city" :text="event.city"></Label>
      </StackLayout>
      <Label height="100" textWrap="true" class="blurb" :text="event.blurb"></Label>
    </StackLayout>

  </CardView>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {openWebView} from 'nativescript-awesome-webview'
import * as HG from '../../models/HasGeekAPI'

@Component
export default class EventCard extends Vue {
  @Prop(Object) event: HG.Event
  openUrl() {
    if (this.event.url) {
      openWebView({
        url: this.event.url,
        toolbarColor: '#222222'
      })
    }
  }
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