import { BigScreen, DisplayWrap } from "./style";
import { RightContainer } from "../RightFold/style";
import { SmallScreen } from "../Shared/SmallScreen";
import { Text } from "./style";
import { Title } from "./style";
import { StatusBar } from "../StatusBar";
import { Evolutions } from "../EvolutionsRender";

export const RightFold = () => {
  return (
    <RightContainer>
      <div>
        <SmallScreen>Database</SmallScreen>
        <SmallScreen>No. 001</SmallScreen>
      </div>
      <DisplayWrap>
        <BigScreen>
          <Title>Description</Title>
          <Text>
            Ivysaur is a Grass/Poison type Pokémon and the evolved form of
            Bulbasaur, eventually evolving into Venusaur.
          </Text>
        </BigScreen>
      </DisplayWrap>
      <DisplayWrap>
        <BigScreen>
          <Title>Stats</Title>
          <Text>
            <StatusBar label="Hp" value={50} />
            <StatusBar label="Attack" value={50} />
            <StatusBar label="Defense" value={50} />
            <StatusBar label="Speed" value={50} />
          </Text>
        </BigScreen>
      </DisplayWrap>
      <DisplayWrap>
        <BigScreen>
          <Title>Evolution Family</Title>
          <Evolutions
            evolutions={[
              {
                name: "Bulbasaur",
                image:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              },
              {
                name: "Ivysaur",
                image:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              },
              {
                name: "Venusaur",
                image:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              },
            ]}
          />
        </BigScreen>
      </DisplayWrap>
    </RightContainer>
  );
};
