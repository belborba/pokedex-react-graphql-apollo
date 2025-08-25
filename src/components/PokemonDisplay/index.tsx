import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export function PokemonDisplay() {
  const { loading, types, sprite } = usePokemonDetails();

  // Pega apenas o primeiro tipo
  const firstType = types?.[0] ?? null;

  return (
    <DisplayWrap>
      <PokemonBackground $pokemonType={firstType} />
      {!loading && <PokemonImage src={sprite} alt="Pokémon" />}
    </DisplayWrap>
  );
}
