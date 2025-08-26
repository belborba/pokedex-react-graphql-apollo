import { PokemonDisplay } from "./PokemonDisplay";
import { SearchBar } from "./SearchBar";
import { LineDivider } from "../Shared/LineDivider";
import { Container, ContainerTypes } from "./style";
import { PokemonName } from "./PokemonName";
import { PokemonTypes } from "./PokemonTypes";

export const LeftFold = () => {
  return (
    <Container>
      <PokemonDisplay />
      <PokemonName />
      <ContainerTypes>
        <PokemonTypes />
      </ContainerTypes>
      <LineDivider />
      <SearchBar />
    </Container>
  );
};
