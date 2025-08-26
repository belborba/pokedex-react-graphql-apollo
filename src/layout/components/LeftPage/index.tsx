import { LeftFold } from "@/components/LeftFold";
import { Light } from "@/components/LightContainer";
import { LeftContainer } from "./style";

export const LeftPage = () => {
  return (
    <LeftContainer>
      <Light />
      <LeftFold />
    </LeftContainer>
  );
};
