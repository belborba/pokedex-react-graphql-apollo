import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import Poke from "../../assets/poke.png";

export function PokemonDisplay() {
  return (
    <DisplayWrap>
      <PokemonBackground />
      <PokemonImage src={Poke} alt="Pokémon" />
    </DisplayWrap>
  );
}
