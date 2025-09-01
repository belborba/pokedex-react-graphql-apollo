// EvolutionsRender.tsx
import { pokemonNameVar } from "@/graphql/reactiveVars";
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

  const handleClick = (name: string) => {
    pokemonNameVar(name);
  };

  return (
    <Container $count={validEvolutions.length}>
      {validEvolutions.map((evo, index) => (
        <Wrapper key={index}>
          <img
            style={{ cursor: "pointer" }}
            src={evo.image!}
            alt={evo.name}
            onClick={() => {
              handleClick(evo.name);
            }}
          />
          <span>{evo.name}</span>
        </Wrapper>
      ))}
    </Container>
  );
};
