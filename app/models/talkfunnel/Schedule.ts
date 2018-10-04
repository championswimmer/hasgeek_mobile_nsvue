import Slot from '@/models/talkfunnel/Slot'


export default interface Schedule {
  date: string;
  slots: Slot[];
}