export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
}

export interface CharacterFilters {
  name: string;
  species: string;
  status: string;
}

export interface CharacterDetail {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  episode: Episode[];
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}
