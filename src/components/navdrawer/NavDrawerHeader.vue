<template>
  <StackLayout class="sidedrawer-header" xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout orientation="horizontal">
      <Label width="70%" id="hi" text="Hi, Guest"></Label>
      <Label @tap="openLoginUrl()" width="30%" id="login" text="Login"></Label>
    </StackLayout>
  </StackLayout>
</template>

<script>
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import { openAdvancedUrl } from 'nativescript-advanced-webview';
  import {openUrl} from 'tns-core-modules/utils/utils'

  @Component({})
  export default class NavDrawerHeader extends Vue {

    openLoginUrl() {
      openAdvancedUrl({
        url: 'http://auth.hasgeek.com/auth?client_id=eDnmYKApSSOCXonBXtyoDQ&scope=id+email+phone+organizations+teams+com.talkfunnel:*&response_type=token',
        toolbarColor: '#816894',
      })
      this.$parent.$refs.drawer.nativeView.toggleDrawerState()
    }

  }
</script>

<style scoped lang="scss">
  @import "../../styles/hasgeek";

  Label {
    color: white;
  }

  #login {
    text-align: right;
    horizontal-align: right;
  }
  #hi {
    font-size: 20pt;
  }
  .sidedrawer-header {
    background-color: $hg-orange;
    vertical-align: bottom;
    StackLayout {
      padding: 10
    }
  }

</style>