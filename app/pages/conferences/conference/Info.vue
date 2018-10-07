<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">

  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Info extends Vue {
    confId = ''
    mounted () {
      this.confId = this.$route.params['confId']
      console.log(this.confId)
    }

  }
</script>