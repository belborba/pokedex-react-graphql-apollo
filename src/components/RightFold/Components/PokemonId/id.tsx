import { usePokemonDetails } from "@/hooks/usePokemonDetails";

export const Id = () => {
  const { id } = usePokemonDetails();

  return <p>No. {(id ?? "...").toString().padStart(3, "0")}</p>;
};
