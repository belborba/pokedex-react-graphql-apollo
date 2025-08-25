import type { ReactNode } from "react";
import { BigScreenContainer, Title, Content } from "./style";
import { Loading } from "../Loading";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

interface BigScreenProps {
  title: string;
  height?: string;
  children: ReactNode;
}

export function BigScreen({ title, height, children }: BigScreenProps) {
  const { loading } = usePokemonDetails();

  return (
    <BigScreenContainer $height={height}>
      <Title>{title}</Title>
      <Content>{loading ? <Loading /> : children}</Content>
    </BigScreenContainer>
  );
}
