import { Action, Mutation, Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators'
import {getJSON} from 'tns-core-modules/http'
import * as TF from '@/models/TalkFunnelAPI'
import TalkFunnelClient from '@/api/talkfunnel'
import store from '@/store'
import userAuth from '@/store/modules/UserAuth'

@Module({dynamic: true, name: 'funnelSpace', namespaced: true, store})
class TalkFunnelSpace extends VuexModule {
  space: TF.Space | null = null
  proposals: TF.Proposal[] = []
  venues: TF.Venue[] = []
  rooms: TF.Room[] = []
  funnelUrl: string = ''

  @Mutation
  setFunnelUrl(url: string) {
    this.funnelUrl = url
    console.log(this.funnelUrl)
  }

  @MutationAction({mutate: ['space', 'proposals', 'venues', 'rooms']})
  async fetchTalkFunnelSpace() {
    console.log('===== = = = = = fetchTalkFunnelSpace')
    console.log(userAuth.authToken)
    console.log(this.funnelUrl)

    // const client = new TalkFunnelClient(this.state.funnelUrl, this.rootState.userAuth.authToken)
    // const funnelSpace = await client.getEventData()
    // funnelSpace.space.proposals = funnelSpace.proposals
    // await TF.Space.save(funnelSpace.space)
    // console.log(funnelSpace)
    // return funnelSpace
  }
}

const funnelSpace = getModule(TalkFunnelSpace)
export default funnelSpace