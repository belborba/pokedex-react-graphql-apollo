import { Evolutions } from "@/components/EvolutionsRender";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export const Family = () => {
  const { evolutions } = usePokemonDetails();
  return <Evolutions evolutions={evolutions} />;
};
