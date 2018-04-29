import {Action, Mutation, Module, VuexModule} from '../lib/vuex-ts-helpers'
import {ConferencesEntity, EventsEntity, Response} from '@/models/HasGeekAPI'
import {getJSON} from 'tns-core-modules/http'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<ConferencesEntity> = []
  events: Array<EventsEntity> = []

  @Mutation updateConferences(confs: Array<ConferencesEntity>) {
    this.conferences.splice(0, this.conferences.length, ...confs)
  }
  @Mutation updateEvents(events: Array<EventsEntity>) {
    this.events.splice(0, this.conferences.length, ...events)
  }

  @Action({commit: 'updateConferences'})
  async fetchConferences(): Promise<Array<ConferencesEntity>> {
    const response: Response = await getJSON('https://hasgeek.github.io/events/api/conferences.json')
    return response.conferences
  }

  @Action({commit: 'updateEvents'})
  async fetchEvents(): Promise<Array<EventsEntity>> {
    const response: Response = await getJSON('https://hasgeek.github.io/events/api/events.json')
    return response.events
  }
}