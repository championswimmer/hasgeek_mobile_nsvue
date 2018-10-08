import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Log } from '@/utils/log'
import * as TF from '@/models/TalkFunnelAPI'
import TalkFunnelClient from '@/api/talkfunnel'
import store from '@/store'
import userAuth from '@/store/modules/UserAuth'

type DataState = 'loading' | 'loaded'

@Module({ dynamic: true, name: 'funnelSpace', namespaced: true, store })
class TalkFunnelSpace extends VuexModule {
  dataState: DataState = 'loading'
  @Mutation beginLoading() { this.dataState = 'loading' }
  @Mutation finishLoading() { this.dataState = 'loaded' }

  space: TF.Space = new TF.Space()
  // proposals: TF.Proposal[] = []
  venues: TF.Venue[] = []
  // rooms: TF.Room[] = []
  funnelUrl: string = ''

  get currentSpace() { return this.space }



  @Mutation
  setSpace(space: TF.Space) {
    this.space = space
    this.funnelUrl = space.url
  }
  @Mutation
  setVenues(venues: (TF.Venue)[]) {
    this.venues = venues
  }

  @Action
  async fetchTalkFunnelSpace(url: string) {
    this.beginLoading()
    const client = new TalkFunnelClient(url, userAuth.authToken)
    const event = await client.getEventData()
    Log.d('============ DATA FETCHED ===========')
    Log.d(event.space)
    // funnelSpace.space.proposals = funnelSpace.proposals
    await TF.Space.save(event.space)
    this.setSpace(event.space)
    Log.d('========== SPACE SAVED ==========')
    await TF.Venue.save(event.venues)
    this.setVenues(event.venues)
    Log.d('========== VENUES SAVED ==========')
    this.finishLoading()
  }
}

const funnelSpace = getModule(TalkFunnelSpace)
export default funnelSpace