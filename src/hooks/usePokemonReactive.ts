// src/hooks/usePokemonReactive.ts
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/pokemon";
import { pokemonNameVar, pokemonDataVar } from "@/graphql/reactiveVars";
import { useEffect } from "react";

export function usePokemonReactive() {
  const name = pokemonNameVar();

  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name },
    skip: !name,
    fetchPolicy: "cache-and-network",
  });

  // Atualiza a variável reativa sempre que os dados chegam
  useEffect(() => {
    if (data) {
      pokemonDataVar(data);
    }
  }, [data]);

  return { loading, error, pokemon: data?.pokemon?.[0] ?? null };
}
