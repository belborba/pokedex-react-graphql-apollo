import { Text } from "../../style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const Description = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, flavorText } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Text>{flavorText}</Text>
    </>
  );
};
