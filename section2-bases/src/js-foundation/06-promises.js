const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return fetch(url)
    .then(res => res.json())
    .then(poke => poke.name);
}

module.exports = getPokemonById;
