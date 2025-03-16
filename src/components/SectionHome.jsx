import { get } from "../data/HttpClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
export function SectionHome() {
  const getRandomPokemons = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 9) {
      const randomId = Math.floor(Math.random() * 898) + 1; // Genera un número entre 1 y 150
      if (!randomNumbers.includes(randomId)) {
        randomNumbers.push(randomId);
      }
    }
    setPokemonNames(randomNumbers.map(id => id.toString())); // Convierte los IDs a cadenas
    setIsRandom(true); // Cambia el estado para indicar que se generaron Pokémon aleatorios
  };


  const [isRandom, setIsRandom] = useState(false);  // Estado para controlar el título
  const [pokemons, setPokemons] = useState([]);
  const [pokemonNames, setPokemonNames] = useState(['1', 'charmander', 'squirtle']);  // Pokémon específicos que deseas mostrar

  useEffect(() => {
    // Si pokemonNames está vacío, no hacer nada
    const pokemonPromises = pokemonNames.map(name =>
      get(`/pokemon/${name}`) // Llamada a la API para obtener cada Pokémon por nombre
    );

    Promise.all(pokemonPromises)
      .then((data) => {
        setPokemons(data);  // Almacena los Pokémon obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener los datos: ", error);
      });
  }, [pokemonNames]);  // Este effect se ejecuta cada vez que pokemonNames cambia

  console.log(pokemons);
  return (
    <>
      <div className="container-fluid pt-5 d-flex flex-column justify-content-center align-items-center">
      <h2>{isRandom ? "Pokemons Aleatorios" : "Pokemons Iconicos"}</h2> {/* Cambia el título dependiendo de isRandom */}
      <button onClick={getRandomPokemons} className="btn-change-pokemons mt-3">Generar Pokémon Aleatorios
        </button>
      </div>
      <div className="d-flex justify-content-around flex-wrap mt-5 ">
        {pokemons.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          pokemons.map((pokemon) => {
            const pokemonTypes = pokemon.types.map((type) => type.type.name).join(" "); // Convierte los tipos en clases separadas por espacios
            return (
              <div key={pokemon.id} className={`card m-3 card-iconicos ${pokemonTypes}`} style={{ width: "18rem" }}>
                <Link to={`/pokemon/${pokemon.id}`} className="card-link">
                <img
                  src={pokemon.sprites.other['official-artwork'].front_default}
                  className="card-img-top"
                  alt={pokemon.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{pokemon.name}</h5>
                  <p className="card-text">
                    Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}
                  </p>
                  <p className="card-text">
                    Habilidad: {pokemon.abilities.map((abilitie) => abilitie.ability.name).join(", ")}
                  </p>
                </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};