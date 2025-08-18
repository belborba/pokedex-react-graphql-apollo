// Tag.tsx
import styled from "styled-components";

type PillProps = {
  ringInset?: number; // distância da borda externa até o anel (px)
  ringWidth?: number; // espessura do anel (px)
  gradient?: string; // gradiente do anel
  $margin?: string | number; // margem
};

export const Pill = styled.div<PillProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  border-radius: 9999px;
  background: #fff;
  color: #333;
  font-weight: 600;
  font-size: 1.25rem;
  box-shadow: 5px 5px 20px 0 #cfcfd9;
  margin: ${({ $margin }) =>
    typeof $margin === "number" ? `${$margin}px` : $margin || "0"};

  &::before {
    content: "";
    position: absolute;
    inset: ${({ ringInset = 4 }) => `${ringInset}px`};
    padding: ${({ ringWidth = 2 }) => `${ringWidth}px`};
    border-radius: 9999px;
    background: ${({ gradient }) =>
      gradient ?? "linear-gradient(90deg, #b7f3c7, #31c75f, #b7f3c7)"};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

// -webkit-mask
// O gradiente é aplicado, mas a máscara recorta o centro → só sobra o contorno.
// Esse código está criando um anel (borda circular) com gradiente, sem precisar usar border ou border-image.
// Ele funciona assim:
// Pinta todo o fundo com o gradiente.
// Usa a máscara para "cortar" o centro, sobrando só a borda.
