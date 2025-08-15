import { Circle, StyledContainer } from "./style";

export const Light = () => {
  return (
    <div>
      <StyledContainer>
        <Circle />
        <Circle size={30} innerSize={20} />
        <Circle size={30} innerSize={20} />
        <Circle size={30} innerSize={20} />
      </StyledContainer>
    </div>
  );
};
