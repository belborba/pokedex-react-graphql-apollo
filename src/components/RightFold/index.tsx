import { RightContainer } from "../RightFold/style";
import { SmallScreen } from "../Shared/SmallScreen";
import { PokemonDescription } from "./Components/PokemonDescription";
import { PokemonStats } from "./Components/PokemonStats";
import { PokemonFamily } from "./Components/PokemonFamily";
import { PokemonId } from "./Components/PokemonId";

export const RightFold = () => {
  return (
    <RightContainer>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <SmallScreen>Database</SmallScreen>
        <SmallScreen width="60px">
          <PokemonId />
        </SmallScreen>
      </div>
      <PokemonDescription />
      <PokemonStats />
      <PokemonFamily />
    </RightContainer>
  );
};
