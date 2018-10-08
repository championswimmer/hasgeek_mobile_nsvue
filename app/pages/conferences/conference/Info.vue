<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label class="title" :text="title" textWrap="true"></Label>
    <Label class="subtitle" :text="subtitle" textWrap="true"></Label>
    <VenueCard v-for="venue in venues" :key="venue.name" :venue="venue"></VenueCard>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import { Log } from '@/utils/log'
  import {Component} from 'vue-property-decorator'
  import funnelSpace from '@/store/modules/TalkFunnelSpace'

  import VenueCard from '@/components/cards/VenueCard.vue'
  import * as TF from '../../../models/TalkFunnelAPI'

  @Component({
    components: { VenueCard }
  })
  export default class Info extends Vue {
    confId = ''

    get title () {
      return funnelSpace.currentSpace.title
    }
    get subtitle () {
      return funnelSpace.currentSpace.datelocation
    }

    get venues ()  {
      return funnelSpace.venues
    }


    mounted () {
      this.confId = this.$route.params['confId']
      Log.d(this.confId)

    }

  }
</script>
<style lang="scss" scoped>
  @import '../../../styles/hasgeek';
  .title {
    color: $hg-orange;
    font-size: 24pt;
    font-weight: 900;
    margin: 20 10 10 10;
    text-align: center;
  }
  .subtitle {
    color: $hg-purple;
    font-size: 16pt;
    font-weight: 400;
    text-align: center;
  }
</style>