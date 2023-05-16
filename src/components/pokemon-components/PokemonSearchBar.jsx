import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const PokemonSearchBar = ({ hitPokemonEndpoint }) => {
  const [field, setField] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    useEffect(() => {
      console.log(field);
      hitPokemonEndpoint(field);
    });
  }

  return (
    <>
      <FaSearch id="search-icon" />
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input
          type="text"
          placeholder="Search for Pokemon..."
          value={field}
          onChange={(e) => setField(e.target.value)}
        />
      </form>
    </>
  );
};
