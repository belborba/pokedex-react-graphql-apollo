import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { Pill } from "../../Shared/PillPop";

type PokemonNameProps = {
  margin?: string;
};

export const PokemonName = ({ margin }: PokemonNameProps) => {
  const { pokemonName, types } = usePokemonDetails();

  const firstType = types?.[0] ?? null;

  const displayName = pokemonName
    ? pokemonName[0].toUpperCase() + pokemonName.slice(1)
    : "Pokémon";

  return (
    <Pill $margin={margin ?? "-40px 0 0 0"} $pokemonType={firstType}>
      {displayName}
    </Pill>
  );
};
