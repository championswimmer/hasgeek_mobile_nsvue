<template xmlns="http://schemas.nativescript.org/tns.xsd">
  <StackLayout>
    <Label text="WOW"></Label>
    <Label :text="wow"></Label>
    <Label text="WOW"></Label>
    <Label text="WOW"></Label>
  </StackLayout>
</template>
<script lang="ts">
  import {ComponentOptions} from 'vue'

  export default <ComponentOptions<any>>{
    data() {return {
        wow: 'OMGWOW'
    }}
  }
</script>