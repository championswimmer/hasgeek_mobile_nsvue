<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="message"></Label>
    <TextView v-model="message"></TextView>
    <Button @tap="doTap()">TAP {{count}}</Button>
  </StackLayout>

</template>
<script lang="ts">
  import Vue from 'nativescript-vue'
  import store from '@/store'

  export default Vue.extend({
    data() {
      return {
        message: 'THIS IS HOME PAGE'
      }
    },
    computed: {
      count() {
        return store.state.counter.count
      }
    },
    methods: {
      doTap() {
        store.dispatch('incr')
      }
    }
  })
</script>
