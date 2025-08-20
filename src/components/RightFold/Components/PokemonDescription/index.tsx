import { Description } from "./description";
import { BigScreen, Title } from "@/components/Shared/BigScreen";

export const PokemonDescription = () => {
  return (
    <BigScreen height="120px">
      <Title>Description</Title>
      <Description />
    </BigScreen>
  );
};
