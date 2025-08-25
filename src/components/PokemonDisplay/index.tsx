import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export function PokemonDisplay() {
  const { loading, types, sprite } = usePokemonDetails();

  // Pega apenas o primeiro tipo
  const firstType = types?.[0] ?? null;

  // Usa o primeiro tipo para buscar o gradiente
  const [start, end] = firstType
    ? TYPE_GRADIENTS[firstType as keyof typeof TYPE_GRADIENTS]
    : ["#89cff0", "#0099cc"];

  const bg = `linear-gradient(to bottom, ${start}, ${end})`;

  return (
    <DisplayWrap>
      <PokemonBackground $pokemonType={types} />
      {!loading && <PokemonImage src={sprite} alt="Pokémon" />}
    </DisplayWrap>
  );
}
