export function BasicInformation(props) {
  const { pokemonInfo } = props;
  return (
    <>
      <h3>Basic Information:</h3>
      <ul>
        <li key={pokemonInfo.id + 100}>Id: {pokemonInfo.id}</li>
        <li key={pokemonInfo.name}>Name: {pokemonInfo.name}</li>
        <li key={pokemonInfo.height}>height: {pokemonInfo.height}</li>
        <li key={pokemonInfo.weight}>weight: {pokemonInfo.weight}</li>
        <li key={pokemonInfo.baseExperience}>
          baseExperience: {pokemonInfo.baseExperience}
        </li>
        <li key={pokemonInfo.order + 1000}>order: {pokemonInfo.order}</li>
      </ul>
    </>
  );
}
