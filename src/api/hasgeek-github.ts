import {path} from 'tns-core-modules/file-system'
import {getJSON} from 'tns-core-modules/http'
import * as HG from '@/models/HasGeekAPI'

const BASE_URL = 'https://hasgeek.github.io/events/api'
const PATH_ALL = 'all.json'
const PATH_EVENTS = 'events.json'
const PATH_CONFERENCES = 'conferences.json'

export const getAll = async () =>
  await getJSON(path.join(BASE_URL, PATH_ALL)) as HG.Response

export const getEvents = async () =>
  await getJSON(path.join(BASE_URL, PATH_EVENTS)) as HG.Event[]

export const getConferences = async () =>
  await getJSON(path.join(BASE_URL, PATH_CONFERENCES)) as HG.Conference[]
