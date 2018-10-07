<template>
  <StackLayout height="900" padding="5">
    <CardView height="100%" class="event-card" elevation="5" radius="3">
      <StackLayout height="100%" class="event-card-contents" xmlns="http://schemas.nativescript.org/tns.xsd">
        <Label height="25%" textWrap="true" class="title" :text="event.title"></Label>
        <Label height="40%" textWrap="true" class="blurb" :text="event.blurb"></Label>
        <StackLayout orientation="horizontal">
          <Label width="40%" class="details date" :text="new Date(event.start_time).toLocaleDateString('IN')"></Label>
          <Label width="30%" class="details city" :text="event.city"></Label>
          <Button width="10%" @tap="openMap()" class="mdi links" :text="'mdi-map-marker-radius' | fonticon"></Button>
          <Button width="10%" @tap="openUrl()" class="mdi links" :text="'mdi-open-in-new' | fonticon"></Button>
        </StackLayout>
      </StackLayout>

    </CardView>
  </StackLayout>

</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import {openWebView} from 'nativescript-awesome-webview'
import * as HG from '../../models/HasGeekAPI'
import { openUrl } from 'tns-core-modules/utils/utils'

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
  openMap() {
    if (this.event.google_maps_link) {
      openWebView({
        url: this.event.google_maps_link,
        toolbarColor: '#222222'
      })
    } else {
      openUrl(`maps://?q=${this.event.city}`)
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
    .title {
      padding: 5;
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
    .links {
      background-color: $hg-purple;
      color: white;
      font-weight: 900;
      font-size: 18pt;
      border-radius: 3;
      height: auto;
      width: auto;
      padding: 5;
      margin: 5;
    }
  }

</style>
