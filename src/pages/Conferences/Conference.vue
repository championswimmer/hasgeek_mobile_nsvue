<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="$route.params.id"></Label>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'

  @Component({})
  export default class Conference extends Vue {

  }
</script>
<style>

</style>