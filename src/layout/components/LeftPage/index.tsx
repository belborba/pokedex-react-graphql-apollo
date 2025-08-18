import { LeftFold } from "@/components/LeftFold";
import { Container, StyledCard } from "./style";
import { Light } from "@/components/LightContainer";

export const LeftPage = () => {
  return (
    <StyledCard>
      <Container>
        <Light />
        <LeftFold />
      </Container>
    </StyledCard>
  );
};
