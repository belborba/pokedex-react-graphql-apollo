import { Stats } from "./stats";
import { BigScreen, Content, Title } from "@/components/Shared/BigScreen";

export const PokemonStats = () => {
  return (
    <BigScreen height="140px">
      <Title>Stats</Title>
      <Content>
        <Stats />
      </Content>
    </BigScreen>
  );
};
