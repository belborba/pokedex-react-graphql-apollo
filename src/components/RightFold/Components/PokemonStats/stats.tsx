import { Content } from "@/components/BigScreen/style";
import { StatusBar } from "@/components/StatusBar";
import { useThemeContext } from "@/context/Pokemon";
import type { GetPokemonQuery } from "@/graphql/generated";
import { usePokemon } from "@/hooks/usePokemon";

export const Stats = () => {
  const { pokemonName } = useThemeContext();
  const { stats } = usePokemon(pokemonName);

  return (
    <Content>
      {stats?.length
        ? stats.map((s: GetPokemonQuery["pokemon"][0]["pokemonstats"][0]) => (
            <StatusBar
              key={s.stat?.name}
              label={s.stat?.name ?? "Unknown"}
              value={s.base_stat}
            />
          ))
        : null}
    </Content>
  );
};
