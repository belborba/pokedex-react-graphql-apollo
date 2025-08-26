import { Family } from "./family";
import { BigScreen } from "@/components/BigScreen";

export const PokemonFamily = () => {
  return (
    <>
      <BigScreen height="150px" title="Evolution Family">
        <Family />
      </BigScreen>
    </>
  );
};
