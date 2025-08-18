import { PokemonDisplay } from "../PokemonDisplay";
import { SearchBar } from "../SearchBar";
import { Pill } from "../Shared/PillPop";
import { LineDivider } from "../Shared/LineDivider";
import { Container } from "./style";

export const LeftFold = () => {
  return (
    <>
      <Container>
        <PokemonDisplay />
        <Pill $margin="-50px 0px 0px 0px">Isabel</Pill>
        <LineDivider />
        <SearchBar />
      </Container>
    </>
  );
};
