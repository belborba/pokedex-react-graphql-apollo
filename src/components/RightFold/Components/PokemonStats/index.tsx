import { StatusBar } from "@/components/StatusBar";
import { BigScreen, DisplayWrap, Title, Text } from "../../style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon, type PokemonStat } from "@/hooks/usePokemon";

export const PokemonStats = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, stats } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DisplayWrap>
      <BigScreen>
        <Title>Stats</Title>
        <Text>
          {stats?.length ? (
            stats.map((s: PokemonStat) => (
              <StatusBar
                key={s.stat.name}
                label={s.stat.name}
                value={s.base_stat}
              />
            ))
          ) : (
            <p>No stats available for this Pokémon.</p>
          )}
        </Text>
      </BigScreen>
    </DisplayWrap>
  );
};
