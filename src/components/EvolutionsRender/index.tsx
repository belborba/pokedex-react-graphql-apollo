// EvolutionsRender.tsx
import { Wrapper, Container } from "./style";
import React from "react";

type Evolution = {
  name: string;
  image: string | null;
};

type EvolutionsProps = {
  evolutions: Evolution[];
};

export const Evolutions: React.FC<EvolutionsProps> = ({ evolutions }) => {
  const validEvolutions = evolutions.filter((evo) => evo.image);

  if (validEvolutions.length === 0) return null;

  return (
    <Container>
      {validEvolutions.map((evo, index) => (
        <Wrapper key={index}>
          <img src={evo.image!} alt={evo.name} />
          <span>{evo.name}</span>
        </Wrapper>
      ))}
    </Container>
  );
};
