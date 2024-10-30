import React, { useEffect, useState } from "react";
function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  const handleAnterior = () => {
    id > 1 && setId(id - 1);
  };

  const handleSiguiente = () => {
    setId(id + 1);
  };

  console.log(id);
  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br />
          {id > 1 ? (
            <button onClick={handleAnterior}>Anterior</button>
          ) : (
            <button disabled>Anterior</button>
          )}

          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
