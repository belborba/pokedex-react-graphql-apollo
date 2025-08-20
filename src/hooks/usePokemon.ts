import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/pokemon";
import type {
  GetPokemonQuery,
  GetPokemonQueryVariables,
} from "@/graphql/generated";

export function usePokemon(name: string | null | undefined) {
  const { data, loading, error } = useQuery<
    GetPokemonQuery,
    GetPokemonQueryVariables
  >(GET_POKEMON, {
    variables: { name: name ?? "" },
    skip: !name,
  });

  const pokemon = data?.pokemon?.[0];
  const id = pokemon?.id;
  const type = pokemon?.pokemontypes?.[0]?.type?.name ?? null;
  const types = pokemon?.pokemontypes?.map((t) => t.type?.name ?? null) ?? [];
  const stats = pokemon?.pokemonstats ?? [];
  const sprite = pokemon?.pokemonsprites?.[0]?.sprites ?? null;

  const evolutions =
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.map((s) => ({
      name: s.name,
      image: s.pokemons?.[0]?.pokemonsprites?.[0]?.sprites ?? null,
    })) ?? [];

  const flavorText: string =
    pokemon?.pokemonspecy?.pokemonspeciesflavortexts?.[0]?.flavor_text ??
    (pokemon?.name && type ? `${pokemon.name} is a ${type} type Pokémon.` : "");

  return {
    loading,
    error,
    pokemon,
    id,
    type,
    types,
    stats,
    sprite,
    evolutions,
    flavorText,
  };
}
