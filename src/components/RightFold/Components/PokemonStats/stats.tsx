import { StatusBar } from "@/components/RightFold/Components/StatusBar";
import type { GetPokemonQuery } from "@/graphql/generated";
import { usePokemon } from "@/hooks/usePokemon";
import { Container } from "../StatusBar/style";

export const Stats = () => {
  const { stats, types } = usePokemon();

  const firstType = types?.[0] ?? "";

  return (
    <Container>
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
    </Container>
  );
};
