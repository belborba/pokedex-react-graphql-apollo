import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface ThemeContextType {
  pokemonType: string | null;
  setPokemonType: Dispatch<SetStateAction<string | null>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
