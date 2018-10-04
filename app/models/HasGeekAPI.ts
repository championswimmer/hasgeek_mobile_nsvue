import Event from '@/models/hasgeek-github/Event'
import Conference from '@/models/hasgeek-github/Conference'

export interface Response {
  conferences?: Array<Conference> | null;
  events?: Array<Event> | null;
  cities?: Array<string> | null;
}

interface Color {
  primary: string;
  primary_dark: string;
  accent: string;
}

export {
  Event, Conference, Color
}