import {BaseEntity, Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm/browser'

@Entity()
export default class Venue extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @Column() address1: string;
  @Column() address2: string;
  @Column() city: string;
  @Column() country: string;
  @Column() description: string;
  @Column() json_url?: string;
  @Column() latitude?: string;
  @Column() longitude?: string;
  @Column() postcode: string;
  @Column() state: string;
  @Column() title: string;
  @Column() url?: string;
}