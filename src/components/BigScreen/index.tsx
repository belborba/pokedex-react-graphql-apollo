import { BigScreen, DisplayWrap } from "./style";

interface BigScreenProps {
  children: React.ReactNode;
}

export const BigScreenContainer = ({ children }: BigScreenProps) => {
  return (
    <DisplayWrap>
      <BigScreen>{children}</BigScreen>
    </DisplayWrap>
  );
};
