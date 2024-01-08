import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Grid, Box, CardActions, Button, Typography } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

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

    console.log(specificPokemon);

    return (
        <Container maxWidth="md">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        {nombrePokemon.toUpperCase()}
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center', marginTop: '5rem' }}>
                    <Box
                        component="img"
                        className="card-media"
                        alt="image pokemon"
                        src={specificPokemon.name ? specificPokemon.sprites.other.showdown.front_default : ''}

                    />
                </Grid>
                <Grid item xs={6}>
                    <ul>
                        {
                            specificPokemon.name ? specificPokemon.stats.map(el =>
                                <li key={el.stat.name}>
                                    <p>{el.stat.name.toUpperCase() + ' ' + el.base_stat}</p>
                                    <LinearProgress variant="determinate" value={el.base_stat > 100 ? 100 : el.base_stat}></LinearProgress>
                                </li>
                            ) : ''
                        }
                    </ul>


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
