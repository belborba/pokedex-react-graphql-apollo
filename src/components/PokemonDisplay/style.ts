import styled from "styled-components";
import { Circle } from "../Shared/Circle";

type PokemonBackgroundProps = {
  size?: number;
  innerSize?: number;
  innerBackground?: string;
};

export const DisplayWrap = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonBackground = styled(Circle)<PokemonBackgroundProps>`
  position: absolute;
  inset: 0;
  width: ${({ size = 300 }) => `${size}px`};
  height: ${({ size = 300 }) => `${size}px`};

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${({ innerSize = 285 }) => `${innerSize}px`};
    height: ${({ innerSize = 285 }) => `${innerSize}px`};
    background: ${({
      innerBackground = "linear-gradient(to bottom, #D3E7D8, #5DBF66)",
    }) => innerBackground};
    margin: auto;
  }
`;

export const PokemonImage = styled.img`
  position: relative;
  max-width: 80%;
  z-index: 1;
`;
