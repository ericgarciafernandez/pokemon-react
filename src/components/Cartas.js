import axios from "axios";
import { useEffect, useState } from "react";
import '@fontsource/roboto/500.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import CustomCard from "./CustomCard";
import Loading from "../screens/Loading";
import Error from "../screens/Error";
import { useNavigate } from "react-router-dom";


const Cartas = () => {
    const [pokedex, setPokedex] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Tiempos de espera
    const [error, setError] = useState(""); // Muestra errores
    const [numOffset, setNumOffset] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokedex/${numOffset}`);
                console.log(response);
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
    }, [numOffset]);

    const handleDetails = (namePokemon) => {
        navigate(`/detalles/${namePokemon}`);
    }

    return (
        <Grid container justifyContent="center" spacing={4} padding={2}>
            {!isLoading ? pokedex.map(element =>
                <Grid item key={element.data.name} onClick={handleDetails.bind(null, element.data.name)} >
                    <CustomCard
                        image={element.data.sprites.front_default}
                        title={element.data.name}
                        types={element.data.types}
                    />
                </Grid>
            ) : <Loading />}
            {error ? <Error errorMsg={error} /> : ''}
            {numOffset > 0 ?
                <Button onClick={() => { setNumOffset(numOffset - 20) }}>Anterior página</Button>
                : ''}
            <Button onClick={() => { setNumOffset(numOffset + 20) }}>Siguiente página</Button>
        </Grid >
    )
}

export default Cartas