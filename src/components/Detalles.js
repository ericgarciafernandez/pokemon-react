import { Button, Card, CardMedia, CardContent, CardActions, Typography, Stack, Chip } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as Constants from '../Constants'

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
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    component="img"
                    alt="sprite"
                    image={specificPokemon.name ? specificPokemon.sprites.front_default : ''}
                />
                <CardContent sx={{ bgcolor: '#bbdefb' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {specificPokemon.name}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {specificPokemon.name ? specificPokemon.types.map((element, index) => (
                            <Chip
                                style={{
                                    backgroundColor: Constants.DEFAULT_COLORS_TYPE[element.type.name],
                                    textTransform: 'uppercase'
                                }}
                                key={element.type.name}
                                label={element.type.name} />
                        )) : ''}
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to="/">Volver</Link></Button>
                </CardActions>
            </Card >
        </>
    )
}

export default Detalles
