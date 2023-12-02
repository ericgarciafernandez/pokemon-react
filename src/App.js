import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import axios from "axios";
import Error from './screens/Error';
import Loading from './screens/Loading';
import Listado from './components/Listado';
import Form from './components/Form';

const DEFAULT_POKEMON = {
  id: null,
  name: "",
  url: ""
};

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons`);
        const pokemonsWithId = response.data.map((pokemon, index) => ({ ...pokemon, id: uuidv4() }));
        setPokedex(pokemonsWithId);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!pokemon.name || !pokemon.url) {
      return setError("Error al añadir pokemon");
    }
    const newPokemon = { ...pokemon, id: uuidv4() };
    setPokedex([...pokedex, newPokemon]);
    setPokemon(DEFAULT_POKEMON);
    if (error) {
      setError("");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPokemon((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      {pokedex ? <Listado pokedex={pokedex} /> : null}
      {error ? <Error errorMsg={error} /> : null}
      {isLoading ? <Loading /> : null}
      {/* <Form changes={handleInputChange} submit={handleSubmit} pokemon={pokemon} /> */}
    </div>
  )
}

export default App