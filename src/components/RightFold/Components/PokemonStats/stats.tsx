import { StatusBar } from "@/components/StatusBar";
import { useThemeContext } from "@/context/useThemeContext";
import type { GetPokemonQuery } from "@/graphql/generated";
import { usePokemon } from "@/hooks/usePokemon";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Stats = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, stats } = usePokemon(pokemonName);

  if (loading)
    return (
      <DotLottieReact
        style={{ width: "30px", height: "30px" }}
        src="https://lottie.host/3c062dba-46ca-4470-93f8-b811143f22fe/YDf72lc8s3.lottie"
        loop
        autoplay
      />
    );
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
