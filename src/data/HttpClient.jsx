const API = "https://pokeapi.co/api/v2/";  // URL base de la API de Pokémon
export function get(path, params = "") {
    return fetch(`${API}${path}${params ? `?${params}` : ""}`)
        .then(result => result.json());
}
