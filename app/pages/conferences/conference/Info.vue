<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="title"></Label>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import { Log } from '@/utils/log'
  import {Component} from 'vue-property-decorator'
  import funnelSpace from '@/store/modules/TalkFunnelSpace'

  @Component
  export default class Info extends Vue {
    confId = ''
    get title () {
      return funnelSpace.currentSpace.title
    }

    mounted () {
      this.confId = this.$route.params['confId']
      Log.d(this.confId)

    }

  }
</script>