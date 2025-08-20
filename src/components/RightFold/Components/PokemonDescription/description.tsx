import { Content } from "@/components/Shared/BigScreen";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon } from "@/hooks/usePokemon";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Description = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, flavorText } = usePokemon(pokemonName);

  return (
    <Content>
      {loading && (
        <DotLottieReact
          style={{ width: "30px", height: "30px" }}
          src="https://lottie.host/3c062dba-46ca-4470-93f8-b811143f22fe/YDf72lc8s3.lottie"
          loop
          autoplay
        />
      )}
      {error && <p>Error: {error.message}</p>}
      {flavorText}
    </Content>
  );
};
