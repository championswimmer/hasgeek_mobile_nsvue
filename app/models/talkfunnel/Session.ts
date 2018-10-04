

export default interface Session {
  description: string;
  description_text: string;
  end: Date;
  feedback_url: string;
  id: number;
  is_break: boolean;
  json_url: string;
  proposal?: number;
  proposal_url: string;
  room: string;
  section_name: string;
  section_title: string;
  speaker: string;
  speaker_bio: string;
  speaker_bio_text: string;
  start: Date;
  technical_level: string;
  title: string;
  url: string;
}