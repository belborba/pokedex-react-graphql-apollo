import { Pill } from "../../Shared/PillPop";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

type PokemonNameProps = {
  margin?: string;
};

export const PokemonName = ({ margin }: PokemonNameProps) => {
  const { pokemonName } = useThemeContext();
  const { type } = usePokemon(pokemonName);

  const displayName = pokemonName
    ? pokemonName[0].toUpperCase() + pokemonName.slice(1)
    : "Pokémon";

  return (
    <Pill $margin={margin ?? "-40px 0 0 0"} $pokemonType={type}>
      {displayName}
    </Pill>
  );
};
