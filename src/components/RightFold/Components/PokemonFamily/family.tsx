import { Evolutions } from "@/components/RightFold/Components/EvolutionsRender";
import { usePokemon } from "@/hooks/usePokemon";

export const Family = () => {
  const { evolutions } = usePokemon();
  return <Evolutions evolutions={evolutions} />;
};
