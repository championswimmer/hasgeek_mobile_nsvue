import Proposal from '@/models/talkfunnel/Proposal'
import Room from '@/models/talkfunnel/Room'
import Slot from '@/models/talkfunnel/Slot'
import Schedule from '@/models/talkfunnel/Schedule'
import Section from '@/models/talkfunnel/Section'
import Space from '@/models/talkfunnel/Space'
import Venue from '@/models/talkfunnel/Venue'

export interface FunnelResponse {
  spaces: Space[]
}

export interface FunnelSpaceResponse {
  proposals: Proposal[];
  rooms: Room[];
  schedule: Schedule[];
  sections: Section[];
  space: Space;
  venues: Venue[];
}

export {
  Space, Proposal,
  Venue, Room, Slot,
  Schedule, Section
}