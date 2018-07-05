import Event from '@/models/Event'
import Conference from '@/models/Conference'

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