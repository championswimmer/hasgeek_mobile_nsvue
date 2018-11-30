import Session from '@/models/talkfunnel/Session'
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp
} from 'typeorm/browser'
import Schedule from '@/models/talkfunnel/Schedule'

@Entity()
export default class Slot extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 5}) // 00:00 format
  slot: string;

  @ManyToOne(type => Schedule)
  @JoinColumn({name: 'schedule_id'})
  schedule: Schedule

  @OneToMany(type => Session, 'slot_id', { lazy: true })
  sessions?: Session[];

}
