import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import * as TF from '@/models/TalkFunnelAPI'
import TalkFunnelClient from '@/api/talkfunnel'
import store from '@/store'
import userAuth from '@/store/modules/UserAuth'

@Module({ dynamic: true, name: 'funnelSpace', namespaced: true, store })
class TalkFunnelSpace extends VuexModule {
  space: TF.Space | { title: string } = { title: '' }
  // proposals: TF.Proposal[] = []
  // venues: TF.Venue[] = []
  // rooms: TF.Room[] = []
  funnelUrl: string = ''

  get currentSpace() {
    return this.space
  }

  @Mutation
  clearData() {
    this.space = { title: '' }
  }

  @Mutation
  setSpace(space: TF.Space) {
    this.space = space
    this.funnelUrl = space.url
  }

  @Action
  async fetchTalkFunnelSpace(url: string) {
    console.log('============ FETCH =============')
    console.log('============ CLIENT CREATING ===========')
    const client = new TalkFunnelClient(url, userAuth.authToken)
    console.log('============ CLIENT CREATED ===========')
    const event = await client.getEventData()
    console.log('============ DATA FETCHED ===========')
    console.log(event.space)
    // funnelSpace.space.proposals = funnelSpace.proposals
    await TF.Space.save(event.space)
    this.setSpace(event.space)
  }
}

const funnelSpace = getModule(TalkFunnelSpace)
export default funnelSpace