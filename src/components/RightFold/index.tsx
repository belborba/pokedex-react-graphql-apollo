import { BigScreen, DisplayWrap } from "./style";
import { RightContainer } from "../RightFold/style";
import { SmallScreen } from "../Shared/SmallScreen";
import { Text, Title } from "./style";
import { StatusBar } from "../StatusBar";
import { Evolutions } from "../EvolutionsRender";
import { useThemeContext } from "@/context/useThemeContext";
import { usePokemon, type PokemonStat } from "@/hooks/usePokemon";

export const RightFold = () => {
  const { pokemonName } = useThemeContext();
  const { loading, error, id, stats, evolutions, flavorText } =
    usePokemon(pokemonName);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <RightContainer>
      <div>
        <SmallScreen>Database</SmallScreen>
        <SmallScreen>No. {(id ?? 1).toString().padStart(3, "0")}</SmallScreen>
      </div>

      <DisplayWrap>
        <BigScreen>
          <Title>Description</Title>
          <Text>{flavorText}</Text>
        </BigScreen>
      </DisplayWrap>

      <DisplayWrap>
        <BigScreen>
          <Title>Stats</Title>
          <Text>
            {stats?.length ? (
              stats.map((s: PokemonStat) => (
                <StatusBar
                  key={s.stat.name}
                  label={s.stat.name}
                  value={s.base_stat}
                />
              ))
            ) : (
              <p>No stats available for this Pokémon</p>
            )}
          </Text>
        </BigScreen>
      </DisplayWrap>

      <DisplayWrap>
        <BigScreen>
          <Title>Evolution Family</Title>
          <Evolutions evolutions={evolutions} />
        </BigScreen>
      </DisplayWrap>
    </RightContainer>
  );
};
