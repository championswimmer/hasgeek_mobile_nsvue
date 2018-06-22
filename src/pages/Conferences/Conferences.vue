<template >
    <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
      <Label>CONFERENCES {{m}}</Label>
      <Button @tap="change">CHANGE</Button>
    </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Conferences extends Vue {
    m = 'M'
    change() {
      this.m += 'c'
    }
  }
</script>

<style scoped>

</style>