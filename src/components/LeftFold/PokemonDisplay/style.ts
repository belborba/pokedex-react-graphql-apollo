import styled from "styled-components";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";
import { Circle } from "@/components/Shared/Circle";

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
    background: ${({ $pokemonType }) => {
      if (
        $pokemonType &&
        TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS]
      ) {
        const [start, end] =
          TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS];
        return `linear-gradient(to bottom, ${start}, ${end})`;
      }
      return "linear-gradient(to bottom, #c7c7c7, #4e4e4e)"; // fallback
    }};
    margin: auto;
  }
`;

export const PokemonImage = styled.img`
  max-width: 100%;
  z-index: 1;
`;
