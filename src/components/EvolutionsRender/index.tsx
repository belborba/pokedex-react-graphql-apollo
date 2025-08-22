import { Wrapper, Container } from "./style";

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

  // const handleImgClick = (e: React.FormEvent) => {
  //   if (inputValue !== "") {
  //     setPokemonName(inputValue.toLowerCase()); // seta no context
  //   }
  // };

  return (
    <Container>
      {validEvolutions.map((evo, index) => (
        <Wrapper key={index}>
          <img
            // onClick={() => handleImgClick(evo.name)}
            src={evo.image!}
            alt={evo.name}
          />
          <span>{evo.name}</span>
        </Wrapper>
      ))}
    </Container>
  );
};
