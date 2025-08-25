import { useState, type ReactNode } from "react";
import { ThemeContext } from "..";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [pokemonName, setPokemonName] = useState<string>("psyduck");
  return (
    <ThemeContext.Provider value={{ pokemonName, setPokemonName }}>
      {children}
    </ThemeContext.Provider>
  );
}
