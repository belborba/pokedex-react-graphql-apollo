import { useThemeContext } from "@/context/Pokemon";
import { usePokemon } from "@/hooks/usePokemon";
import { SmallScreen } from "@/components/Shared/SmallScreen";
import { TYPE_ICONS } from "@/constants/pokemonIcons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function PokemonTypes() {
  const { pokemonName } = useThemeContext();
  const { loading, error, types } = usePokemon(pokemonName);

  if (loading)
    return (
      <DotLottieReact
        style={{ width: "30px", height: "30px" }}
        src="https://lottie.host/3c062dba-46ca-4470-93f8-b811143f22fe/YDf72lc8s3.lottie"
        loop
        autoplay
      />
    );
  if (error) return <p>Error: {error.message}</p>;

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
