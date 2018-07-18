import {Color} from '../HasGeekAPI'
import {Entity} from 'typeorm'
import {BaseEntity, Column, PrimaryColumn} from 'typeorm/browser'

@Entity()
export default class Conference extends BaseEntity {

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

  @Column({type: 'simple-json'})
  color?: Color | null;
}