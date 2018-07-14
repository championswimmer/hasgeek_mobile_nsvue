import {Action, Mutation, Module, VuexModule, MutationAction} from 'vuex-module-decorators'
import * as HG from '@/models/HasGeekAPI'
import {Store} from 'vuex'
import {getAll, getConferences, getEvents} from '@/api/hasgeek-github'

@Module
export default class HGAPIModule extends VuexModule {
  conferences: Array<HG.Conference> = []
  events: Array<HG.Event> = []

  @MutationAction({mutate: ['events', 'conferences']})
  async fetchAll () {
    const response = await getAll()
    return response
  }

  @Mutation updateConferences(confs: Array<HG.Conference>) {
    this.conferences = confs
  }
  @Mutation updateEvents(events: Array<HG.Event>) {
    this.events = events
  }

  @Action({commit: 'updateConferences'})
  async loadConferences(this: Store<any>): Promise<HG.Conference[]> {
    const confs = await HG.Conference.find({order: {'start_time': 'ASC'}})
    if (confs.length == 0) {
      this.dispatch('refreshConferences')
    }
    return confs
  }

  @Action({commit: 'updateConferences'})
  async refreshConferences(): Promise<HG.Conference[]> {
    const conferences = await getConferences()
    for (let conf of conferences) {
      if (typeof conf.color === 'undefined') {
        conf.color = {
          primary: '#604E6E', primary_dark: '#df5e0e', accent: '#555555'
        }
      }
      HG.Conference.save(conf)
    }
    return conferences
  }

  @Action({commit: 'updateEvents'})
  async loadEvents(this: Store<any>): Promise<HG.Event[]> {
    const events = await HG.Event.find()
    if (events.length == 0) {
      this.dispatch('refreshEvents')
    }
    return events
  }

  @Action({commit: 'updateEvents'})
  async refreshEvents(): Promise<HG.Event[]> {
    const events = await getEvents()
    for (let event of events) {
      HG.Event.save(event)
    }
    return events
  }
}