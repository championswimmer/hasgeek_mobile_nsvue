<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="conference-card" margin="10" elevation="5" radius="3">
    <StackLayout
        :style="styleBgColorPrimary"
        @tap="goTo(`/conferences/${conference.id}/info`)"
        class="conference-card-contents">
      <!-- Header -->
      <DockLayout class="card-header">
        <Label dock="right" class="mdi" :text="'mdi-chevron-right-box' | fonticon"></Label>
        <Label dock="top" class="title" textWrap="true" :text="conference.title"></Label>
        <Label dock="bottom" class="venue" textWrap="true" :text="conference.venue"></Label>
      </DockLayout>

      <!-- Content -->
      <StackLayout class="card-body" orientation="vertical">
        <StackLayout class="details" orientation="horizontal">
          <Label width="50%" class="date" :text="new Date(conference.start_time).toLocaleDateString('IN')"></Label>
          <Label width="50%" class="city" :text="conference.city"></Label>
        </StackLayout>
        <Label class="blurb" :text="conference.blurb" textWrap="true"></Label>
        <StackLayout horizontalAlignment="right" class="footer-buttons" orientation="horizontal">
          <Button
              v-show="conference.url"
              @tap="openLink(conference.url)"
              :style="styleBgColorPrimary">
            <FormattedString>
              <Span class="mdi" :text="'mdi-ticket' | fonticon"></Span>
              <Span class="text" text="Tickets"></Span>
            </FormattedString>
          </Button>
          <Button
              v-show="conference.funnel"
              @tap="openLink(conference.funnel)"
              :style="styleBgColorPrimary">
            <FormattedString>
              <Span class="mdi" :text="'mdi-filter' | fonticon"></Span>
              <Span class="text" text="Proposals"></Span>
            </FormattedString>
          </Button>
        </StackLayout>
      </StackLayout>


    </StackLayout>
  </CardView>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator'
  import * as HG from '../../models/HasGeekAPI'
  import {openWebView} from 'nativescript-awesome-webview'
  import router from '../../router'

  @Component
  export default class ConferenceCard extends Vue {
    @Prop(Object) conference: HG.Conference
    styleBgColorPrimary = {
      backgroundColor: this.conference.color.primary.toString()
    }

    openLink(link: string) {
      openWebView({
        url: link,
        showTitle: false,
        toolbarColor: this.conference.color.primary,
        toolbarControlsColor: '#ffffff'
      })
    }
    goTo(path: string) {
      return router.push(path)
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/hasgeek';
  @import "~nativescript-theme-core/scss/variables";
  .conference-card {
    padding: 0;
    background-color: #fff;
    StackLayout {
      border-radius: 3;
    }
  }
  .conference-card-contents {
    padding: 5;
  }
  .card-header {
    padding: 10;
    color: white;
    .mdi {
      font-size: 24pt;
    }
  }
  .card-body {
    background-color: white;
  }
  .title {
    font-size: 20pt;
    font-weight: 600;
  }
  .details {
    padding: 10;
    padding-bottom: 2;
    font-size: 14pt;
  }
  .blurb {
    padding: 10;
    padding-top: 2;
    color: $grey-dark;
    font-size: 16pt;
    height: auto;
  }
  .footer-buttons {
    padding: 10;
    width: 300;
  }
  Button {
    margin: 5;
    padding: 0;
    border-radius: 4;
    height: 40;
    width: auto;
    color: white;
  }
  .ios {
    .card-header {
      border-color: transparent;
      border-width: 0;
    }
    .title {
      min-height: 30;
    }
    .venue {
      min-height: 20;
    }
    .blurb {
      min-height: 70;
    }
    Button {
      padding-left: 10;
      padding-right: 10;
      min-height: 30;
      width: 100;
      margin-left: 8;
      margin-right: 8;
    }
  }

</style>