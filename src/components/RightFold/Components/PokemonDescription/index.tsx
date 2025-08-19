import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { BigScreen, DisplayWrap, Title, Text } from "../../style";

export const PokemonDescription = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, flavorText } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DisplayWrap>
      <BigScreen>
        <Title>Description</Title>
        <Text>{flavorText}</Text>
      </BigScreen>
    </DisplayWrap>
  );
};
