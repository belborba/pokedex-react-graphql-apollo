import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // se for React
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/pokedex-react-graphql-apollo/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
