import { useState } from "react";

import axios from "axios";
import PreviewPokemon from "../preview/preview";
import { useEffect } from "react";
//          <button onClick={searchPokemon}  value="Go" class="button-search">Search Pokemon</button> */
const Datapokedex = () => {
  let [pokemonName, setPokemonName] = useState("");
  let [pokemons, setPokemons] = useState([]);
  let [errorPokemon, setError] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchPokemon();
    }
  };

  useEffect(() => {
    const updatedPokemons = searchPokemon(pokemonName);
    setPokemons(updatedPokemons);
  }, [pokemonName]);

  const searchPokemon = (event) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemons(res.data);
        setError("");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status === 404 &&
          error.message.includes("404")
        ) {
          setError("No Pokemon found, please try again!");

          console.log("Resource not found");
        } else {
          console.log("An error occurred:", error.message);
        }
      });
  };

  const searcher = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setPokemonName(inputValue);
  };

  return (
    <div class="form__group field">
      <input
        id="pokemonNameInput"
        placeholder="Search your pokemon"
        type="text"
        value={pokemonName}
        onKeyDown={handleKeyPress}
        onChange={searcher}
        className="input-searcher form__field"
      />

      <div class="error-notfound">{errorPokemon ? errorPokemon : ""}</div>

      <PreviewPokemon data={pokemons} />
    </div>
  );
};

export default Datapokedex;
