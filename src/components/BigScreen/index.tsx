import type { ReactNode } from "react";
import { BigScreenContainer, Title, Content } from "./style";
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
      <Content>{loading ? <Loading /> : children}</Content>
    </BigScreenContainer>
  );
}
