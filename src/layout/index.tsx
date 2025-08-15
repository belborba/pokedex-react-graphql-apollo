import { GradientBarContainer } from "@/components/GradientLine";
import { LeftPage } from "./components/LeftPage";
import { RightPage } from "./components/RightPage";
import { LayoutStyle, PokedexWrapper } from "./style";

export const Pokedex = () => {
  return (
    <>
      <GradientBarContainer />
      <LayoutStyle>
        <PokedexWrapper>
          <LeftPage />
          <RightPage />
        </PokedexWrapper>
      </LayoutStyle>
      <GradientBarContainer />
    </>
  );
};
