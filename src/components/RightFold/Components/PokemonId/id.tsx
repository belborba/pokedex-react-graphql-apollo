import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";

export const Id = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, id } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>No. {(id ?? 1).toString().padStart(3, "0")}</p>;
};
