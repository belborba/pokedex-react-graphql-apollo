import { Family } from "./family";
import { BigScreen, Title } from "@/components/Shared/BigScreen";

export const PokemonFamily = () => {
  return (
    <BigScreen height="170px">
      <Title>Evolution Family</Title>
      <Family />
    </BigScreen>
  );
};
