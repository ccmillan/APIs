import React from "react";

const Pokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon-form/1/").then((res) => {
    console.log(res);
  });
  return <div>Pokemon</div>;
};

export default Pokemon;
