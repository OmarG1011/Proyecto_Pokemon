import { Link } from "react-router-dom";
import { get } from "../data/HttpClient";
import { useEffect, useState } from "react";

export function ViewAllPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const limit = 198;

  const fetchPokemons = () => {
    const newPokemonIds = Array.from({ length: limit }, (_, i) => (offset + i + 1).toString());

    const pokemonPromises = newPokemonIds.map(id => get(`/pokemon/${id}`));

    Promise.all(pokemonPromises)
      .then((data) => {
        setPokemons((prevPokemons) => {
          const allPokemons = [...prevPokemons, ...data];
          const uniquePokemons = Array.from(new Map(allPokemons.map(pokemon => [pokemon.id, pokemon])).values());
          return uniquePokemons;
        });
        setOffset((prevOffset) => prevOffset + limit);
      })
      .catch((error) => {
        console.error("Error al obtener los datos: ", error);
      });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  useEffect(() => {
    let filtered = pokemons;
    if (searchTerm) {
      filtered = filtered.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    }
    if (selectedType) {
      filtered = filtered.filter(pokemon => pokemon.types.some(type => type.type.name === selectedType));
    }
    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, pokemons]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="container-fluid pt-5 d-flex flex-column justify-content-center align-items-center">
        <h2>Pokémon</h2>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Buscar Pokémon..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select className="form-select mt-3" onChange={handleTypeChange} value={selectedType}>
          <option value="">Selecciona un tipo</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Eléctrico</option>
        </select>
      </div>

      <div className="d-flex justify-content-around flex-wrap mt-5">
        {filteredPokemons.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          filteredPokemons.map((pokemon) => {
            const pokemonTypes = pokemon.types.map((type) => type.type.name).join(" ");
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

      <div className="d-flex justify-content-center mt-3">
        <button onClick={fetchPokemons} className="btn btn-primary">Cargar más</button>
      </div>
    </>
  );
}
