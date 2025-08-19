import React, { useEffect, useState } from "react";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { Wrapper, Label, BarContainer, BarFill, Value } from "./style";

interface StatusBarProps {
  label: string;
  value: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({ label, value }) => {
  const { pokemonName } = useThemeContext();
  const { type } = usePokemon(pokemonName);

  const [start, end] = type
    ? TYPE_GRADIENTS[type as keyof typeof TYPE_GRADIENTS]
    : ["#ddd", "#aaa"];

  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    setDisplayValue(0);
    const id = setTimeout(
      () => setDisplayValue(Math.max(0, Math.min(100, value))),
      20
    );
    return () => clearTimeout(id);
  }, [value, type]);

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
