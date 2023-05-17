import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const PokemonSearchBar = () => {
  const [field, setField] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [showResults, setShowResults] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    hitApi(field);
    setShowResults(true);
    console.log(pokemonData);
  }

  async function hitApi(searchTerm) {
    await fetch("http://localhost:9090/pokemon/name/" + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <FaSearch id="search-icon" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search for Pokemon..."
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
      </form>
      {pokemonData && (
        <>
          <ul>
            <li key={pokemonData.id}>Id: {pokemonData.id}</li>
            <li key={pokemonData.name}>Name: {pokemonData.name}</li>
            <li key={pokemonData.height}>height: {pokemonData.height}</li>
            <li key={pokemonData.weight}>weight: {pokemonData.weight}</li>
            <li key={pokemonData.baseExperience}>
              baseExperience: {pokemonData.baseExperience}
            </li>
            <li key={pokemonData.order}>order: {pokemonData.order}</li>
          </ul>
        </>
      )}
    </>
  );
};
