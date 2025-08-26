import { usePokemon } from "@/hooks/usePokemon";

export const Id = () => {
  const { id } = usePokemon();

  return <p>No. {(id ?? "...").toString().padStart(3, "0")}</p>;
};
