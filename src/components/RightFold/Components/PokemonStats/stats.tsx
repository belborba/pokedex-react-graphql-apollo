import { StatusBar } from "@/components/StatusBar";
import { useThemeContext } from "@/context/useThemeContext";
import type { GetPokemonQuery } from "@/graphql/generated";
import { usePokemon } from "@/hooks/usePokemon";

export const Stats = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, stats } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {stats?.length ? (
        stats.map((s: GetPokemonQuery["pokemon"][0]["pokemonstats"][0]) => (
          <StatusBar
            key={s.stat?.name}
            label={s.stat?.name ?? "Unknown"}
            value={s.base_stat}
          />
        ))
      ) : (
        <p>No stats available for this Pokémon.</p>
      )}
    </>
  );
};
