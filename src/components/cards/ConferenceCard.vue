<template>
  <CardView  xmlns="http://schemas.nativescript.org/tns.xsd"
             class="conference-card" margin="10" elevation="5" radius="1">
    <StackLayout
        :style="{borderColor: conference.color.primary.toString()}"
        @tap="goTo(`/conferences/${conference.id}`)"
        class="conference-card-contents">
      <StackLayout
          class="card-header"
          orientation="vertical"
          :style="{backgroundColor: conference.color.primary.toString()}">
        <Label class="title" textWrap="true" :text="conference.title"></Label>
        <Label class="venue" textWrap="true" :text="conference.venue"></Label>
      </StackLayout>

      <StackLayout class="details" orientation="horizontal">
        <Label width="50%" class="date" :text="new Date(conference.start_time).toLocaleDateString('IN')"></Label>
        <Label width="50%" class="city" :text="conference.city"></Label>
      </StackLayout>
      <Label class="blurb" :text="conference.blurb" textWrap="true"></Label>
      <StackLayout horizontalAlignment="right" class="footer-buttons" orientation="horizontal">
        <Button
            v-if="conference.url"
            @tap="openLink(conference.url)"
            :style="{backgroundColor: conference.color.primary.toString()}">
          <FormattedString>
            <Span class="mdi" :text="icon('mdi-confirmation-number')"></Span>
            <Span class="text" text="Tickets"></Span>
          </FormattedString>
        </Button>
        <Button
            v-if="conference.funnel"
            @tap="openLink(conference.funnel)"
            :style="{backgroundColor: conference.color.primary.toString()}">
          <FormattedString>
            <Span class="mdi" :text="icon('mdi-description')"></Span>
            <Span class="text" text="Proposals"></Span>
          </FormattedString>
        </Button>
      </StackLayout>

    </StackLayout>
  </CardView>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import * as HG from '../../models/HasGeekAPI'
import {fonticon} from 'nativescript-fonticon'
import {openUrl} from 'tns-core-modules/utils/utils'
import router from '../../router'

@Component
export default class ConferenceCard extends Vue {
  @Prop(Object) conference: HG.Conference

  icon(icName: string) {
    try {return fonticon(icName)}
    catch (e) {return ''}
  }
  openLink(link: string) {
    openUrl(link)
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
    padding: 0;
    border-width: 5;
    border-style: solid;
    .card-header {
      padding: 10;
      color: white;
      .title {
        font-size: 20pt;
        font-weight: 600;
      }
    }
    .details {
      padding: 10;
      font-size: 14pt;
    }
    .blurb {
      padding: 10;
      color: $grey-dark;
      font-size: 16pt;
      height: auto;
    }
    .footer-buttons {
      padding: 10;
      width: 250;
      Button {
        width: auto;
        padding-left: 10;
        padding-right: 10;
        color: white;
        vertical-align: center;
        .text {
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }
</style>