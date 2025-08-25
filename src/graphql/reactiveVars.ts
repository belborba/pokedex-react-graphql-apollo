// src/graphql/reactiveVars.ts
import { makeVar } from "@apollo/client";
import type { GetPokemonQuery } from "./generated";

// Variável para armazenar o nome do Pokémon
export const pokemonNameVar = makeVar<string>("");

// Variável para armazenar os dados do Pokémon
export const pokemonDataVar = makeVar<GetPokemonQuery | null>(null);
