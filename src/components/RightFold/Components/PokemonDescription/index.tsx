import { Description } from "./description";
import { BigScreen } from "@/components/BigScreen";

export const PokemonDescription = () => {
  return (
    <>
      <BigScreen height="140px" title="Description">
        <Description />
      </BigScreen>
    </>
  );
};
