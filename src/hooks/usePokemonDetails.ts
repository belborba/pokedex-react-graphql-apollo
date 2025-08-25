// src/hooks/usePokemonDetails.ts
import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/pokemon";
import { pokemonNameVar } from "@/graphql/reactiveVars";

export function usePokemonDetails() {
  const pokemonName = useReactiveVar(pokemonNameVar);

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
    skip: !pokemonName, // não dispara a query se o nome estiver vazio
  });

  const pokemon = data?.pokemon?.[0];
  const id = pokemon?.id;

  const flavorText =
    pokemon?.pokemonspecy?.pokemonspeciesflavortexts?.[0]?.flavor_text || "";
  const sprite =
    pokemon?.pokemonsprites?.[0]?.sprites ||
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.[0]?.pokemons?.[0]
      ?.pokemonsprites?.[0]?.sprites ||
    "";
  const types = pokemon?.pokemontypes?.map((t: any) => t.type.name) || [];
  const stats = pokemon?.pokemonstats || [];
  const evolutions =
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.map((s) => ({
      name: s.name,
      image: s.pokemons?.[0]?.pokemonsprites?.[0]?.sprites || null,
    })) || [];

  return {
    id,
    pokemonName,
    evolutions,
    flavorText,
    sprite,
    types,
    stats,
    loading,
    error,
  };
}
