import { createContext, useState } from "react";

export const PokemonContext = createContext();

const DataContext = ({ children }) => {
    const [pokemonWithType, setPokemonWithType] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false); // Tiempos de espera
    const [error, setError] = useState(""); // Muestra errores

    return (
        <PokemonContext.Provider
            value={
                {
                    pokemonWithType, setPokemonWithType,
                    offset, setOffset,
                    isLoading, setIsLoading,
                    error, setError
                }
            }>
            {children}
        </PokemonContext.Provider>
    )
}

export default DataContext