// import { useEffect } from "react";
// import { BasicInfo } from "./BasicInfo";

// export const PokemonSearchResults = ({ input }) => {
//   const [pokemonData, setPokemonData] = useState({
//     id: 0,
//     name: "",
//     baseExperience: 0,
//     height: 0,
//     weight: 0,
//     order: 0,
//   });

//   Object.observe(input, getPokemonData(input));

//   async function getPokemonData() {
//     try {
//       const response = await fetch(
//         "https://localhost:9090/pokemon/name" + input
//       );
//       setPokemonData({
//         id: response.data.id,
//         name: response.data.name,
//         baseExperience: response.data.baseExperience,
//         height: response.data.height,
//         weight: response.data.weight,
//         order: response.data.order,
//       });
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
//   }

//   if (input != "") {
//     return (
//       <div className="basic-info-container">
//         <BasicInfo
//           id={pokemonData.id}
//           name={pokemonData.name}
//           baseExperience={pokemonData.baseExperience}
//           height={pokemonData.height}
//           order={pokemonData.order}
//           weight={pokemonData.weight}
//         />
//       </div>
//     );
//   } else {
//     return <h3>pokemon data will be displayed here.</h3>;
//   }
// };
