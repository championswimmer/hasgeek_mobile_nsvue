<template>
  <StackLayout class="sidedrawer-header" xmlns="http://schemas.nativescript.org/tns.xsd">
    <GridLayout rows="*,auto" columns="*,auto">
      <Label col="0" row="1" id="hi" :text="`Hi, ${fullname}`"></Label>
      <Label col="1" row="1" v-show="showLogin" @tap="openLoginUrl()" id="login" text="Login"></Label>
    </GridLayout>
  </StackLayout>
</template>

<script lang="ts">
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import {openWebView} from 'nativescript-awesome-webview'

  @Component
  export default class NavDrawerHeader extends Vue {

    get fullname () {
      if (this.$store.state.userAuth.user) {
        return this.$store.state.userAuth.user.fullname
      } else {
        return 'Guest'
      }
    }
    get showLogin() {
      return this.$store.state.userAuth.authToken == null;

    }

    openLoginUrl() {
      openWebView({
        url: 'http://auth.hasgeek.com/auth?client_id=eDnmYKApSSOCXonBXtyoDQ&scope=id+email+phone+organizations+teams+com.talkfunnel:*&response_type=token',
        toolbarColor: '#816894',
      })
      const drawer = this.$parent.$refs.drawer as any
      drawer.nativeView.toggleDrawerState()
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
    GridLayout {
      padding: 10
    }
  }

</style>