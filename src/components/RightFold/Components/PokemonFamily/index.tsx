import { Evolutions } from "@/components/EvolutionsRender";
import { BigScreen, DisplayWrap, Title } from "../../style";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const PokemonFamily = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, evolutions } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DisplayWrap>
      <BigScreen>
        <Title>Evolution Family</Title>
        <Evolutions evolutions={evolutions} />
      </BigScreen>
    </DisplayWrap>
  );
};
