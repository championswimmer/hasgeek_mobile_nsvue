import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm/browser'
import Slot from '@/models/talkfunnel/Slot'

@Entity()
export default class Session extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column() description: string;
  @Column() description_text: string;
  @Column('datetime') end: Date;
  @Column({nullable: true}) feedback_url?: string;
  @Column() is_break: boolean;
  @Column({nullable: true}) json_url: string;
  @Column({nullable: true}) proposal?: number;
  @Column({nullable: true}) proposal_url?: string;
  @Column() room: string;
  @Column({nullable: true}) section_name?: string;
  @Column({nullable: true}) section_title?: string;
  @Column() speaker: string;
  @Column() speaker_bio: string;
  @Column() speaker_bio_text: string;
  @Column('datetime') start: Date;
  @Column({nullable: true}) technical_level?: string;
  @Column() title: string;
  @Column() url: string;

  @ManyToOne(type => Slot)
  @JoinColumn({name : 'slot_id'})
  slot: Slot

}