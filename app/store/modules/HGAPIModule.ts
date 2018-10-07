import { Action, Mutation, Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators'
import * as HG from '@/models/HasGeekAPI'
import {getAll, getConferences, getEvents} from '@/api/hasgeek-github'
import store from '@/store'

@Module({dynamic: true, name: 'hgapi', namespaced: true, store})
class HGAPIModule extends VuexModule {
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
  async loadConferences(): Promise<HG.Conference[]> {
    const confs = await HG.Conference.find({order: {'start_time': 'ASC'}})
    if (confs.length == 0) {
      this.refreshConferences()
    }
    return confs
  }

  @Action({commit: 'updateConferences'})
  async refreshConferences(): Promise<HG.Conference[]> {
    const conferences = await getConferences()
    conferences.forEach(conf => {
      if (typeof conf.color === 'undefined') {
        conf.color = {
          primary: '#549EAF',
          primary_dark: '#DF5E0E',
          accent: '#555555'
        }
      }
    })
    await HG.Conference.save(conferences)
    return conferences
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
    const events = await getEvents()
    for (let event of events) {
      HG.Event.save(event)
    }
    return events
  }
}

const hgapi = getModule(HGAPIModule)
export default hgapi