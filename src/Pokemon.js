import { useState, useEffect } from 'react';
import axios from 'axios';

const DEFAULT_POKEMON = {
    name: '',
    url: ''
}

const Pokemon = () => {
    const [pokedex, setPokedex] = useState([]);
    const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);

    useEffect(() => {
        axios.get('http://localhost:3001/api/pokemons').then((response) => { setPokedex(response.data) })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const addPoke = {
            name: pokemon.name,
            url: pokemon.url
        }
        setPokedex(pokedex.concat(addPoke));
        setPokemon(DEFAULT_POKEMON);
    }

    const handleInputName = (event) => {
        const valuePokemon = {
            ...pokemon,
            name: event.target.value
        }
        console.log(valuePokemon);
        setPokemon(valuePokemon);
    }

    const handleInputUrl = (event) => {
        const valuePokemon = {
            ...pokemon,
            url: event.target.value
        }
        console.log(valuePokemon);
        setPokemon(valuePokemon);
    }


    return (
        <div>
            Pokemon
            <ul>
                {pokedex.map((pokemon, index) => (
                    <li key={index}>{pokemon.name} - {pokemon.url}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="addName" value={pokemon.name} onChange={handleInputName} />
                </div>
                <div>
                    <label>URL</label>
                    <input type="text" name="addURL" value={pokemon.url} onChange={handleInputUrl} />
                </div>
                <button>Añadir Pokemon</button>
            </form>
        </div>
    )
}

export default Pokemon