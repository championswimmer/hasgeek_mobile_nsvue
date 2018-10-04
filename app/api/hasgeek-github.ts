import {path} from 'tns-core-modules/file-system'
import {getJSON} from 'tns-core-modules/http'
import * as HG from '@/models/HasGeekAPI'

const BASE_URL = 'https://hasgeek.github.io/events/api'
const PATH_ALL = 'all.json'
const PATH_EVENTS = 'events.json'
const PATH_CONFERENCES = 'conferences.json'

export const getAll = async () => {
  return await getJSON(path.join(BASE_URL, PATH_ALL)) as HG.Response
}

export const getEvents = async (): Promise<HG.Event[]> => {
  const response = await getJSON(path.join(BASE_URL, PATH_EVENTS)) as HG.Response
  return response.events
}


export const getConferences = async (): Promise<HG.Conference[]> => {
  const response = await getJSON(path.join(BASE_URL, PATH_CONFERENCES)) as HG.Response
  return response.conferences
}

