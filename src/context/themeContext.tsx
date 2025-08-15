import { useState, type ReactNode } from "react";
import { ThemeContext } from "./useThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [pokemonType, setPokemonType] = useState<string | null>(null);

  return (
    <ThemeContext.Provider value={{ pokemonType, setPokemonType }}>
      {children}
    </ThemeContext.Provider>
  );
}

// export const useThemeContext = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error("useThemeContext must be used within a ThemeProvider");
//   }
//   return context;
// };

// //Hook (Simplifica a chamada do contexto)
// export const useForm = () => {
//   const context = useContext(FormContext);
//   if (context === undefined) {
//     throw new Error("useForm must be used within a FormProvider");
//   }
//   return context;
// };

// Dispatch<SetStateAction<string | null>> é o tipo exato da função setPokemonType.
// Ele garante que você possa tanto passar um valor direto quanto uma função baseada no estado anterior.
// Forma Simplificada: (value: string | null) => void;

// Com Dispatch<SetStateAction<T>> → o setter também aceita função baseada no estado anterior:
// setPokemonType(prev => prev === "fogo" ? "água" : "fogo");
// Com (value: string | null) => void → só aceita valor direto:
// setPokemonType("fogo"); // ok
// setPokemonType(prev => prev === "fogo" ? "água" : "fogo"); // ❌ erro
// Se você não precisa atualizar com base no valor anterior, essa forma simplificada é mais enxuta.
