import { BigScreenContainer } from "@/components/BigScreen";
import { Title } from "../../style";
import { Stats } from "./stats";

export const PokemonStats = () => {
  return (
    <BigScreenContainer>
      <Title>Stats</Title>
      <Stats />
    </BigScreenContainer>
  );
};
