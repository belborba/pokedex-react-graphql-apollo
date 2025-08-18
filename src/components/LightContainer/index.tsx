import { StyledContainer } from "./style";
import { Circle } from "../Shared/Circle";

export const Light = () => {
  return (
    <div>
      <StyledContainer>
        <Circle />
        <Circle $size={30} $innerSize={20} />
        <Circle $size={30} $innerSize={20} />
        <Circle $size={30} $innerSize={20} />
      </StyledContainer>
    </div>
  );
};

// $ = Transient Props do Styled Components
// Props com $ não são repassadas pro DOM.
// Se você colocasse size={30}, o React tentaria
// renderizar <div size="30">, o que não é válido em HTML → daria warning.
// Com $size={30}, o styled usa o valor só no CSS, sem passar pro DOM final.
