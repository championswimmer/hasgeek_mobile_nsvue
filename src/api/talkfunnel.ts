import Space from '@/models/talkfunnel/Space'
import {getJSON, HttpRequestOptions} from 'tns-core-modules/http'
import {FunnelEvent, FunnelResponse} from '@/models/TalkFunnelAPI'


export default class TalkFunnelClient {
  static FUNNEL_BASE_URL = "https://talkfunnel.com/json"
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

  async getEventData(): Promise<FunnelEvent> {
    return await getJSON({
      method: 'GET',
      url: this.EVENT_BASE_URL,
      headers: this.HEADERS
    }) as FunnelEvent

  }
}