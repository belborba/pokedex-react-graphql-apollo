import { StyledContainer } from "./style";
import { Circle } from "../Shared/Circle";
import { TYPE_GRADIENTS } from "@/constants/pokemonTypes";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export const Light = () => {
  const { types } = usePokemonDetails();

  // Pega apenas o primeiro tipo
  const firstType = types?.[0] ?? null;

  // Usa o primeiro tipo para buscar o gradiente
  const [start, end] = firstType
    ? TYPE_GRADIENTS[firstType as keyof typeof TYPE_GRADIENTS]
    : ["#89cff0", "#0099cc"];

  const bg = `linear-gradient(to bottom, ${start}, ${end})`;

  return (
    <StyledContainer>
      <Circle />
      <Circle $size={30} $innerSize={20} $background={bg} />
      <Circle $size={30} $innerSize={20} $background={bg} />
      <Circle $size={30} $innerSize={20} $background={bg} />
    </StyledContainer>
  );
};
