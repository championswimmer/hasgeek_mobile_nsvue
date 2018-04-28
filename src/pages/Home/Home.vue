<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="message"></Label>
    <TextView v-model="message"></TextView>
  </StackLayout>

</template>
<script lang="ts">
  import Vue, {ComponentOptions} from 'vue'

  export default <ComponentOptions<any>>{
    data() {
      return {
        message: 'THIS IS HOME PAGE'
      }
    }
  }
</script>
