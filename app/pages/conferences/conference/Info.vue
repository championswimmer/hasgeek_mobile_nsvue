<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="space && space.title"></Label>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import * as TF from '@/models/TalkFunnelAPI'
  import funnelSpace from '@/store/modules/TalkFunnelSpace'

  @Component
  export default class Info extends Vue {
    confId = ''
    get space () { return funnelSpace.currentSpace }

    mounted () {
      this.confId = this.$route.params['confId']
      console.log(this.confId)

    }

  }
</script>