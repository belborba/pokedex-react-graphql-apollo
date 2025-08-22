import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface PokemonContext {
  pokemonName: string;
  setPokemonName: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<PokemonContext | undefined>(
  undefined
);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return ctx;
};
