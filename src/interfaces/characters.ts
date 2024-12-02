// interface CharacterEpisodes {
//   id: string;
//   name: string;
//   air_date: string;
// }

// interface CharacterLocations {
//   id: string;
//   name: string;
// }

export interface Character {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
  gender: string;
  // episode: CharacterEpisodes;
  // location: CharacterLocations;
}
