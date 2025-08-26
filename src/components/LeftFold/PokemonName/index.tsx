import { usePokemon } from "@/hooks/usePokemon";
import { Pill } from "../../Shared/PillPop";

type PokemonNameProps = {
  margin?: string;
};

export const PokemonName = ({ margin }: PokemonNameProps) => {
  const { name, types } = usePokemon();

  const firstType = types?.[0] ?? null;

  const displayName = name ? name[0].toUpperCase() + name.slice(1) : "Pokémon";

  return (
    <Pill $margin={margin ?? "-10px 0 0 0"} $pokemonType={firstType}>
      {displayName}
    </Pill>
  );
};
