import { LeftPage } from "./components/LeftPage";
import { RightPage } from "./components/RightPage";
import { LayoutStyle, PokedexWrapper } from "./style";
import { GradientLine } from "@/components/Shared/GradientLine";

export const Pokedex = () => {
  return (
    <>
      <GradientLine />
      <LayoutStyle>
        <PokedexWrapper>
          <LeftPage />
          <RightPage />
        </PokedexWrapper>
      </LayoutStyle>
      <GradientLine />
    </>
  );
};
