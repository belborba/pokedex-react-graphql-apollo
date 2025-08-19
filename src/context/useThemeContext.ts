import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ThemeContextType {
  pokemonName: string;
  setPokemonName: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useThemeContext must be used within a ThemeProvider");
  return ctx;
};
