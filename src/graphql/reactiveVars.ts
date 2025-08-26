import { makeVar } from "@apollo/client";
import type { GetPokemonQuery } from "./generated";

// Variável para armazenar o nome do Pokémon
export const pokemonNameVar = makeVar<string>("psyduck");

// Variável para armazenar os dados do Pokémon
export const pokemonDataVar = makeVar<GetPokemonQuery | null>(null);
