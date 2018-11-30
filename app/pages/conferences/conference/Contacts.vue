<template>
  <GridLayout rows="auto,*" xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label row="1" :text="participants.length"></Label>
    <Fab row="1" @tap="scanBarCode()" icon="res://ic_qr_scan_white"></Fab>
  </GridLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import {BarcodeScanner} from 'nativescript-barcodescanner'
  import * as toast from 'nativescript-toast'
  import {registerExitOnDestroy, unregisterExitOnDestroy} from '../../../utils/app-lifecycle'
  import funnelSpace from '@/store/modules/TalkFunnelSpace'
  import Participant from '../../../models/Participant'

  @Component({})
  export default class Contacts extends Vue {

    participants: Array<Participant> = funnelSpace.participants

    async fakeScanBarCode () {
      await funnelSpace.scanBadge('_WpCFMvbIAX6k98z')
    }
    async scanBarCode() {
      /*
       * Stop the exit on destroy mechanism,
       * without which the QR Scanner can't be user-cancelled
       */
      unregisterExitOnDestroy()
      let scanner = new BarcodeScanner()

      try {
        const barCode = await scanner.scan({
          formats: 'QR_CODE',
          orientation: 'vertical',
        })
        toast.makeText(barCode.text).show()
        await funnelSpace.scanBadge('_WpCFMvbIAX6k98z')
        this.participants = funnelSpace.participants
      } catch (e) {
        console.error(e)
      }
      /*
       * Register it back again
       */
      setTimeout(registerExitOnDestroy, 1000)

    }

  }
</script>

<style lang="scss" scoped>
  @import "../../../styles/hasgeek";

  Fab {
    background-color: $hg-orange;
    horizontal-align: right;
    vertical-align: bottom;
    margin: 10;
  }
  .ios {
    Fab {
      width: 70;
      height: 70;
    }
  }
</style>