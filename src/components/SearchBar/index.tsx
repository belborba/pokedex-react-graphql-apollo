import { ContainerWrap, SearchButton, SearchInput } from "./style";
import { useState } from "react";
import { useThemeContext } from "@/context/Pokemon";

export function SearchBar() {
  const { setPokemonName } = useThemeContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setPokemonName(inputValue.toLowerCase()); // seta no context
      setInputValue(""); // limpa o input se quiser
    }
  };

  return (
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
  );
}
