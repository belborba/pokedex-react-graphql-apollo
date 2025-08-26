import { SmallScreen } from "@/components/Shared/SmallScreen";
import { TYPE_ICONS } from "@/constants/pokemonIcons";
import { Loading } from "@/components/Loading";
import { usePokemon } from "@/hooks/usePokemon";

export function PokemonTypes() {
  const { loading, types } = usePokemon();

  if (loading) return <Loading />;

  return (
    <>
      {types
        .filter((type): type is string => type !== null) // aqui o TypeScript entende que é string
        .map((type) => (
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
