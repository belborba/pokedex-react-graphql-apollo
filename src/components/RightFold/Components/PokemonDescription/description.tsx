import { Content } from "@/components/BigScreen/style";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export const Description = () => {
  const { flavorText } = usePokemonDetails();

  return <Content>{flavorText}</Content>;
};
