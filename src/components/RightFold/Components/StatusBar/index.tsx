import React, { useEffect, useState } from "react";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";
import { Wrapper, Label, BarContainer, BarFill, Value } from "./style";

interface StatusBarProps {
  label: string;
  value: number;
  types: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  label,
  value,
  types,
}) => {
  const [start, end] = types
    ? TYPE_GRADIENTS[types as keyof typeof TYPE_GRADIENTS]
    : ["#ddd", "#aaa"];

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(0);
    const id = setTimeout(
      () => setDisplayValue(Math.max(0, Math.min(100, value))),
      20
    );
    return () => clearTimeout(id);
  }, [value, types]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <BarContainer>
        <BarFill $value={displayValue} $start={start} $end={end} />
      </BarContainer>
      <Value>{value}</Value>
    </Wrapper>
  );
};
