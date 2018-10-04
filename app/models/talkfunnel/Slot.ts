import Session from '@/models/talkfunnel/Session'

export default interface Slot {
  sessions: Session[];
  slot: string;
}
