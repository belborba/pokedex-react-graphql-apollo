import styled from "styled-components";
import { Circle } from "../Shared/Circle";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";

type PokemonBackgroundProps = {
  $size?: number;
  $innerSize?: number;
  $innerBackground?: string;
  $pokemonType?: string | null;
};

export const DisplayWrap = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonBackground = styled(Circle)<PokemonBackgroundProps>`
  position: absolute;
  inset: 0;
  width: ${({ $size = 250 }) => `${$size}px`};
  height: ${({ $size = 250 }) => `${$size}px`};

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${({ $innerSize = 230 }) => `${$innerSize}px`};
    height: ${({ $innerSize = 230 }) => `${$innerSize}px`};
    background: ${({ $innerBackground, $pokemonType }) => {
      if ($innerBackground) return $innerBackground;
      if (
        $pokemonType &&
        TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS]
      ) {
        const [start, end] =
          TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS];
        return `linear-gradient(to bottom, ${start}, ${end})`;
      }
      return "linear-gradient(to bottom,#cecece,#aeaeae)"; // fallback verde
    }};
    margin: auto;
  }
`;

export const PokemonImage = styled.img`
  max-width: 100%;
  z-index: 1;
`;
