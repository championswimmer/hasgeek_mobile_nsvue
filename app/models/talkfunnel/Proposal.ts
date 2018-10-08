import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm/browser'
import Space from '@/models/talkfunnel/Space'

@Entity()
export default class Proposal extends BaseEntity {
  @PrimaryColumn() id: number;

  @Column() bio: string;
  @Column() comments: number;
  @Column() confirmed: boolean;
  @Column() description: string;
  @Column() fullname: string;
  @Column() json_url: string;
  @Column() level: string;
  @Column() links: string;
  @Column() name: string;
  @Column() objective: string;
  @Column() preview_video: string;
  @Column() proposer: string;
  @Column() requirements: string;
  @Column({nullable: true}) section?: string;
  @Column() slides: string;
  @Column({nullable: true}) speaker?: string;
  @Column() submitted: Date;
  @Column() title: string;
  @Column({nullable: true}) type?: string;
  @Column() url: string;
  @Column() votes: number;

  @ManyToOne(type => Space)
  @JoinColumn({name: 'space_id'})
  space: Space
}