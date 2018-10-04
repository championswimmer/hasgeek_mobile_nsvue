<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <GridLayout id="logo-tagline-container" rows="auto,auto,*" columns="*,*,*">
      <Image ref="logo" id="logo-image" src="~/assets/images/logo.png" row="0" col="0" colSpan="1" rowSpan="2"></Image>
      <Label ref="tagline" id="tagline" row="0" col="1" colSpan="2" rowSpan="2" textWrap="true">
        <FormattedString textWrap="true">
          <Span class="orange">Hello! </Span>
          <Span class="purple">HasGeek creates discussion spaces for geeks. </Span>
          <Span class="yellow">Come to our events to meet like-minded people, </Span>
          <Span class="orange">learn new things, </Span>
          <Span class="purple">and discover new opportunities.</Span>
        </FormattedString>
      </Label>
    </GridLayout>
  </StackLayout>

</template>
<script lang="ts">
  import * as settings from 'tns-core-modules/application-settings'
  import Vue from 'nativescript-vue'
  import {Component} from 'vue-property-decorator'
  import store from '@/store'

  @Component({})
  export default class Home extends Vue {
    message =  'THIS IS HOME PAGE'
    get shouldAnimate() {return this.$store.state.appSession.shouldAnimateHome}

    mounted() {
      if (this.shouldAnimate) {
        const logo = (this.$refs.logo as Element)
        const tagline = (this.$refs.tagline as Element)
        logo.setAttribute('class', logo.getAttribute('class') + ' shrinkanim')
        tagline.setAttribute('class', tagline.getAttribute('class') + ' slideanim')
        this.$store.commit('homeAnimated')
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../../styles/hasgeek";
  @keyframes slideUp {
    from {transform: translateY(100); opacity: 0}
    to {transform: translateY(0); opacity: 1}
  }
  @keyframes shrinkToCorner {
    from {
      transform: translate(100,200), scale(6)
    }
    to {
      transform: translate(0,0), scale(1)
    }
  }
  .shrinkanim {
    animation-name: shrinkToCorner;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }
  .slideanim {
    animation-name: slideUp;
    animation-duration: 2s;
    animation-timing-function: ease-out;
  }

  #logo-tagline-container {
    padding-top: 10;
    padding-bottom: 10;
  }
  #logo-image {
    padding-top: 10;
    padding-bottom: 10;
  }
  #tagline {
    padding-right: 5;
    width: auto;
    height: auto;
    font-size: 17pt;

    .orange {color: $hg-orange;}
    .purple {color: $hg-purple;}
    .yellow {color: $hg-yellow;}
  }
</style>
