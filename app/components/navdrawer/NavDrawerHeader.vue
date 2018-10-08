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
  import { Component, Emit } from 'vue-property-decorator'
  import {openWebView} from 'nativescript-awesome-webview'
  import userAuth from '@/store/modules/UserAuth'

  @Component
  export default class NavDrawerHeader extends Vue {

    created() {
      userAuth.retrieveUser()
    }

    get fullname () {
      return userAuth.username
    }
    get showLogin() {
      return userAuth.authToken === '';

    }
    @Emit('close-drawer') closeDrawer() {}

    openLoginUrl() {
      openWebView({
        url: 'http://auth.hasgeek.com/auth?client_id=eDnmYKApSSOCXonBXtyoDQ&scope=id+email+phone+organizations+teams+com.talkfunnel:*&response_type=token',
        toolbarColor: '#816894',
      })
      this.closeDrawer()
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