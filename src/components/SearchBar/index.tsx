import { ContainerWrap, SearchButton, SearchInput } from "./style";

export function SearchBar() {
  return (
    <>
      <ContainerWrap>
        <SearchInput placeholder="Search for a Pokémon..." />
        <SearchButton>
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </SearchButton>
      </ContainerWrap>
    </>
  );
}
