<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="conference-card" margin="10" elevation="5" radius="1">
    <StackLayout
        :style="{backgroundColor: conference.color.primary.toString()}"
        @tap="goTo(`/conferences/${conference.id}`)"
        class="conference-card-contents">
      <StackLayout class="card-header" orientation="vertical">
        <Label class="title" textWrap="true" :text="conference.title"></Label>
        <Label class="venue" textWrap="true" :text="conference.venue"></Label>
      </StackLayout>
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
              :style="{backgroundColor: conference.color.primary.toString()}">
            <FormattedString>
              <Span class="mdi" :text="icon('mdi-confirmation-number')"></Span>
              <Span class="text" text="Tickets"></Span>
            </FormattedString>
          </Button>
          <Button
              v-show="conference.funnel"
              @tap="openLink(conference.funnel)"
              :style="{backgroundColor: conference.color.primary.toString()}">
            <FormattedString>
              <Span class="mdi" :text="icon('mdi-description')"></Span>
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
  import {fonticon} from 'nativescript-fonticon'
  import {openWebView} from 'nativescript-awesome-webview'
  import router from '../../router'

  @Component
  export default class ConferenceCard extends Vue {
    @Prop(Object) conference: HG.Conference

    icon(icName: string) {
      try {return fonticon(icName)}
      catch (e) {return ''}
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
  }
  .conference-card-contents {
    padding: 5;
  }
  .card-header {
    padding: 10;
    color: white;
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
    border-radius: 2;
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