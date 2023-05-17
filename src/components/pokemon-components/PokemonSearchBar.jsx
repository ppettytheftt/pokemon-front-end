import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const PokemonSearchBar = () => {
  const [field, setField] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [abilitiesList, setAbilitiesList] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    hitApi(field);
  }

  async function hitApi(searchTerm) {
    await fetch("http://localhost:9090/pokemon/name/" + searchTerm)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setIsLoading(false);
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
      {isLoading && <h2>Loading Results.. </h2>}
      {pokemonData && (
        <>
          <h3>Basic Information:</h3>
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
          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilitiesList.map((ability) => {
              return <li key={ability.slot}>{ability.slot}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};
