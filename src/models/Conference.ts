import {Color} from '@/models/HasGeekAPI'
import {Entity} from 'typeorm'
import {Column, PrimaryColumn} from 'typeorm/browser'

@Entity()
export default class Conference {

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({type: 'datetime'})
  start_time: Date;

  @Column()
  city: string;

  @Column()
  venue: string;

  @Column()
  google_maps_link: string;

  @Column({type: 'datetime'})
  end_time: Date;

  @Column()
  url: string;

  @Column()
  funnel: string;

  @Column()
  blurb: string;

  @Column()
  color?: Color | null;
}