export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Male' | 'Female' | 'unknown';

export interface Characteristic {
  id: number;
  name: string;
  status: Status;
  gender: Gender;
  origin: { name: string };
  location: { name: string };
  image: string;
}

export interface GetCharacter {
  info: { pages: number };
  results: Characteristic[];
}
