import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/Pokemon/Provider/index.tsx";

// Aqui você configura o Apollo Client
const client = new ApolloClient({
  uri: "https://graphql.pokeapi.co/v1beta2", // endpoint GraphQL da PokeAPI v1beta2
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
