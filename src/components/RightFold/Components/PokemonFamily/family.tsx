import { Evolutions } from "@/components/EvolutionsRender";
import { useThemeContext } from "@/context/Pokemon";
import { usePokemon } from "@/hooks/usePokemon";

export const Family = () => {
  const { pokemonName } = useThemeContext();
  const { evolutions } = usePokemon(pokemonName);

  return <Evolutions evolutions={evolutions} />;
};
