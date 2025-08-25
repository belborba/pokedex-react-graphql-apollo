import styled from "styled-components";

interface CircleProps {
  $size?: number | string; // tamanho do círculo externo
  $innerSize?: number | string; // tamanho do círculo interno (::after)
  $background?: string; // cor ou gradiente do círculo interno
}

export const Circle = styled.div<CircleProps>`
  width: ${({ $size = 60 }) =>
    typeof $size === "number" ? `${$size}px` : $size};
  height: ${({ $size = 60 }) =>
    typeof $size === "number" ? `${$size}px` : $size};
  background: #eff5ff;
  border-radius: 50%;
  position: relative;
  box-shadow: 3px 3px 16px 0 #ffffff inset, 0px 0px 5px #8591a690;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ $innerSize = 48 }) =>
      typeof $innerSize === "number" ? `${$innerSize}px` : $innerSize};
    height: ${({ $innerSize = 48 }) =>
      typeof $innerSize === "number" ? `${$innerSize}px` : $innerSize};
    background: ${({
      $background = "linear-gradient(to bottom, #89cff0, #0099cc)",
    }) => $background};
    border-radius: 50%;
  }
`;

//  width: ${({ $innerSize = 48 }) =>
// typeof $innerSize === "number" ? `${$innerSize}px` : $innerSize};

// Arrow Function que recebe uma Prop o innerSize (usando desestructuring)
// Pega a prop $innerSize de dentro das props.
// Se não vier nada, usa o valor default 48.
