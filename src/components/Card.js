import axios from "axios";
import { useContext, useEffect, useState } from "react";
import '@fontsource/roboto/500.css';
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import Loading from "../screens/Loading";
import Error from "../screens/Error";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/DataContext";

const Card = () => {
    const [pokedex, setPokedex] = useState([]);
    const { offset, offsetType, error, setError, isLoading, setIsLoading, pokemonWithType, pokemonType } = useContext(PokemonContext);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setIsLoading(true);
                let dataOffsetPokemons = [];
                if (pokemonType !== '') {
                    dataOffsetPokemons = pokemonWithType.slice(offsetType - 9, offsetType);
                } else {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokedex/${offset}`);
                    dataOffsetPokemons = response.data.map(element => element.name);
                }
                const infoPromises = dataOffsetPokemons.map(async (namePokemon) => {
                    const pokemonResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + namePokemon);
                    return pokemonResponse;
                });
                const infoPokemons = await Promise.all(infoPromises);
                setPokedex(infoPokemons);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemons();
    }, [offset]);

    useEffect(() => {
        const fetchPokWithType = async () => {
            try {
                const chunk = pokemonWithType.slice(offsetType - 9, offsetType);
                console.log(chunk);
                const promises = chunk.map(async (namePokemon) => {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + namePokemon);
                    return response;
                });
                const newPokedex = await Promise.all(promises);
                setPokedex(newPokedex);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokWithType();
    }, [pokemonWithType]);

    return (
        <Grid container justifyContent="center" padding={2} sx={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: '#454545', textDecoration: 'none', cursor: 'pointer' }} >
            {!isLoading ? pokedex.map(element =>
                <Link key={element.data.id} to={`/detalles/${element.data.name}`} className="linkStyle">
                    <Grid item padding={1} >
                        <CustomCard
                            image={element.data.sprites.front_default}
                            id={element.data.id}
                            title={element.data.name}
                            types={element.data.types}
                        />
                    </Grid>
                </Link>
            ) : <Loading />}
            {error ? <Error errorMsg={error} /> : ''}
        </Grid >
    )
}

export default Card