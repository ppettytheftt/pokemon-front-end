import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BasicInformation } from "./BasicInformation";
import { Ability } from "./Ability";
import { HeldItem } from "./HeldItem";
import { Stat } from "./Stat";

export const PokemonSearchBar = () => {
  const [field, setField] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [basicInfo, setBasicInfo] = useState();
  const [abilitiesList, setAbilitiesList] = useState();
  const [itemsList, setItemsList] = useState();
  const [typesList, setTypesList] = useState();
  const [flavorText, setFlavorText] = useState();
  const [statsList, setStatsList] = useState();
  const [habitat, setHabitat] = useState();

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
        setBasicInfo({
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          baseExperience: data.baseExperience,
          order: data.order,
        });
        setAbilitiesList(data.abilitiesList);
        setItemsList(data.pokemonHeldItemList);
        setTypesList(
          data.pokemonFormsList[0].types.map((type) => type.type.name)
        );
        setFlavorText(data.pokemonSpecies.flavorTextEntries[0].flavor_text);
        setStatsList(data.pokemonStatsList);
        setHabitat(data.pokemonSpecies.pokemonHabitat.name);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  useEffect(() => {
    console.log(abilitiesList);
  }, [abilitiesList]);

  useEffect(() => {
    console.log(itemsList);
  }, [itemsList]);

  useEffect(() => {
    console.log(typesList);
  }, [typesList]);

  useEffect(() => {
    console.log(flavorText);
  }, [flavorText]);

  useEffect(() => {
    console.log(statsList);
  }, [statsList]);

  useEffect(() => {
    console.log(habitat);
  }, [habitat]);

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
      {basicInfo && (
        <>
          <BasicInformation pokemonInfo={basicInfo} />
        </>
      )}
      {abilitiesList && (
        <>
          <h3>Abilities:</h3>
          <ul>
            {abilitiesList?.map((ability) => {
              return <Ability ability={ability.ability.name} />;
            })}
          </ul>
        </>
      )}
      {itemsList && (
        <>
          <h3>Held Items:</h3>
          <ul>
            {itemsList?.map((item) => {
              return <HeldItem itemName={item.item.name} />;
            })}
          </ul>
        </>
      )}

      {typesList && (
        <>
          <h3>Pokemon Types:</h3>
          <ul>
            {typesList?.map((type) => {
              return <li key={type}>{type}</li>;
            })}
          </ul>
        </>
      )}
      {flavorText && (
        <>
          <h3>Flavor Text:</h3>
          <p>{flavorText}</p>
        </>
      )}

      {statsList && (
        <>
          <h3>Starting Stats:</h3>
          <ul>
            {statsList?.map((stat) => {
              return (
                <Stat statName={stat.stat.name} baseStat={stat.base_stat} />
              );
            })}
          </ul>
        </>
      )}
      {habitat && (
        <>
          <h3>Habitat:</h3>
          <p>{habitat}</p>
        </>
      )}
    </>
  );
};
