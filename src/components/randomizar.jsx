import { useState } from "react";
export function RandomPokemonGenerator({ setPokemonNames }) {
  // Función para generar 3 números aleatorios entre 1 y 150
  const getRandomPokemons = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const randomId = Math.floor(Math.random() * 150) + 1; // Genera un número entre 1 y 150
      if (!randomNumbers.includes(randomId)) {
        randomNumbers.push(randomId);
      }
    }
    setPokemonNames(randomNumbers.map(id => id.toString())); // Convierte los IDs a cadenas
  };

  return (
    <button onClick={getRandomPokemons} className="btn btn-primary mt-3">
      Generar Pokémon Aleatorios
    </button>
  );
}
