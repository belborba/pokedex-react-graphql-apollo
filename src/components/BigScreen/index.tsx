import type { ReactNode } from "react";
import { BigScreenContainer, Title } from "./style";
import { Loading } from "../Loading";
import { usePokemon } from "@/hooks/usePokemon";

interface BigScreenProps {
  title: string;
  height?: string;
  children: ReactNode;
}

export function BigScreen({ title, height, children }: BigScreenProps) {
  const { loading } = usePokemon();

  return (
    <BigScreenContainer $height={height}>
      <Title>{title}</Title>
      {loading ? <Loading /> : children}
    </BigScreenContainer>
  );
}
