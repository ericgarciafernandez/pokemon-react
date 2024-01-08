import axios from "axios";
import { useContext, useEffect, useState } from "react";
import '@fontsource/roboto/500.css';
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import Loading from "../screens/Loading";
import Error from "../screens/Error";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/DataContext";
import './Cartas.css';


const Cartas = () => {
    const [pokedex, setPokedex] = useState([]);
    const { offset, setOffset, error, setError, isLoading, setIsLoading } = useContext(PokemonContext);

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokedex/${offset}`);
                const namepokemons = response.data.map(element => element.name);
                const infoPokemons = await Promise.all(
                    namepokemons.map(async (namePokemon) => {
                        return await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + namePokemon);
                    })
                );
                setPokedex(infoPokemons);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemons();
    }, [offset]);

    return (
        <Grid container justifyContent="center" padding={2} sx={{ borderLeft: '1px solid', borderRight: '1px solid', borderColor: '#454545' }} >
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

export default Cartas