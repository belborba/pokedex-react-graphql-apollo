import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import Poke from "../../assets/poke.png";

export function PokemonDisplay() {
  const { pokemonName } = useThemeContext();
  const { type, sprite } = usePokemon(pokemonName);

  return (
    <DisplayWrap>
      <PokemonBackground $pokemonType={type} />
      <PokemonImage src={sprite || Poke} alt="Pokémon" />
    </DisplayWrap>
  );
}
