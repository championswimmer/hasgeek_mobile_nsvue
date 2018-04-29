export interface Response {
  conferences?: (ConferencesEntity)[] | null;
  events?: (EventsEntity)[] | null;
  cities?: (string)[] | null;
}
export interface ConferencesEntity {
  id: string;
  title: string;
  start_time: string;
  city: string;
  venue: string;
  google_maps_link: string;
  end_time: string;
  url: string;
  funnel: string;
  blurb: string;
  color?: Color | null;
}
export interface Color {
  primary: string;
  primary_dark: string;
  accent: string;
}
export interface EventsEntity {
  name: string;
  title: string;
  start_time: string;
  city: string;
  venue: string;
  google_maps_link: string;
  end_time: string;
  url: string;
  funnel: string;
  blurb: string;
}
