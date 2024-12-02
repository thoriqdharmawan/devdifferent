import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    data: characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      results {
        id
        name
        species
        status
        image
        type
        gender
      }
    }
  }
`;

export const GET_CHARACTERS_BY_ID = gql`
  query GetCharactersById($id: ID!) {
    data: character(id: $id) {
      id
      name
      species
      status
      image
      type
      gender
      origin {
        id
        name
        type
        dimension
      }
      location {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;
