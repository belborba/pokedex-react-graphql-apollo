import { Card, Wrapper } from "./style";

type Evolution = {
  name: string;
  image: string | null;
};

type EvolutionsProps = {
  evolutions: Evolution[];
};

export const Evolutions: React.FC<EvolutionsProps> = ({ evolutions }) => {
  // Filtra apenas os que têm imagem
  const validEvolutions = evolutions.filter((evo) => evo.image);

  // Se não tiver nenhuma evolução com imagem, não renderiza nada
  if (validEvolutions.length === 0) return null;

  return (
    <Wrapper>
      {validEvolutions.map((evo, index) => (
        <Card key={index}>
          <img src={evo.image!} alt={evo.name} />
          <span>{evo.name}</span>
        </Card>
      ))}
    </Wrapper>
  );
};
