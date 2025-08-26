# Pokédex React (GraphQL + Apollo)

A Pokédex simulation app built with **React**, powered by **GraphQL** data (https://pokeapi.co/docs/graphql) fetching using **Apollo Client**, with a user interface fully designed by the author.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?logo=vite&logoColor=white)
![Apollo Client](https://img.shields.io/badge/Apollo%20Client-3.9.0-311C87?logo=apollographql&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-16.9.0-E10098?logo=graphql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.0-3178C6?logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Demo
Link: https://belborba.github.io/pokedex-react-graphql-apollo/
<img src="https://github.com/user-attachments/assets/644956bc-de9d-4b1f-a265-69fadf9d6a68" width="400" />


## Features

* Fetches and displays Pokémon data through **GraphQL** and **Apollo Client**
* Built with **React** for a modern, reactive frontend experience
* Structured with clear and reusable components and hooks
* **Custom-designed interface**, tailored for an immersive Pokédex feel


## Technologies Used

| Technology         | Purpose                                             |
| ------------------ | --------------------------------------------------- |
| React              | Frontend library for building the user interface   |
| TypeScript         | Strongly typed JavaScript for more robust coding  |
| Vite               | Fast build tool and development server             |
| Apollo Client      | GraphQL client for querying and managing data      |
| Styled Components  | Library for writing CSS-in-JS and styling React components |
| GraphQL            | Flexible, efficient data query language            |
| ESLint             | Code linting to maintain quality and consistency  |



## Project Structure *(optional)*

```
src/
├── components/
│   └── [ComponentName].tsx
├── hooks/
│   └── usePokemon.ts
├── pages/
│   └── [PageName].tsx
├── styles/
│   └── style.ts
├── App.tsx
└── main.tsx
```

Use imports like:

```tsx
import { usePokemon } from "@/hooks/usePokemon";
import { BigScreenContainer } from "./styles";
```


## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/belborba/pokedex-react-graphql-apollo.git
   cd pokedex-react-graphql-apollo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Your app should now be available at `http://localhost:5173` (or similar).


## Usage

Once the project is running locally:

* Browse Pokémon list
* Click on a Pokémon to view details (e.g., stats, types, images)
* Search or filter Pokémon (if implemented)
* Interact with UI elements—designed for both desktop and mobile experiences


## Custom Design

The entire UI was designed from scratch by me, focusing on:

* Clean and intuitive layout
* Pleasant typography and color scheme
* Responsive components for various screen sizes
* Consistent design system across components

---

## License

This project is open source, and available under the **MIT License**.

