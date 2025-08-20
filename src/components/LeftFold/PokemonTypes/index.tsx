import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { SmallScreen } from "@/components/Shared/SmallScreen";
import { TYPE_ICONS } from "@/constants/pokemonIcons";

export function PokemonTypes() {
  const { pokemonName } = useThemeContext();
  const { loading, error, types } = usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {types.map((type: string) => (
        <SmallScreen key={type}>
          <img
            src={TYPE_ICONS[type]}
            alt={type}
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          {type[0].toUpperCase() + type.slice(1)}
        </SmallScreen>
      ))}
    </>
  );
}
