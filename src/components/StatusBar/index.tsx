import { BarContainer, BarFill, Label, Value, Wrapper } from "./style";

interface StatusBarProps {
  label: string;
  value: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({ label, value }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <BarContainer>
        <BarFill $value={value} />
      </BarContainer>
      <Value>{value}</Value>
    </Wrapper>
  );
};
