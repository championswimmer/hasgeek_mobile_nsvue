<template>
  <StackLayout padding="8">
    <CardView class="venue-card" elevation="5" radius="3">
      <StackLayout>
        <Label :text="venue.title"></Label>
        <Label :text="venue.city"></Label>
        <Button @tap="openMap()" class="mdi" :text="'mdi-directions' | fonticon">
        </Button>
      </StackLayout>
    </CardView>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import { Component, Prop } from 'vue-property-decorator'
  import * as TF from '../../models/TalkFunnelAPI'
  import { openUrl } from 'tns-core-modules/utils/utils'
  import { Log } from '@/utils/log'

  @Component({})
  export default class VenueCard extends Vue {
    @Prop() venue: TF.Venue

    openMap() {
      openUrl(`http://maps.google.com?q=${this.venue.title}, ${this.venue.city}`.split(' ').join('+'))
    }
  }

</script>

<style lang="scss" scoped>
  .venue-card {
    background-color: white;
    padding: 10;

    StackLayout {
      padding: 5
    }
  }
</style>