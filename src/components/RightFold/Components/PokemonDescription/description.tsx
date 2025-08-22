import { Content } from "@/components/Shared/BigScreen";
import { useThemeContext } from "@/context/Pokemon";
import { usePokemon } from "@/hooks/usePokemon";

export const Description = () => {
  const { pokemonName } = useThemeContext();
  const { flavorText } = usePokemon(pokemonName);

  return <Content>{flavorText}</Content>;
};
