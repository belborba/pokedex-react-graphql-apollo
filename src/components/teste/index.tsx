import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f0f4f8;
  border-radius: 1rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

const PokemonName = styled.h2`
  margin: 1rem 0;
`;

const Types = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TypeBadge = styled.span<{ type: string }>`
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: ${({ type }) => (type === "Plant" ? "#8bc34a" : "#9c27b0")};
  color: #000;
  font-weight: bold;
`;

const Search = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;

  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #3f51b5;
    color: black;
    border: none;
    cursor: pointer;
  }
`;

const Database = styled.div`
  background: #c8e6c9;
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
`;

const PokedexNumber = styled.div`
  background: #e0e0e0;
  display: inline-block;
  padding: 0.3rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const Description = styled.p`
  margin: 1rem 0;
`;

const Stats = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Progress = styled.progress`
  width: 100%;
  height: 10px;
`;

const EvolutionFamily = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

interface Pokemon {
  name: string;
  types: string[];
  description: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  evolution: string[];
  image: string;
}

interface PokedexProps {
  pokemon: Pokemon;
}

export function Pokedex({ pokemon }: PokedexProps) {
  return (
    <Container>
      <LeftColumn>
        <PokemonImage src={pokemon.image} alt={pokemon.name} />
        <PokemonName>{pokemon.name}</PokemonName>
        <Types>
          {pokemon.types.map((type) => (
            <TypeBadge key={type} type={type}>
              {type}
            </TypeBadge>
          ))}
        </Types>
        <Search>
          <input placeholder="Research for a Pokemon..." />
          <button>🔍</button>
        </Search>
      </LeftColumn>

      <RightColumn>
        <Database>Database</Database>
        <PokedexNumber>No. 002</PokedexNumber>

        <Description>{pokemon.description}</Description>

        <Stats>
          <Stat>
            <span>HP</span>
            <Progress value={pokemon.stats.hp} max={100} />
          </Stat>
          <Stat>
            <span>Attack</span>
            <Progress value={pokemon.stats.attack} max={100} />
          </Stat>
          <Stat>
            <span>Defense</span>
            <Progress value={pokemon.stats.defense} max={100} />
          </Stat>
          <Stat>
            <span>Speed</span>
            <Progress value={pokemon.stats.speed} max={100} />
          </Stat>
        </Stats>

        <EvolutionFamily>
          {pokemon.evolution.map((evo) => (
            <Evolution key={evo}>
              <img src={`/${evo}.png`} alt={evo} />
              <span>{evo}</span>
            </Evolution>
          ))}
        </EvolutionFamily>
      </RightColumn>
    </Container>
  );
}
