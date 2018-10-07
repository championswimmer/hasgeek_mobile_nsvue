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

  @Mutation
  setSpaceData (data: {space: any}) {
    this.space = data.space
  }

  @Action
  async fetchTalkFunnelSpace(url: string) {
    console.log('===== = = = = = fetchTalkFunnelSpace')
    console.log(userAuth.authToken)
    console.log(url)

    const client = new TalkFunnelClient(url, userAuth.authToken)
    const funnelSpace = await client.getEventData()
    funnelSpace.space.proposals = funnelSpace.proposals
    // await TF.Space.save(funnelSpace.space)
    this.setSpaceData(funnelSpace)
  }
}

const funnelSpace = getModule(TalkFunnelSpace)
export default funnelSpace