import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(where: { name: { _eq: $name } }) {
      id
      name
      pokemontypes {
        type {
          name
        }
      }
      pokemonstats(where: { stat_id: { _neq: 4, _nin: 5 } }) {
        stat {
          name
        }
        base_stat
      }
      pokemonsprites {
        sprites(path: "other.home.front_default")
      }
      pokemonspecy {
        evolutionchain {
          pokemonspecies {
            id
            name
            pokemons(limit: 1) {
              pokemonsprites {
                sprites(path: "other.home.front_default")
              }
            }
          }
        }
        pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 }, version_id: { _eq: 13 } }
        ) {
          flavor_text
        }
      }
    }
  }
`;
