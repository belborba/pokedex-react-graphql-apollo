import { Evolutions } from "@/components/EvolutionsRender";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const Family = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, evolutions } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Evolutions evolutions={evolutions} />
    </>
  );
};
