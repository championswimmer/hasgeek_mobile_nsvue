import {BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm/browser'

@Entity()
export default class Event extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @Column()
  title: string;

  @Column()
  start_time: string;

  @Column()
  city: string;

  @Column()
  venue: string;

  @Column()
  google_maps_link: string;

  @Column()
  end_time: string;

  @Column()
  url: string;

  @Column()
  funnel: string;

  @Column()
  blurb: string;
}