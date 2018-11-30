import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn} from 'typeorm/browser'
import Proposal from '@/models/talkfunnel/Proposal'
import Schedule from '@/models/talkfunnel/Schedule'
import Venue from '@/models/talkfunnel/Venue'

@Entity()
export default class Space extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column() bg_color: string
  @Column() bg_image: string
  @Column() datelocation: string
  @Column() end: string
  @Column() explore_url: string
  @Column() json_url: string
  @Column() name: string
  @Column() start: string
  @Column() state: string
  @Column() status: number
  @Column() timezone: string
  @Column() title: string
  @Column() url: string
  @Column() website: string

  @OneToMany(type => Schedule, 'space_id', {lazy: true})
  schedules?: Schedule[]

  @OneToMany(type => Proposal, 'space_id', {lazy: true})
  proposals?: Proposal[]

}