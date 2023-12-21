import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Grid, Box, CardActions, Button, Typography } from "@mui/material";

const Detalles = () => {
    const { nombrePokemon } = useParams();
    const [specificPokemon, setSpecificPokemon] = useState({}); // Detalle del pokemon

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/pokemons/` + nombrePokemon);
                setSpecificPokemon(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchPokemon();
    }, [nombrePokemon]);

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>

                    <Typography variant="h2" gutterBottom>
                        {nombrePokemon}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        component="img"
                        className="card-media"
                        alt="image pokemon"
                        src={specificPokemon.name ? specificPokemon.sprites.front_default : ''}
                    />
                </Grid>
                <Grid item xs={6}>
                    {
                        specificPokemon.name ? specificPokemon.stats.map(el => <div key={el.stat.name}>{el.base_stat}</div>) : ''
                    }
                </Grid>
                <Grid item xs={12}>
                    <CardActions>
                        <Button size="small"><Link to="/">Volver</Link></Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Detalles
