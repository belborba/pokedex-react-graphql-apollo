// Tag.tsx
import styled from "styled-components";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";

type PillProps = {
  $ringInset?: number; // distância da borda externa até o anel (px)
  $ringWidth?: number; // espessura do anel (px)
  $gradient?: string; // gradiente do anel
  $margin?: string | number; // margem
  $pokemonType?: string | null; // tipo do pokémon
};

export const Pill = styled.div<PillProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  border-radius: 9999px;
  background: #fff;
  color: #333;
  font-size: 1.1rem;
  box-shadow: 0px 0px 5px 0 #cfcfd9;
  margin: ${({ $margin }) =>
    typeof $margin === "number" ? `${$margin}px` : $margin || "0"};
  z-index: 1;
  min-width: 40%;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: ${({ $ringInset = 4 }) => `${$ringInset}px`};
    padding: ${({ $ringWidth = 2 }) => `${$ringWidth}px`};
    border-radius: 100px;
    background: ${({ $gradient, $pokemonType }) => {
      if ($gradient) return $gradient;
      if (
        $pokemonType &&
        TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS]
      ) {
        const [start, end] =
          TYPE_GRADIENTS[$pokemonType as keyof typeof TYPE_GRADIENTS];
        return `linear-gradient(90deg, ${start}, ${end}, ${start})`;
      }
      return "linear-gradient(90deg,#c7c7c7,#4e4e4e,#c7c7c7)"; // fallback
    }};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;

// -webkit-mask
// O gradiente é aplicado, mas a máscara recorta o centro → só sobra o contorno.
// Esse código está criando um anel (borda circular) com gradiente, sem precisar usar border ou border-image.
// Ele funciona assim:
// Pinta todo o fundo com o gradiente.
// Usa a máscara para "cortar" o centro, sobrando só a borda.
