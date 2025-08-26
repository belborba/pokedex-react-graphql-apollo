import { Content } from "@/components/BigScreen/style";
import { usePokemon } from "@/hooks/usePokemon";

export const Description = () => {
  const { flavorText } = usePokemon();

  return <Content>{flavorText}</Content>;
};
