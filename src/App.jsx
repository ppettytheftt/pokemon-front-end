import { useState } from "react";
import "./App.css";
import { PokemonSearchBar } from "./components/pokemon-components/PokemonSearchBar";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  function hitPokemonEndpoint(searchString) {
    useEffect(() => {
      fetch("http://localhost:9090/pokemon/name/" + searchString).then((data) =>
        setPokemonData(data)
      );
    }, []);
  }

  return (
    <div className="App">
      <PokemonSearchBar hitPokemonEndpoint={hitPokemonEndpoint} />
    </div>
  );
}

export default App;
