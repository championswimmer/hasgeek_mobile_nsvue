import {Action, Mutation, Module, VuexModule, MutationAction} from 'vuex-module-decorators'
import {getJSON} from 'tns-core-modules/http'
import * as TF from '@/models/TalkFunnelAPI'
import {Store} from 'vuex'
import TalkFunnelClient from '@/api/talkfunnel'
import UserAuth from '@/store/modules/UserAuth'

@Module
export default class TalkFunnelSpace extends VuexModule {
  space: TF.Space = null
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
  async fetchTalkFunnelSpace(this: {state: TalkFunnelSpace, rootState: any}) {
    console.log('===== = = = = = fetchTalkFunnelSpace')
    console.log(this.rootState.userAuth.authToken)
    console.log(this.state.funnelUrl)

    // const client = new TalkFunnelClient(this.state.funnelUrl, this.rootState.userAuth.authToken)
    // const funnelSpace = await client.getEventData()
    // funnelSpace.space.proposals = funnelSpace.proposals
    // await TF.Space.save(funnelSpace.space)
    // console.log(funnelSpace)
    // return funnelSpace
  }
}