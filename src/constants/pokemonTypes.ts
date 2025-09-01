type PokemonType =
  | "grass"
  | "fire"
  | "water"
  | "electric"
  | "psychic"
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "dragon"
  | "ice"
  | "dark"
  | "fairy";

export const TYPE_GRADIENTS: Record<PokemonType, string[]> = {
  grass: ["#A7DB8D", "#78C850"],
  fire: ["#F5AC78", "#F08030"],
  water: ["#9DB7F5", "#6890F0"],
  electric: ["#FAE078", "#F8D030"],
  psychic: ["#FF9896", "#C66663"],
  normal: ["#C6C6A7", "#A8A878"],
  fighting: ["#D67873", "#C03028"],
  flying: ["#C6B7F5", "#A890F0"],
  poison: ["#C183C1", "#A040A0"],
  ground: ["#EBD69D", "#E0C068"],
  rock: ["#D1C17D", "#B8A038"],
  bug: ["#C6D16E", "#A8B820"],
  ghost: ["#A292BC", "#705898"],
  steel: ["#D1D1E0", "#B8B8D0"],
  dragon: ["#A27DFA", "#7038F8"],
  ice: ["#BCE6E6", "#98D8D8"],
  dark: ["#A29288", "#705848"],
  fairy: ["#F4BDC9", "#EE99AC"],
};

// TYPE_GRADIENTS será um objeto onde:
// a chave (key) é uma string;
// o valor (value) é uma string[] (um array de string)
// Record<K, V> -> Tipo utilitário do TypeScript que cria um objeto com chaves K e valores V

// Pokemon Type
// Deixa os dados mais seguros dizendo que as chaves são só tipos de Pokémon possíveis.
