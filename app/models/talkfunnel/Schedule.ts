import Slot from '@/models/talkfunnel/Slot'
import { Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, OneToMany } from 'typeorm/browser'
import Space from '@/models/talkfunnel/Space'

@Entity()
export default class Schedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Space)
  @JoinColumn({name: 'space_id'})
  space: Space

  @Column()
  date: string; // TODO: fix length

  @OneToMany(type => Slot, 'schedule_id', {lazy: true})
  slots?: Slot[];
}