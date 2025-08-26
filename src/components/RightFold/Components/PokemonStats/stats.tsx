import { Content } from "@/components/BigScreen/style";
import { StatusBar } from "@/components/RightFold/Components/StatusBar";
import type { GetPokemonQuery } from "@/graphql/generated";
import { usePokemon } from "@/hooks/usePokemon";

export const Stats = () => {
  const { stats, types } = usePokemon();

  // Pega apenas o primeiro tipo
  const firstType = types?.[0] ?? null;

  return (
    <Content>
      {stats?.length
        ? stats.map((s: GetPokemonQuery["pokemon"][0]["pokemonstats"][0]) => (
            <StatusBar
              key={s.stat?.name}
              label={s.stat?.name ?? "Unknown"}
              value={s.base_stat}
              types={firstType}
            />
          ))
        : null}
    </Content>
  );
};
