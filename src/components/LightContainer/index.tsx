import { StyledContainer } from "./style";
import { Circle } from "../Shared/Circle";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";

export const Light = () => {
  const { pokemonName } = useThemeContext();
  const { type } = usePokemon(pokemonName);
  const [start, end] = type
    ? TYPE_GRADIENTS[type as keyof typeof TYPE_GRADIENTS]
    : ["#89cff0", "#0099cc"];
  const bg = `linear-gradient(to bottom, ${start}, ${end})`;

  return (
    <div>
      <StyledContainer>
        <Circle $background={bg} />
        <Circle $size={30} $innerSize={20} $background={bg} />
        <Circle $size={30} $innerSize={20} $background={bg} />
        <Circle $size={30} $innerSize={20} $background={bg} />
      </StyledContainer>
    </div>
  );
};

// $ = Transient Props do Styled Components
// Props com $ não são repassadas pro DOM.
// Se você colocasse size={30}, o React tentaria
// renderizar <div size="30">, o que não é válido em HTML → daria warning.
// Com $size={30}, o styled usa o valor só no CSS, sem passar pro DOM final.
