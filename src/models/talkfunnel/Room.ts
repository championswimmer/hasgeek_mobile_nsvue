import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm/browser'
import Venue from '@/models/talkfunnel/Venue'

@Entity()
export default class Room extends BaseEntity {
  @PrimaryColumn() name: string;

  @Column() bgcolor: string;
  @Column() description: string;
  @Column() json_url?: string;
  @Column() title: string;
  @Column() url?: string;

  @ManyToOne(type => Venue)
  @JoinColumn({name: 'venue'})
  @Column() venue: Venue;
}