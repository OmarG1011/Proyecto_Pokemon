import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/HttpClient";  // Función para obtener los datos

// Mapeo de los tipos con sus clases de fondo correspondientes
const typeClasses = {
  fire: "fire",
  water: "water",
  grass: "grass",
  electric: "electric",
  rock: "rock",
  normal: "normal",
  bug: "bug",
  poison: "poison",
  fighting: "fighting",
  ghost: "ghost",
  dragon: "dragon",
};

export function PokemonDetail() {
  const { id } = useParams(); // Obtiene el ID del Pokémon de la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Cargar los detalles del Pokémon cuando se monta el componente
    get(`/pokemon/${id}`)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del Pokémon: ", error);
      });
  }, [id]); // Se vuelve a ejecutar cuando el ID cambia

  if (!pokemon) {
    return <p>Cargando...</p>; // Muestra "Cargando..." mientras se obtiene la información
  }

  // Obtener la clase del fondo según el primer tipo del Pokémon
  const backgroundClass = typeClasses[pokemon.types[0]?.type.name] || 'normal';

  return (
    <div className={`container-fluid min-vh-100 ${backgroundClass} text-black`}>
      <h2 className="text-center">{pokemon.name}</h2> {/* Nombre en la parte superior */}
      <div className="d-flex justify-content-center align-items-center pt-5">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          style={{ width: "200px" }}
        />
        <div className="ms-4">
          <h3>Detalles</h3>
          <p><strong>Tipos:</strong> {pokemon.types.map(type => type.type.name).join(", ")}</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map(abilitie => abilitie.ability.name).join(", ")}</p>
          <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
          <p><strong>Peso:</strong> {pokemon.weight} hectogramos</p>
        </div>
      </div>
    </div>
  );
}
