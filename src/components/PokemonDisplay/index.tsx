import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export function PokemonDisplay() {
  const { pokemonName } = useThemeContext();
  const { loading, error, type, sprite } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>; // ou pode colocar um skeleton
  if (error) return <p>Error: {error.message}</p>;
  if (!sprite) return null; // garante que não renderiza nada sem sprite

  return (
    <DisplayWrap>
      <PokemonBackground $pokemonType={type} />
      <PokemonImage src={sprite} alt="Pokémon" />
    </DisplayWrap>
  );
}
