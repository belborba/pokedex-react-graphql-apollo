import { Evolutions } from "@/components/EvolutionsRender";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Family = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, evolutions } = usePokemon(pokemonName);

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
      <Evolutions evolutions={evolutions} />
    </>
  );
};
