<template>
  <GridLayout rows="auto,*" xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label row="1" text="contacts"></Label>
    <Fab row="1" @tap="scanBarCode()" icon="res://ic_qr_scan_white"></Fab>
  </GridLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import {BarcodeScanner} from 'nativescript-barcodescanner'
  import {registerExitOnDestroy, unregisterExitOnDestroy} from '../../../utils/lifecycle'

  @Component({})
  export default class Contacts extends Vue {

    async scanBarCode() {
      let scanner = new BarcodeScanner()
      /*
       * Stop the exit on destroy mechanism,
       * without which the QR Scanner can't be user-cancelled
       */
      unregisterExitOnDestroy()

      try {
        const barCode = await scanner.scan({
          formats: 'QR_CODE',
          orientation: 'vertical',
        })
      } catch (e) {
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