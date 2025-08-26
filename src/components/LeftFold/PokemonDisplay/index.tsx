import { usePokemon } from "@/hooks/usePokemon";
import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";

export function PokemonDisplay() {
  const { loading, types, sprite } = usePokemon();

  // Pega apenas o primeiro tipo
  const firstType = types?.[0] ?? null;

  return (
    <DisplayWrap>
      <PokemonBackground $pokemonType={firstType} />
      {!loading && <PokemonImage src={sprite} alt="Pokémon" />}
    </DisplayWrap>
  );
}
