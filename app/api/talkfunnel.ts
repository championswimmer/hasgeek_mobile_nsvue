import Space from '@/models/talkfunnel/Space'
import {getJSON, HttpRequestOptions} from 'tns-core-modules/http'
import {path} from 'tns-core-modules/file-system'
import {FunnelSpaceResponse, FunnelResponse} from '@/models/TalkFunnelAPI'
import Participant from '@/models/Participant'


export default class TalkFunnelClient {
  static FUNNEL_BASE_URL = "https://talkfunnel.com/json"
  static PATH_PARTICIPANT = '/participant'
  static PATH_JSON = '/json'
  static async getAllSpaces (): Promise<Space[]> {
    const response = await getJSON(this.FUNNEL_BASE_URL) as FunnelResponse
    return response.spaces
  }

  EVENT_BASE_URL: string
  HEADERS: {Authorization: string}

  constructor(eventFunnelUrl: string, authToken: string) {
    this.EVENT_BASE_URL = eventFunnelUrl
    this.HEADERS = {Authorization: `Bearer ${authToken}`}
  }

  set eventUrl(eventUrl: string) {
    this.EVENT_BASE_URL = eventUrl
  }

  async getEventData(): Promise<FunnelSpaceResponse> {
    console.log(' = = = = = = getEventData')
    return await getJSON({
      method: 'GET',
      url: path.join(this.EVENT_BASE_URL, TalkFunnelClient.PATH_JSON),
      headers: this.HEADERS
    }) as FunnelSpaceResponse
  }

  async getParticipant(puk: string, key: string): Promise<Participant> {
    return await getJSON({
      method: 'POST',
      url: path.join(this.EVENT_BASE_URL, TalkFunnelClient.PATH_PARTICIPANT),
      headers: this.HEADERS,
      content: JSON.stringify({puk, key})
    }) as Participant
  }

}