import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Log } from '@/utils/log'
import * as TF from '@/models/TalkFunnelAPI'
import TalkFunnelClient from '@/api/talkfunnel'
import store from '@/store'
import userAuth from '@/store/modules/UserAuth'
import Participant from '@/models/Participant'

type DataState = 'loading' | 'loaded'

@Module({ dynamic: true, name: 'funnelSpace', namespaced: true, store })
class TalkFunnelSpace extends VuexModule {
  dataState: DataState = 'loading'
  @Mutation beginLoading() { this.dataState = 'loading' }
  @Mutation finishLoading() { this.dataState = 'loaded' }

  space: TF.Space = new TF.Space()
  // proposals: TF.Proposal[] = []
  venues: TF.Venue[] = []
  rooms: TF.Room[] = []
  schedules: TF.Schedule[] = []
  funnelUrl: string = ''
  participants: Array<Participant> = []

  get currentSpace() { return this.space }



  @Mutation
  setSpace(space: TF.Space) {
    this.space = space
    this.funnelUrl = space.url
  }
  @Mutation
  setVenues(venues: (TF.Venue)[]) { this.venues = venues }

  @Mutation
  setSchedules(schedules: (TF.Schedule)[]) { this.schedules = schedules }

  @Mutation
  addSchedule(schedule: TF.Schedule) { this.schedules.push(schedule) }

  @Mutation
  setRooms(rooms: (TF.Room)[]) { this.rooms = rooms }

  @Mutation
  addParticipant (participant: Participant) {
    this.participants.push(participant)
  }

  @Action
  async fetchTalkFunnelSpace(url: string) {
    this.beginLoading()
    const client = new TalkFunnelClient(url, userAuth.authToken)
    const event = await client.getEventData()
    Log.d('============ DATA FETCHED ===========')
    Log.d(event.space)

    this.setVenues(await TF.Venue.save(event.venues))
    Log.d('========== VENUES SAVED ==========')
    this.setRooms(await TF.Room.save(event.rooms))
    Log.d('========== ROOMS SAVED ==========')

    this.setSpace(await TF.Space.save(event.space))
    Log.d('========== SPACE SAVED ==========')

    await event.schedule.forEach(async (sched) => {
      // Save each schedule
      sched.space = event.space

      sched.slots.forEach(async (slot) => {

        // Save each slot inside each schedule
        slot.schedule = sched
        await TF.Slot.save(slot)

        // Save all sessions inside each slot
        slot.sessions.forEach( (sess) => {
          sess.slot = slot
        })
        await TF.Session.save(slot.sessions)
      })
    })
    this.setSchedules(await TF.Schedule.find({
      where: { space: this.space },
      options: { eagerRelations: true },
    }))
    Log.w('========== SCHEDULE SAVED ==========')

    event.proposals.forEach((prop) => {
      prop.space = event.space
    })




    this.finishLoading()
  }

  @Action
  async scanBadge(badgeCode: string) {
    const client = new TalkFunnelClient(this.funnelUrl, userAuth.authToken)
    const puk = badgeCode.substr(0,8)
    const key = badgeCode.substr(8, 16)
    const participant = await client.getParticipant(puk, key)
    this.addParticipant(participant)
    console.log(participant)
  }
}

const funnelSpace = getModule(TalkFunnelSpace)
export default funnelSpace