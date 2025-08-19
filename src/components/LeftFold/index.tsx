import { PokemonDisplay } from "../PokemonDisplay";
import { SearchBar } from "../SearchBar";
import { Pill } from "../Shared/PillPop";
import { LineDivider } from "../Shared/LineDivider";
import { Container } from "./style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const LeftFold = () => {
  const { pokemonName } = useThemeContext();
  const { type } = usePokemon(pokemonName);

  const displayName = pokemonName
    ? pokemonName[0].toUpperCase() + pokemonName.slice(1)
    : "Pokémon";

  return (
    <Container>
      <PokemonDisplay />
      <Pill $margin="-50px 0 0 0" $pokemonType={type}>
        {displayName}
      </Pill>
      <LineDivider />
      <SearchBar />
    </Container>
  );
};
