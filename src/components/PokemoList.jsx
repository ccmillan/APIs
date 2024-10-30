import React, { useEffect, useState } from "react";

function PokemoList() {
  const [currentList, setCurrenList] = useState({});
  console.log(currentList);

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );

  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const handleAnterior = () => {
    previous && setUrl(previous);
  };

  const handleSiguiente = () => {
    setUrl(next);
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrenList(data);
        setNext(data.next);
        setPrevious(data.previous);
      });
  }, [url]);

  return (
    <div>
      {currentList.results && (
        <div>
          {currentList.results.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <h2>{pokemon.name}</h2>
              </div>
            );
          })}
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default PokemoList;

// hacer un fetch con el url de results para practicar
