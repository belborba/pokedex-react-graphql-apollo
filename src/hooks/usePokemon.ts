import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/getPokemon";
import { pokemonNameVar, pokemonDataVar } from "@/graphql/reactiveVars";
import { useEffect, useState } from "react";
import type {
  GetPokemonQuery,
  GetPokemonQueryVariables,
} from "@/graphql/generated";

export function usePokemon() {
  const pokemonName = useReactiveVar(pokemonNameVar); // nome digitado
  const lastData = useReactiveVar(pokemonDataVar); // último Pokémon válido

  const [searchError, setSearchError] = useState<string | null>(null);

  const { data, loading, error } = useQuery<
    GetPokemonQuery,
    GetPokemonQueryVariables
  >(GET_POKEMON, {
    variables: { name: pokemonName },
    skip: !pokemonName,
    onCompleted: (completedData) => {
      if (completedData?.pokemon?.[0]) {
        pokemonDataVar(completedData); // atualiza a reactive var dos dados
        setSearchError(null);
      } else {
        setSearchError(`Pokémon não encontrado!`);
      }
    },
    onError: (err) => {
      console.error(err);
      setSearchError("Ocorreu um erro na conexão. Tente novamente.");
    },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (loading) {
      setSearchError(null);
    }
  }, [loading]);

  // fallback para último Pokémon válido
  const pokemon = data?.pokemon?.[0] || lastData?.pokemon?.[0] || null;

  // dados derivados
  const id = pokemon?.id;
  const name = pokemon?.name;
  const flavorText =
    pokemon?.pokemonspecy?.pokemonspeciesflavortexts?.[0]?.flavor_text || "";
  const sprite =
    pokemon?.pokemonsprites?.[0]?.sprites ||
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.[0]?.pokemons?.[0]
      ?.pokemonsprites?.[0]?.sprites ||
    "";
  const types = pokemon?.pokemontypes?.map((t) => t.type?.name) || [];
  const stats = pokemon?.pokemonstats || [];
  const evolutions =
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.map((s) => ({
      name: s.name,
      image: s.pokemons?.[0]?.pokemonsprites?.[0]?.sprites || null,
    })) || [];

  return {
    id,
    name,
    pokemon,
    pokemonName,
    loading,
    error: error,
    searchError: searchError,
    flavorText,
    sprite,
    types,
    stats,
    evolutions,
  };
}
