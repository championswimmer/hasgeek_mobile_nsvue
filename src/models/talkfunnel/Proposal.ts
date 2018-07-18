

export default interface Proposal {
  bio: string;
  comments: number;
  confirmed: boolean;
  description: string;
  fullname: string;
  id: number;
  json_url: string;
  level: string;
  links: string;
  name: string;
  objective: string;
  preview_video: string;
  proposer: string;
  requirements: string;
  section: string;
  slides: string;
  speaker: string;
  submitted: Date;
  title: string;
  type?: any;
  url: string;
  votes: number;
}