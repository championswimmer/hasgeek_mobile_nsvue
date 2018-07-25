import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm/browser'
import Space from '@/models/talkfunnel/Space'
// TODO: add class-validator for validations

@Entity()
export default class Participant extends BaseEntity {

  @PrimaryColumn()
  _id: number

  @Column()
  company: string

  @Column()
  email: string

  @Column()
  fullname: string

  @Column()
  job_title: string

  @Column()
  phone: string

  @Column()
  puk: string

  @ManyToOne(type => Space)
  @JoinColumn({name: 'space_id'})
  space: Space

  @Column()
  twitter: string

}