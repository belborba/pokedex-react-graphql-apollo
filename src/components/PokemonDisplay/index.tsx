import { DisplayWrap, PokemonImage, PokemonBackground } from "./style";
import { useThemeContext } from "@/context/Pokemon";
import { usePokemon } from "@/hooks/usePokemon";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function PokemonDisplay() {
  const { pokemonName } = useThemeContext();
  const { loading, error, type, sprite } = usePokemon(pokemonName);

  // if (!sprite) return null; // garante que não renderiza nada sem sprite

  return (
    <DisplayWrap>
      {loading && (
        <DotLottieReact
          style={{ width: "30px", height: "30px" }}
          src="https://lottie.host/3c062dba-46ca-4470-93f8-b811143f22fe/YDf72lc8s3.lottie"
          loop
          autoplay
        />
      )}
      <PokemonBackground $pokemonType={type} />
      {error && <p>Error: {error.message}</p>}
      {!loading && <PokemonImage src={sprite} alt="Pokémon" />}
    </DisplayWrap>
  );
}
