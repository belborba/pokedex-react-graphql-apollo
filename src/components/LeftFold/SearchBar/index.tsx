import { ContainerWrap, Content, SearchButton, SearchInput } from "./style";
import { useState } from "react";
import { pokemonNameVar } from "@/graphql/reactiveVars";
import { usePokemon } from "@/hooks/usePokemon";

export function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { searchError } = usePokemon(); // pega o erro do hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      pokemonNameVar(inputValue.toLowerCase()); // atualiza reactive var do Apollo
      setInputValue(""); // limpa o input
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ContainerWrap>
          <SearchInput
            type="text"
            placeholder="Search for a Pokémon..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <SearchButton type="submit">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </SearchButton>
        </ContainerWrap>
      </form>
      {searchError && <Content>{searchError}</Content>}
    </>
  );
}
