import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const Id = () => {
  const { pokemonName } = useThemeContext();
  const { error, id } = usePokemon(pokemonName);

  if (error) return <p>Error: {error.message}</p>;

  return <p>No. {(id ?? "...").toString().padStart(3, "0")}</p>;
};
