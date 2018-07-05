import {Action, Mutation, Module, VuexModule, MutationAction} from 'vuex-module-decorators'
import * as HG from '@/models/HasGeekAPI'
import {getJSON} from 'tns-core-modules/http'
import {ActionContext} from 'vuex'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<HG.Conference> = []
  events: Array<HG.Event> = []

  @MutationAction({mutate: ['events', 'conferences']})
  async fetchAll () {
    const response: HG.Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
    return response
  }

  @Mutation updateConferences(confs: Array<HG.Conference>) {
    this.conferences = confs
  }
  @Mutation updateEvents(events: Array<HG.Event>) {
    this.events = events
  }

  @Action({commit: 'updateConferences'})
  async fetchConferences(): Promise<Array<HG.Conference>> {
    const response: HG.Response = await getJSON('https://hasgeek.github.io/events/api/conferences.json')
    return response.conferences
  }

  @Action({commit: 'updateEvents'})
  async loadEvents(): Promise<HG.Event[]> {
    const events = await HG.Event.find()
    if (events.length == 0) {
      this.refreshEvents()
    }
    return events
  }

  @Action({commit: 'updateEvents'})
  async refreshEvents(): Promise<HG.Event[]> {
    const response: HG.Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
    for (let event of response.events) {
      HG.Event.save(event)
    }
    return response.events
  }
}