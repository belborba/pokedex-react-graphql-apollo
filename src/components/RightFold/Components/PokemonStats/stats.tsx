import { Content } from "@/components/BigScreen/style";
import { StatusBar } from "@/components/StatusBar";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import type { GetPokemonQuery } from "@/graphql/generated";

export const Stats = () => {
  const { stats } = usePokemonDetails();

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
