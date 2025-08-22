import { Description } from "./description";
import { BigScreen } from "@/components/BigScreen";

export const PokemonDescription = () => {
  return (
    <>
      <BigScreen height="120px" title="Description">
        <Description />
      </BigScreen>
    </>
  );
};
