import { useState } from "react";
import axios from "axios";
import Detalles from "./Detalles";

const Listado = ({ pokedex }) => {
    const [specificPokemon, setSpecificPokemon] = useState({});

    const handleDetails = (namePokemon) => {
        console.log(namePokemon);
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + namePokemon);
                setSpecificPokemon(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokemon();
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>URL</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {pokedex.map((pokemon, index) => (
                        <tr key={pokemon.id}>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.url}</td>
                            <td onClick={handleDetails.bind(null, pokemon.name)}>Entrar</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {Object.keys(specificPokemon).length > 0 ? <Detalles details={specificPokemon} /> : null}
        </div>
    )
}

export default Listado