import {BaseEntity, Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm/browser'
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
  space_id: number

  @Column()
  twitter: string

}