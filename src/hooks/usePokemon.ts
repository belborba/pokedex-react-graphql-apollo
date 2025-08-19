import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "@/graphql/pokemon";

export interface PokemonStat {
  stat: { name: string };
  base_stat: number;
}

export function usePokemon(name: string | null | undefined) {
  const { data, loading, error } = useQuery(GET_POKEMON, {
    variables: { name: name ?? "" },
    skip: !name,
  });

  const pokemon = data?.pokemon?.[0];
  const id = pokemon?.id as number | undefined;
  const type: string | null = pokemon?.pokemontypes?.[0]?.type?.name ?? null;
  const stats: PokemonStat[] = pokemon?.pokemonstats ?? [];
  const sprite: string | null = pokemon?.pokemonsprites?.[0]?.sprites ?? null;

  const evolutions =
    pokemon?.pokemonspecy?.evolutionchain?.pokemonspecies?.map((s: any) => ({
      name: s.name as string,
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
    stats,
    sprite,
    evolutions,
    flavorText,
  };
}
